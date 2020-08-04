const express = require('express')
const axios = require('axios')
const keys = require('../config/keys');

const router = express.Router();

// TODO: Protect backend routes after integrating oauth login, and preserving tokens

// Method: GET
// Test route
router.get('/test', (req, res) => {

  res.send({ message: 'working' });

})

// Method: POST
// Claim process - submit the claim & email confirmation
router.post('/submit', (req, res) => {

  const headers = {
    headers: {
      'Authorization': `Bearer ${keys.insuremo.api_token}`,
      'X-ebao-tenant-id': keys.insuremo.tenant_id,
      'Content-Type': 'application/json'
    }
  }

  const claimReq = req.body

  const fnolReq = {
    "SequenceFactors": {
      "PRODUCT_CODE": claimReq.ProductCode
    },
    "OtherFactors": {}
  }

  // generate the FNOL Number
  axios.post(`https://portal-gw.insuremo.com/${keys.insuremo.tenant_id}/v1/platform-pub/public/numbering/v1/generateByTypeAndNumberFactors?numberingType=FNOL_NUMBER`, fnolReq, headers)
    .then(result => {

      if (result.status === 200) {
        const fnolNumber = result.data;
        console.log(`FNOL = ${fnolNumber}`);
        claimReq.FnolNo = fnolNumber

        axios.post(`https://portal-gw.insuremo.com/${keys.insuremo.tenant_id}/v1/claim-core/notice/v1/create`, claimReq, headers)
          .then(result => {
            if (result.status == 200) {
              sendEmail(result.data.ClaimPartyList[0].Email, result.data.ContactName, result.data.FnolNo)
              res.json(result.data)
            } else {
              res.status(result.status).send(result.data)
            }
          })
          .catch(error => {
            console.log(error)
            res.status(500).json(error)
          })

      } else {
        res.status(result.status).send(result.data)
      }
    })
    .catch(error => console.log(error))


})

function sendEmail(emailAddress, name, claimNumber) {
  const headers = {
    headers: {
      'Authorization': `Bearer ${keys.insuremo.api_token}`,
      'X-ebao-tenant-id': keys.insuremo.tenant_id,
      'Content-Type': 'application/json'
    }
  }
  console.log(`Sending email ${emailAddress}, ${name}, ${claimNumber}`)
  const email = `Dear ${name},<br/><br/> We have received your claim. The claim notification reference is ${claimNumber}, you can use this number to track the progress of your claim.`
  const request = {
    consignee: [emailAddress],
    subject: 'Your claim has been received',
    account: 'ebaocloud.appadmin@ebaocloud.com',
    content: email
  }
  axios.post('https://portal-gw.insuremo.com/eBao/1.0/email/send', request, headers)
    .then(res => {
      if (res.status == 200) {
        console.log('Email sent successfully')
        console.log(res.data)
      } else {
        console.log('Error sending email')
        console.log(res.data)
      }
    })
    .catch(error => console.log(error))
}

module.exports = router;
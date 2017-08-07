const express = require('express');
const router = express.Router();
const Domain = require('../models/domain');

//Select All Domains
router.get('/', (req, res, next) => {
  Domain.getDomains({}, (err, domains) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to get Domains', err: err });
    } else {
      res.json({ success: true,  domains: domains });
    }
  });
});

//Add new Domain
router.post('/', (req, res, next) => {
  let newDomain = new Domain(req.body);
  Domain.addDomain(newDomain, (err, domain) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to register Domain!' });
    } else {
      res.json({ success: true, msg: 'Domain registered', domain: domain });
    }
  });
});

//Select Domain by a filter
/*router.post('/environments', (req, res, next) => {
  Domain.getEnvironments(req.body, (err, environments) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to get Environments', err: err });
    } else {
      res.json({ success: true, environments: environments });
    }
  });
});*/

//Get Domain by ID
router.get('/:domain_id', (req, res, next) => {
  Domain.getDomainById(req.params.domain_id, (err, domain) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to get Domain', err: err });
    } else {
      res.json({ success: true, domain: domain });
    }
  });
});

//Delete Domain
router.delete('/:domain_id', (req, res, next) =>{
  Domain.deleteDomain(req.params.domain_id, (err)=>{
    if (err) {
      res.json({ success: false, msg: 'Failed to delete Domain', err: err });
    } else {
      res.json({ success: true, msg: 'Domain was deleted' });
    }
  });
});

//Update Domain
router.put('/:domain_id', (req, res, next) => {
  Domain.updateDomain(req.params.domain_id, req.body, (err, domain) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to delete Domain', err: err });
    }else{
      res.json({msg: "Domain updated", domain: domain});
    }
  });
});

module.exports = router;

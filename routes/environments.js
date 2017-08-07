const express = require('express');
const router = express.Router();
const Environment = require('../models/environment');

//Select All Envs
router.get('/', (req, res, next) => {
  Environment.getEnvironments({}, (err, environments) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to get Environments', err: err });
    } else {
      res.json({ success: true,  environments: environments });
    }
  });
});

//Add new Env
router.post('/', (req, res, next) => {
  let newEnvironment = new Environment(req.body);
  Environment.addEnvironment(newEnvironment, (err, environment) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to register environment!' });
    } else {
      res.json({ success: true, msg: 'Environment registered', environment: environment });
    }
  });
});

//Select Env by a filter
/*router.post('/environments', (req, res, next) => {
  Environment.getEnvironments(req.body, (err, environments) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to get Environments', err: err });
    } else {
      res.json({ success: true, environments: environments });
    }
  });
});*/

//Get Env by ID
router.get('/:environment_id', (req, res, next) => {
  Environment.getEnvironmentById(req.params.environment_id, (err, environment) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to get Environment', err: err });
    } else {
      res.json({ success: true, environment: environment });
    }
  });
});

//Delete Env
router.delete('/:environment_id', (req, res, next) =>{
  Environment.deleteEnvironment(req.params.environment_id, (err)=>{
    if (err) {
      res.json({ success: false, msg: 'Failed to delete Environment', err: err });
    } else {
      res.json({ success: true, msg: 'Environment was deleted' });
    }
  });
});

//Update Env
router.put('/:environment_id', (req, res, next) => {
  Environment.updateEnvironment(req.params.environment_id, req.body, (err, environment) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to delete Environment', err: err });
    }else{
      res.json({msg: "Environment updated", environment: environment});
    }
  });
});

module.exports = router;

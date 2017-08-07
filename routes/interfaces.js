const express = require('express');
const router = express.Router();
const Interface = require('../models/interface');

//Select All Interfaces
router.get('/', (req, res, next) => {
  Interface.getInterfaces({}, (err, interfaces) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to get Interfaces', err: err });
    } else {
      res.json({ success: true,  interfaces: interfaces });
    }
  });
});

//Add new Interface
router.post('/', (req, res, next) => {
  let newInterface = new Interface(req.body);
  Interface.addInterface(newInterface, (err, interface) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to register Interface!' });
    } else {
      res.json({ success: true, msg: 'Interface registered', interface: interface });
    }
  });
});

//Select Interface by a filter
/*router.post('/environments', (req, res, next) => {
  Interface.getEnvironments(req.body, (err, environments) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to get Environments', err: err });
    } else {
      res.json({ success: true, environments: environments });
    }
  });
});*/

//Get Interface by ID
router.get('/:interface_id', (req, res, next) => {
  Interface.getInterfaceById(req.params.interface_id, (err, interface) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to get Interface', err: err });
    } else {
      res.json({ success: true, interface: interface });
    }
  });
});

//Delete Interface
router.delete('/:interface_id', (req, res, next) =>{
  Interface.deleteInterface(req.params.interface_id, (err)=>{
    if (err) {
      res.json({ success: false, msg: 'Failed to delete Interface', err: err });
    } else {
      res.json({ success: true, msg: 'Interface was deleted' });
    }
  });
});

//Update Interface
router.put('/:interface_id', (req, res, next) => {
  Interface.updateInterface(req.params.interface_id, req.body, (err, interface) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to delete Interface', err: err });
    }else{
      res.json({msg: "Interface updated", interface: interface});
    }
  });
});

module.exports = router;

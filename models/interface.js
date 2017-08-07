const mongoose = require('mongoose');

const InterfaceSchema = mongoose.Schema({
  interface_id: { type: Number, get: v => Math.round(v), set: v => Math.round(v), required: true },
  global_id: { type: String, required: true },
  package: { type: String, required: false },
  port: { type: Number, get: v => Math.round(v), set: v => Math.round(v), required: true },
  domain: { type: String, required: true },
  environment:  { type: String, required: true },
  description:  { type: String, required: false }
});

const Interface = module.exports = mongoose.model('Interface', InterfaceSchema);

module.exports.addInterface = (newInterface, callback) => {
  newInterface.save(callback);
};

module.exports.getInterfaces = (filters ,callback) => {
  Interface.find(filters,callback);
};

module.exports.getInterfaceById = (id, callback) => {
  Interface.findById(id, callback);
};

module.exports.deleteInterface = (id, callback) => {
  Interface.findByIdAndRemove(id, callback);
};

module.exports.updateInterface = (id, newFields, callback) =>{
  Interface.findById(id, (err, interface) => {
    interface.interface_id = newFields.interface_id;
    interface.global_id = newFields.global_id;
    interface.package = newFields.package;
    interface.port = newFields.port;
    interface.domain = newFields.domain;
    interface.environment = newFields.environment;
    interface.description = newFields.description;
    interface.save(callback);
  });
};
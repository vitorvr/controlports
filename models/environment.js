const mongoose = require('mongoose');

const EnvironmentSchema = mongoose.Schema({
  id: { type: Number, get: v => Math.round(v), set: v => Math.round(v), required: true },
  environmentName: { type: String, required: true }
});

const Environment = module.exports = mongoose.model('Environment', EnvironmentSchema);

module.exports.addEnvironment = function (newEnvironment, callback) {
  newEnvironment.save(callback);
};

module.exports.getEnvironments = function (filters ,callback) {
  Environment.find(filters,callback);
};

module.exports.getEnvironmentById = function (id, callback) {
  Environment.findById(id, callback);
};

module.exports.deleteEnvironment = function(id, callback){
  Environment.findByIdAndRemove(id, callback);
};

module.exports.updateEnvironment = function(id, newFields, callback){
  Environment.findById(id, (err,environment) => {
    environment.environmentName = newFields.environmentName;
    environment.save(callback);
  });
};
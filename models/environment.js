const mongoose = require('mongoose');

const EnvironmentSchema = mongoose.Schema({
  id: { type: Number, get: v => Math.round(v), set: v => Math.round(v), required: true },
  environment_name: { type: String, required: true }
});

const Environment = module.exports = mongoose.model('Environment', EnvironmentSchema);

module.exports.addEnvironment = (newEnvironment, callback) => {
  newEnvironment.save(callback);
};

module.exports.getEnvironments = (filters ,callback) => {
  Environment.find(filters,callback);
};

module.exports.getEnvironmentById = (id, callback) => {
  Environment.findById(id, callback);
};

module.exports.deleteEnvironment = (id, callback) => {
  Environment.findByIdAndRemove(id, callback);
};

module.exports.updateEnvironment = (id, newFields, callback) => {
  Environment.findById(id, (err,environment) => {
    environment.environment_name = newFields.environment_name;
    environment.save(callback);
  });
};

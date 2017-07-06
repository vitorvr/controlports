const mongoose = require('mongoose');

const DomainSchema = mongoose.Schema({
  id: { type: Number, get: v => Math.round(v), set: v => Math.round(v), required: true },
  domainName: { type: String, required: true },
  environment: { type: String, required: true }
});

const Domain = module.exports = mongoose.model('Domain', DomainSchema);

module.exports.addDomain = function (newDomain, callback) {
  newDomain.save(callback);
};

module.exports.getDomains = function (filters ,callback) {
  Domain.find(filters,callback);
};

module.exports.getDomainById = function (id, callback) {
  Domain.findById(id, callback);
};

module.exports.deleteDomain = function(id, callback){
  Domain.findByIdAndRemove(id, callback);
};

module.exports.updateDomain = function(id, newFields, callback){
  Domain.findById(id, (err, domain) => {
    domain.domainName = newFields.domainName;
    domain.environment = newFields.environment;
    domain.save(callback);
  });
};
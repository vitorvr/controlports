const mongoose = require('mongoose');

const DomainSchema = mongoose.Schema({
  id: { type: Number, get: v => Math.round(v), set: v => Math.round(v), required: true },
  domain_name: { type: String, required: true },
  environment: { type: String, required: true }
});

const Domain = module.exports = mongoose.model('Domain', DomainSchema);

module.exports.addDomain = (newDomain, callback) => {
  newDomain.save(callback);
};

module.exports.getDomains = (filters ,callback) => {
  Domain.find(filters,callback);
};

module.exports.getDomainById = (id, callback) => {
  Domain.findById(id, callback);
};

module.exports.deleteDomain = (id, callback) => {
  Domain.findByIdAndRemove(id, callback);
};

module.exports.updateDomain = (id, newFields, callback) => {
  Domain.findById(id, (err, domain) => {
    domain.domain_name = newFields.domain_name;
    domain.environment = newFields.environment;
    domain.save(callback);
  });
};

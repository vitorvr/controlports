const mongoose = require('mongoose');

const QuoteSchema = mongoose.Schema({
  name: { type: String, required: true },
  quote: { type: String, required: true }
});

const Quote = module.exports = mongoose.model('Quote', QuoteSchema);

module.exports.addQuote = function (newQuote, callback) {
  newQuote.save(callback);
};

module.exports.findQuotes = function (filters ,callback) {
  Quote.find(filters,callback);
};

module.exports.findByID = function (id, callback) {
  Quote.findById(id, callback);
};

module.exports.deleteQuote = function(id, callback){
  Quote.findByIdAndRemove(id, callback);
};

module.exports.updateQuote = function(id, newFields, callback){
  Quote.findById(id, (err, quote) => {
    quote.name = newFields.name;
    quote.quote = newFields.quote;
    quote.save(callback);
  });
};
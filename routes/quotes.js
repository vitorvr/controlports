const express = require('express');
const router = express.Router();
const Quote = require('../models/quote');

router.post('/quote', (req, res, next) => {
  let newQuote = new Quote(req.body);
  Quote.addQuote(newQuote, (err, quote) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to register quote' });
    } else {
      res.json({ success: true, msg: 'Quote registered', quote });
    }
  });
});

router.get('/quotes', (req, res, next) => {
  Quote.findQuotes({}, (err, quotes) => {
    if (err) {
      res.json(err);
    } else {
      res.json(quotes);
    }
  });
});

router.post('/quotes', (req, res, next) => {
  Quote.findQuotes(req.body, (err, quotes) => {
    if (err) {
      res.json(err);
    } else {
      res.json(quotes);
    }
  });
});

router.get('/quotes/:quote_id', (req, res, next) => {
  Quote.findByID(req.params.quote_id, (err, quote) => {
    if (err) {
      res.json(err);
    } else {
      res.json(quote);
    }
  });
});

router.delete('/quotes/:quote_id', (req, res, next) =>{
  Quote.deleteQuote(req.params.quote_id, (err)=>{
    if(err)
      res.json(err);
    res.json({msg: 'Quote was deleted'});
  });
});

router.put('/quotes/:quote_id', (req, res, next) => {
  Quote.updateQuote(req.params.quote_id, req.body, (err, quote) => {
    if (err)
      res.json(err);
    res.json({msg: "Quote updated", quote: quote});
  });
});

module.exports = router;

const db = require('../data/dbConfig');

module.exports = {
	getQuotes: () => {
		return db('quotes');
	},

	getQuotes: id => {
		return db('quotes').where({ id: Number(id) }).select('id', 'quote', 'char');
	},

	getFaves: id => {
		return db('quotes').where({ quoteID: Number(id) }).select('id', 'quote', 'char');
	},

	addQuote: newQuote => {
		return db('quotes').insert(quote);
	}
};
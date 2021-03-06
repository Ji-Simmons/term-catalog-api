const mongoose = require('mongoose');
const schema = require('./terms.model');

schema.statics = {
    create: function(data, callback)
    {
        const document = new this(data);
        document.save(callback)
    },
    get: function(query, callback)
    {
        this.find(query, null, {sort: 'string'}, callback);
        
    },
    update: function(query, data, callback)
    {
        this.findOneAndUpdate(query, {$set: data}, {new: true}, callback);
        
    },
    delete: function(query, callback)
    {
        this.findOneAndDelete(query, callback);
    }
}
// the first argument is the proper name of your collection
const model = mongoose.model('terms', schema);
module.exports = model;
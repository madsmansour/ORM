const mongoose = require('mongoose');
const uri = require('./settings').mongo_uri;
mongoose.connect(uri, { useNewUrlParser: true });

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => {
    console.log('meow'); mongoose.disconnect();
}).then();

exports.something = {}


const MongoClient = require('mongodb').MongoClient;
const uri = require('./settings').mongo_uri;
console.log(uri);
//const uri = "mongodb+srv://datamatiker:CodeWarrior8@cluster0-8j9w1.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("sample_training").collection("zips");
  // perform actions on the collection object
  let result = collection.findOne({"city" : {$regex : ".*WA.*"}}).then(
      (result) => {
          console.log(result);
    });
  client.close();
});

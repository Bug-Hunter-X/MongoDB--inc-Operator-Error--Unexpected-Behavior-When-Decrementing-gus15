```javascript
//Incorrect usage of $inc operator
db.collection('myCollection').updateOne( { "_id": ObjectId("6509169576676666666666") }, { $inc: { "counter": -1 } } );
```
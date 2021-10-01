module.exports = function(db, app, ObjectId){
    var result
    app.post('./api/deleteitem', function(req, res){
        if (!req.body){
            return res.sendStatus(400)
        }
        productID = req.body.productid;


        var objectid = new ObjectId(productID);
        const collection = db.collection('products');

        collection.deleteOne({_id:objectid}, (err,docs)=>{
            collection.find({}).toArray((err, data)=>{
                res.send(data);
            });
        })
    });
}
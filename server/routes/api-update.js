module.exports = function(db, app, ObjectId){
    var result
    app.post('./api/update', function(req, res){
        if (!req.body){
            return res.sendStatus(400)
        }
        product = req.body

        var objectid = new ObjectId(product.objid);
        const collection = db.collection('products');

        collection.updateOne({_id:objectid}, {$set:{name:product.name, description:product.description, price:product.price, units:product.units}}, ()=>{
            res.send({num:0, err:"duplicate item"})
        })
    });
}
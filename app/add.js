exports.insertDocuments = function(collection, docArray, callback) {
    collection.insertMany(docArray, function(err, result){
        console.log(docArray)
        callback(result);
    })
}
exports.updateDocument = function(collection, queryJSON, updateJSON, callback) {
    collection.updateOne(queryJSON, {$set: updateJSON}, function(err, result){
        console.log(queryJSON)
        console.log(updateJSON)
        callback(result);
    })
}
/*
    Explain, using relevant examples, the strategy for querying mongoDB (all CRUD operations)
 */
//----------------------------------------------------------------------------------------------------------------
/*

 https://docs.mongodb.org/manual/core/crud-introduction/
 https://university.mongodb.com/courses/MongoDB/M101JS/2016_March/courseware/Week_2_CRUD/5695578bd8ca393adc3abe54

 */

 var connect = require("../db/db"),
     ObjectID = require('mongodb').ObjectID;

 /*
    Querying MongoDB without mongooose
    Using the connection made from db.js
 */

function _allJokes(callback){
    var db = connect.get();
    //An empty query document ({}) selects all documents in the collection:
    db.collection("jokes").find({}).toArray(function(err,data){
        if(err){
            callback(err,null);
        }else {
            callback(null,data);
        }

    });

}

function _addJoke(joke, callback){
    var db = connect.get();
    //Inserts a document into a collection.
    //If the collection does not exist, then the insertOne() method creates the collection.
    db.collection("jokes").insertOne({joke}, function(err,data){
        if(err){
            callback(err,null);
        }else{
            callback(null, data);
        }
    });
}

function _findJoke(id, callback){
    var db = connect.get();
    //Returns one document that satisfies the specified query criteria.
    db.collection("jokes").findOne({"_id": new ObjectID(id)},function(err,joke) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, joke);
        }
    });
}

function _editJoke(jokeToEdit, newJokeText, callback) {
    var db = connect.get();
    //Updates a single document within the collection based on the filter.
    db.collection("jokes").updateOne(
        {_id: new ObjectID(jokeToEdit)},
        {
            $set: {
                "joke": newJokeText,
                "lastEdited": new Date()
            }
        }, function (err, results) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }
        });
}

function _deleteJoke(id, callback) {
    var db = connect.get();
    //Removes a single document from a collection.
    db.collection("jokes").deleteOne({"_id": new ObjectID(id)}, function(err, results){
        if(err){
            callback(err,null);
        }else{
            callback(null, results);
        }

    });


}

function _randomJoke(callback) {

    var db = connect.get();

    db.collection("jokes").find({}).toArray(function (err, data) {
        if (err) {
            callback(err);
        } else {
            var random = Math.floor((Math.random() * data.length));
            var randomElement = data[random];
            callback(null, randomElement);
        }
    });

}


module.exports = {
    allJokes : _allJokes,
    addJoke: _addJoke,
    findJoke : _findJoke,
    editJoke : _editJoke,
    deleteJoke : _deleteJoke,
    randomJoke : _randomJoke
};

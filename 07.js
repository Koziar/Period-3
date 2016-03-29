/*
    Explain the benefits from using Mongoose, and provide an example involving all CRUD operations
 */
//----------------------------------------------------------------------------------------------------------------
/*
 It simplifies things a lot. Adds Object Modeling to MongoDB.
 It enforces structure as needed while still maintaining the flexibility that makes MongoDB powerful.
 */
var express = require('express'),
    router = express.Router(),
    Joke = require("../model/jokesMongoose");

router.route('/mongoosejoke')
    .post(function (req, res) {
        var joke = new Joke();
        joke.joke = req.body.joke;
        joke.reference = req.body.reference;
        joke.type = req.body.type;
        joke.lastEdited = new Date();

        //Saving joke

        joke.save(function(err){
            if(err){
                res.send({'ERROR': err});
            }else{
                res.json({'SUCCES':joke.joke});
            }
        });

    }) //get all jokes
    .get(function(req, res){
        Joke.find(function(err, jokes){
            if(err){
                res.send(err);
            }
            res.json(jokes);
        });
    });

router.route('/mongoosejoke/:id')
    .get(function(req,res){
        Joke.findById(req.params.id, function(err,joke){
            if(err){
                res.send(err);
            }
            res.json(joke);
        })

    })
    .put(function(req,res) {
        Joke.findById(req.params.id, function (err, joke) {
            if (err) {
                res.send(err);
            }
            joke.joke = req.body.joke;

            joke.save(function (err) {
                if (err) {
                    res.send(err);
                }
                res.send({message: " Joke updated"});
            })

        });

    })
    .delete(function (req,res) {
        Joke.remove({
                _id: req.params.id
            }, function(err, bear){
                if(err){
                    res.send(err);
                }
                res.json({message: "Joke is deleted"})
            }
        )
    });

module.exports = router;
/*
    Demonstrate, using a REST-API, how to perform all CRUD operations on a mongoDB
 */
//----------------------------------------------------------------------------------------------------------------

var express = require('express'),
    router = express.Router(),
    jokes = require("../model/jokes");
//  JokeMongoose = require("../model/jokesMongoose");


router.get('/joke/random', function(req, res, next) {
    //Calling jokes function from ../model/jokes
    //It query on MongoDB
    jokes.randomJoke(function(err, joke){
        if(err){
            res.send(err);
        }else{
            res.json(joke);
        }

    });
});

router.get('/jokes', function(req, res, next){
    jokes.allJokes(function(err,jokes){
        if(err){
            res.send(err);
        }else{
            //If we make it here. Return 200, and all jokes in JSON format
            res.status(200).json(jokes);

        }

    });

});

router.post('/joke', function(req,res,next){
    var joke = req.body;
    //handling date
    joke.lastEdited = new Date();
    jokes.addJoke(joke, function(err, result){
        if(err){
            res.send(err);
        }else{
            res.status(201).json(result.ops[0]);
        }
    });
});
router.put('/joke/:id', function(req, res, next){
    var joke = req.body;
    console.log(joke._id);
    delete joke._id;

    jokes.editJoke(req.params.id,joke,function(err,result){
        if(err){
            res.send(err);

        }else{
            res.status(204).end();
        }

    })



});

router.get('/joke/:id', function(req,res,next){
    jokes.findJoke(req.params.id, function(err, joke){
        console.log(req.params.id);
        if(err){
            res.send(err);

        }
        res.status(200).json(joke);
    })
});


router.delete('/joke/:id', function(req,res,next){
    var id = req.params.id;
    jokes.deleteJoke(id, function(err, joke){
        if(err){
            res.send(err);
        }
        res.status(204).end();
    });

});

module.exports = router;
/*
     Explain reasons to add a layer like mongoose, on top of a schema-less database like mongoDB.
 */
//----------------------------------------------------------------------------------------------------------------
/*
 Main advantage is abstraction on top of pure mongo.

 Many developers come from SQL database types, and feel very uncomfortable working with dynamic collections
 that have no any structure defined. So Schemas in first place helps with that.
 Additionally to that it implements validation and other neat features in order to make sure your schema is
 well satisfied when inserting/updating/finding documents from collections.

 It as well creates Model abstraction which makes it easier to work with, so it looks like
 you are working with just objects rather than pure data.

 http://stackoverflow.com/questions/18531696/why-do-we-need-what-advantages-to-use-mongoose

 */
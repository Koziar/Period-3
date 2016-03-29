/*
    Explain, using a relevant example, how redis (or a similar) can increase scalability (drastic)
    for a server using server side sessions
 */
//----------------------------------------------------------------------------------------------------------------
/*
    Takes the session object away from server and puts it into a database.
    Makes it easier to load balance it. Usually sessions are stored on the server.
    But being in a database, it doesnt matter what server that responds on your request.
    And not losing the session, because it is on a seperate database.
 */
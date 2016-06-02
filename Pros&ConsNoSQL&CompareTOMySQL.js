/*
    Explain pros & cons in using a NoSQL database like mongoDB as your data store,
    compared to a traditional relational SQL database like MySQL.
 */
//----------------------------------------------------------------------------------------------------------------
/*
    >>>Overview
 The relational database has been the foundation of enterprise applications for decades, and since MySQL’s release
 in 1995 it has been a popular and inexpensive option. Yet with the explosion in the volume and variety of data
 in recent years, non-relational database technologies like MongoDB have emerged to address the requirements of
 new applications. MongoDB is used for new applications as well as to augment or replace existing relational infrastructure.

    >>>What is MySQL?
 MySQL is a popular open-source relational database management system (RDBMS) that is developed, distributed
 and supported by Oracle Corporation. Like other relational systems, MySQL stores data in tables and uses
 structured query language (SQL) for database access. In MySQL, you pre-define your database schema based on your
 requirements and set up rules to govern the relationships between fields in your tables. In MySQL, related
 information may be stored in separate tables, but associated through the use of joins. In this way, data duplication is minimized.

    >>>What is MongoDB?
 MongoDB is an open-source database developed by MongoDB, Inc. MongoDB stores data in JSON-like
 documents that can vary in structure. Related information is stored together for fast query access through
 the MongoDB query language. MongoDB uses dynamic schemas, meaning that you can create records without first
 defining the structure, such as the fields or the types of their values. You can change the structure of records
 (which we call documents) simply by adding new fields or deleting existing ones. This data model give you the
 ability to represent hierarchical relationships, to store arrays, and other more complex structures easily.
 Documents in a collection need not have an identical set of fields and denormalization of data is common.
 MongoDB was also designed with high availability and scalability in mind, and includes out-of-the-box replication
 and auto-sharding.

    >>>Why use MongoDB instead of MySQL?
 Organizations of all sizes are adopting MongoDB because it enables them to build applications faster,
 handle highly diverse data types, and manage applications more efficiently at scale.

 Development is simplified as MongoDB documents map naturally to modern, object-oriented programming languages.
 Using MongoDB removes the complex object-relational mapping (ORM) layer that translates objects in code to relational tables.

 MongoDB can also be scaled within and across multiple distributed data centers, providing new levels of
 availability and scalability previously unachievable with relational databases like MySQL.
 As your deployments grow in terms of data volume and throughput, MongoDB scales easily with no downtime,
 and without changing your application. In contrast, to achieve scale with MySQL often requires significant,
 custom engineering work.

    >>>What are common use cases for MongoDB?
 MongoDB is a general purpose database that is used for a variety of use cases.
 The most common use cases for MongoDB include Single View, Internet of Things, Mobile, Real-Time Analytics,
 Personalization, Catalog, and Content Management.

    >>>When would MySQL be a better fit?
 While most modern applications require a flexible, scalable system like MongoDB,
 there are use cases for which a relational database like MySQL would be better suited.
 Applications that require complex, multi-row transactions (e.g., a double-entry bookkeeping system)
 would be good examples. MongoDB is not a drop-in replacement for legacy applications built around the
 relational data model and SQL.

 A concrete example would be the booking engine behind a travel reservation system,
 which also typically involves complex transactions. While the core booking engine might run on MySQL,
 those parts of the app that engage with users – serving up content, integrating with social networks,
 managing sessions – would be better placed in MongoDB
 */

'use strict';

var express = require('express');
var knex = require('knex');
var port = 7000;
// configuration ===============================================================
var db = knex({
    client: 'mysql2',
    connection: {
        debug: false,
        host: 'localhost',
        port: 3306,
        database: 'app',
        user: 'root',
        password: 'root'
    },
    pool: {
        min: 2,
        max: 7,
        idleTimeoutMillis: 3000,
        afterCreate: function (connection, callback) {
            console.log(' >>>>>>>>>>>>>>>>>>>>>>> afterCreate', connection.__knexUid);
            connection.on('error', function (err) {
                // the handler on one connection is sometime called several times
                // this.removeAllListeners();
                // https://github.com/tgriesser/knex/issues/1691
                console.log(' >>>>>>>>>>>>>>>>>>>>>>> err', this.__knexUid);
            });
            callback(null, connection);
        }
    },
    acquireConnectionTimeout: 3000
});
var table = 'users';

// launch ======================================================================
var webApp = express();
webApp.use(express.static('./'));
var server = webApp.listen(port, function () {
    console.log('App listening on port ' + server.address().port);
});

function accessDb() {
    setTimeout(function () {
        db(table).then(rows => {
            console.log(table + ' length:', rows.length);
        });
        accessDb();
    }, 5000);
}

accessDb();
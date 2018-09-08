var loopback = require('loopback');
var async = require('async');
var path = require('path');
var fs = require('fs');
var os=require('os');

module.exports = function () {

  var context = {
        ctx: {
            tenantId: 'default'
        }
    };

    var ItemModel = loopback.getModelByType('BaseUser');
   
    var fname = path.join(os.homedir(), '/data/users.json');
    console.log('fname ', fname);
    fs.readFile(fname, function(err, fdata){
        if (err) {
            console.log('could not read ', fname);
            return;
        }
        searchData = JSON.parse(fdata);
        async.mapSeries(searchData, function (item, cb) {
            ItemModel.findOrCreate({
                "where": {
                    "username": item.username
                }
            }, item, context, function (err, dbrec) {
                return cb(null, dbrec);
            });
        });
    });

};
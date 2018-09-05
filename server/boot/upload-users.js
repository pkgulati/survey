var path = require('path');
var loopback = require('loopback');

module.exports = function(app) {

    var User = loopback.getModelByType('BaseUser');
    var uuid = require("uuid");
    var query = {where : {username:'krfadmin'}};
    var options = {
        fetchAllScopes : true,
        tenantId : "default",
        ignoreAutoScope: true,
        bootContext: true,
        ctx: {
            tenantId : "default",
            remoteUser: "system"
        }
    };
   
    User.findOne(query, options, function (err, user) {
        if (err) {
            return;
        }
        if (!user) {
            var userData  = {"id":"c18959d9-dc2f-4d54-b5ec-d70082beeb7e", "username" : "krfadmin", "email" : "pkgulati@gmail.com", "tenantId" : "default"};
            userData.password = uuid.v4();
            console.log('user password is ', userData.password);
            userData.tenantId = 'default';
            User.create(userData, options, function(err, user) {
                console.log(err, user);
            });
        }
    });
};

var orm = require("../config/orm.js");


var burger = {
    selectAll: function(cb) {
      orm.selectAll("burger", function(res) {
        cb(res);
      });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burger", cols, vals, function(res){
            cb(res);
        });
    },
    updateOne: function(objColsVals, condition, cd) {
        orm.updateOne("burger", objColsVals, condition, function(res){
            cb(res);
        });
    }
};

module.exports= burger;
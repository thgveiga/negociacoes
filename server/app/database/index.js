var database = {};

var mongodb = require("mongodb");
var url =  "mongodb+srv://fiap:fiap@cluster0-ichd6.mongodb.net/negociacoes?retryWrites=true&w=majority";
var client = mongodb.MongoClient;

database.find = function(colName, negociacao){

    client.connect(url, function (err, client) {
    
        if (err) {
            console.log(err);
            process.exit(1);
        }
        var con = client.db();
             
        con.collection(colName).find().toArray(function(err, result){
            if (err) {
                console.log(err);
                process.exit(1);
            }
                
            console.log('api do mongo ' + result);
            client.close();
        });   
    });
}

database.insert = function(colName, negociacao){
    
    client.connect(url, function (err, client) {
    
        if (err) {
            console.log(err);
            process.exit(1);
        }
        var con = client.db();
             
        con.collection(colName).insertOne(negociacao, function(err, result){
            if (err) {
                console.log(err);
                process.exit(1);
            }
            console.log('api do mongo ' + result);
            client.close();
        });
   });
}

database.update = function(colName, negociacaoOld, negociacaoNew){

    client.connect(url, function (err, client) {
    
        if (err) {
            console.log(err);
            process.exit(1);
        }
        var con = client.db();
             
        con.collection(colName).updateOne(negociacaoOld, negociacaoNew, function(err, result){
            if (err) {
                console.log(err);
                process.exit(1);
            }
            console.log('api do mongo ' + result);
            client.close();
        });
     });
}


database.remove = function(colName, negociacao){
    
    client.connect(url, function (err, client) {
    
        if (err) {
            console.log(err);
            process.exit(1);
        }

        var con = client.db();
             
        con.collection(colName).deleteOne(negociacao, function(err, result){
            if (err) {
                console.log(err);
                process.exit(1);
            }
            console.log('api do mongo ' + result);
            client.close();
        });
    });
}

database.result = {};

module.exports = database;
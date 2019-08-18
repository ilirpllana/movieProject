
var db;



/**
 * General purpose error handler callback
 * @param tx The transaction object
 * @param error The error object
 */
function errorHandler(tx, error){
    console.error("SQL error: " + tx + " (" + error.code + ") : " + error.message);
}

var DB =  {

    createDatabase: function(){
        var shortName = "MyMovie";
        var version = "1.0";
        var displayName = "DB for MyMovie app";
        var dbSize = 2 * 1024 * 1024;

        function dbCreateSuccess() {
            console.info("Success: Database creation successful.");

        }

        db = openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess);
    },
    createTables: function () {

        function txFunction(tx) {
            var sql;
            var options=[];
            function successCreate() {
                console.info("Success: Table creation successful");
            }

            sql = "CREATE TABLE IF NOT EXISTS bookmark(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, " +
                "moviesName VARCHAR(20) NOT NULL, "+
                "directedBy VARCHAR(20), " +
                "releasedDate DATE); " ;
            tx.executeSql(sql, options, successCreate, errorHandler);

            sql = "CREATE TABLE IF NOT EXISTS profile(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, " +
                "userName VARCHAR(20) NOT NULL, "+
                "password VARCHAR(20), " +
                "repassword VARCHAR(20), " +
                "emailAddress VARCHAR(10));";
            tx.executeSql(sql, options, successCreate, errorHandler);
        }
        function successTransaction() {
            console.info("Success: Create table transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};

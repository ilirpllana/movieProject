



var Bookmark = {
    insert: function (options, callback) {

        function txFunction(tx) {
            var sql = "INSERT INTO bookmark(moviesName, directedBy, releasedDate) values(?,?,?);";
            tx.executeSql(sql, options, callback, errorHandler );
        }
        function successTransaction() {
            console.info("Success: Insert Transaction successful.");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    selectAll: function (options, callback) {
        function txFunction(tx) {
            var sql = "SELECT * FROM bookmark;";
            tx.executeSql(sql, options, callback, errorHandler );
        }
        function successTransaction() {
            console.info("Success: Select All Transaction successful.");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    select: function (options, callback) {
        function txFunction(tx) {
            var sql = "SELECT * FROM bookmark WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler );
        }
        function successTransaction() {
            console.info("Success: Select All Transaction successful.");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    update: function (options, callback) {
        function txFunction(tx) {
            var sql = "UPDATE bookmark SET moviesName=?, directedBy=?, releasedDate=? WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler );
        }
        function successTransaction() {
            console.info("Success: Select All Transaction successful.");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    delete: function (options, callback) {
        function txFunction(tx) {
            var sql = "DELETE FROM bookmark WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler );
        }
        function successTransaction() {
            console.info("Success: Select All Transaction successful.");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};



var Profile={
    insert: function (options, callback) {

        function txFunction(tx) {
            var sql = "INSERT INTO profile(userName, password, repassword, emailAddress) values(?,?,?,?);";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Insert Transaction successful.");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};
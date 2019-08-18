


function testValidation() {
    if (ValidateProfile()) {
        console.info("validation is successful");
    }
    else {
        console.error("validation failed");
    }

}



function addMovies() {
    // 1. check validation
    if (doValidate_frmAddMovies()) {
        // 2. if successful then fetch inputs
        var moviesName = $("#txtMoviesNameAdd").val();
        var directedBy = $("#txtDirectedBy").val();
        var releasedDate = $("#releasedDate").val();
        console.info("moviesName: " + moviesName + " directedBy: " + directedBy + " releasedDate: " + releasedDate);

        // 3. insert (call DAL function by supplying inputs)

        var options = [moviesName, directedBy, releasedDate];

        function callback() {
            alert("Succeed inserted");
            console.info("Record inserted successfully");
        }

        Bookmark.insert(options, callback);
    }
    else {
        console.error("Validation failed");
    }
}


function showAll() {
    var options = [];

    function callback(tx, results) {

        var html = "";
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows.item(i);

            console.info("id: " + row['id'] +
                " moviesName " + row['moviesName'] +
                " directedBy: " + row['fullName'] +
                " releasedDate: " + row['releasedDate']);

            html += "<li><a data-role='button' data-row-id=" + row['id'] + " href='#'>"
                + "<h1>Movies Name: " + row['moviesName'] + "</h1>"
                + "<h2>Directed By: " + row['directedBy'] + "</h2>"
                + "<h3>Released Date: " + row['releasedDate'] + "</h3>"
                + "</a></li>";
        }
        var lv = $("#lvAll");
        lv = lv.html(html);
        //very important
        lv.listview("refresh");

        $("#lvAll a").on("click", clickHandler);

        function clickHandler() {
            localStorage.setItem("id", $(this).attr("data-row-id"));
            //navigate to detail page
            // both will work
            $.mobile.changePage("#updateDetail", {transition: 'none'});
            // $(location).prop('href', '#pageDetail');
        }


    }
    Bookmark.selectAll(options, callback);
    $.mobile.changePage("#Update", {transition: 'none'});
}


function showOne() {
    var id = localStorage.getItem("id");
    var options = [id];

    function callback(tx, results) {
        var row = results.rows[0];
        $("#txtMoviesNameUpdate").val(row['moviesName']);
        $("#txtDirectedByUpdate").val(row['directedBy']);
        $("#releasedDateUpdate").val(row['releasedDate']);
        $("#movieStatusUpdate").val(row['watched']);

    }
    Bookmark.select(options, callback);
}

function updateMovies() {

    // var id = $("#txtId").val();
    var id = localStorage.getItem("id");
    var moviesName = $("#txtMoviesNameUpdate").val();
    var directedBy = $("#txtDirectedByUpdate").val();
    var releasedDate = $("#releasedDateUpdate").val();


    //very important
    var options = [moviesName, directedBy, releasedDate, id];


    function callback() {
        console.info("Success: Record updated successfully");
    }

    Bookmark.update(options, callback);
    $.mobile.changePage("#Update", {transition: 'none'});
}

function deleteMovies() {
    var id = localStorage.getItem("id");

    var options = [id];

    function callback() {
        console.info("Success: Record deleted successfully");

    }
    Bookmark.delete(options, callback);
    $.mobile.changePage("#Update", {transition: 'none'});
}



function addProfile() {
    // 1. check validation
    if (ValidateProfile()) {
        // 2. if successful then fetch inputs
        var userName = $("#txtUsername").val();
        var password = $("#txtPassword").val();
        var repassword = $("#txtVerifyPassword").val();
        var emailAddress = $("#txtEmail").val();

        console.info("userName: " + userName + " password: " + password + " repassword: " + repassword + "emailAddress: "+emailAddress);

        // 3. insert (call DAL function by supplying inputs)

        var options = [userName, password, releasedDate, emailAddress];

        function callback() {
            console.info("Record inserted successfully");
        }
        Profile.insert(options, callback);

        alert("Succeed inserted");
    }
    else {
        console.error("Validation failed");
    }
}

function addMovies1() {
    // 1. check validation
    if (doValidate_frmAddMovies()) {
        // 2. if successful then fetch inputs
        var moviesName = $("#txtMoviesNameAdd1").text();
        var directedBy = $("#txtDirectedBy1").text();
        var releasedDate = $("#releasedDate1").text();
        console.info("moviesName: " + moviesName + " directedBy: " + directedBy + " releasedDate: " + releasedDate);

        // 3. insert (call DAL function by supplying inputs)

        var options = [moviesName, directedBy, releasedDate];

        function callback() {
            alert("Succeed inserted");
            console.info("Record inserted successfully");
        }

        Bookmark.insert(options, callback);
    }
    else {
        console.error("Validation failed");
    }
}

function addMovies2() {
    // 1. check validation
    if (doValidate_frmAddMovies()) {
        // 2. if successful then fetch inputs
        var moviesName = $("#txtMoviesNameAdd2").text();
        var directedBy = $("#txtDirectedBy2").text();
        var releasedDate = $("#releasedDate2").text();
        console.info("moviesName: " + moviesName + " directedBy: " + directedBy + " releasedDate: " + releasedDate);

        // 3. insert (call DAL function by supplying inputs)

        var options = [moviesName, directedBy, releasedDate];

        function callback() {
            alert("Succeed inserted");
            console.info("Record inserted successfully");
        }

        Bookmark.insert(options, callback);
    }
    else {
        console.error("Validation failed");
    }
}
function addMovies3() {
    // 1. check validation
    if (doValidate_frmAddMovies()) {
        // 2. if successful then fetch inputs
        var moviesName = $("#txtMoviesNameAdd3").text();
        var directedBy = $("#txtDirectedBy3").text();
        var releasedDate = $("#releasedDate3").text();
        console.info("moviesName: " + moviesName + " directedBy: " + directedBy + " releasedDate: " + releasedDate);

        // 3. insert (call DAL function by supplying inputs)

        var options = [moviesName, directedBy, releasedDate];

        function callback() {
            alert("Succeed inserted");
            console.info("Record inserted successfully");
        }

        Bookmark.insert(options, callback);
    }
    else {
        console.error("Validation failed");
    }
}
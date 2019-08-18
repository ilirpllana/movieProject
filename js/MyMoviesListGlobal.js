


function btnAdd_click() {
    addMovies();
}

function btnValidate_click(){
    testValidation();
}
function btnUpdate_click() {
    updateMovies();
}
function btnDelete_click() {
    deleteMovies();

}

function showAllMovies() {
    showAll();
}
function btnShowAll_click() {
    showAll();
}
function showMovies(){
    showOne();
}


function registration() {
    addProfile();
}

function btnAdd1_click() {
    addMovies1();
}

function btnAdd2_click() {
    addMovies2();
}

function btnAdd3_click() {
    addMovies3();
}

function init() {
    $("#btnAdd").on("click", btnAdd_click);
    $("#btnUpdate").on("click", btnUpdate_click);
    $("#btnValidate").on("click", btnValidate_click);
    $("#btnDelete").on("click", btnDelete_click);
    $("#btnShowAll").on("click", btnShowAll_click);
    $("#Update").on("pageshow", showAllMovies);
    $("#updateDetail").on("pageshow", showMovies);
    $("#btnValidate").on("click", registration);

    $("#btnAdd1").on("click", btnAdd1_click);
    $("#btnAdd2").on("click", btnAdd2_click);
    $("#btnAdd3").on("click", btnAdd3_click);
}

function initDB(){
    console.info("Creating database ...");
    try {
        DB.createDatabase();
        if (db) {
            console.info("Creating tables ... ");
            DB.createTables();
        }
    } catch (e) {
        console.error("Error: (Fatal) Error in initDB(). Can not proceed.");
    }
}



$(document).ready(function () {
    init();
    initDB();
});









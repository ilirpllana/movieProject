

function doValidate_frmAddMovies() {
    var form = $("#frmAddMovies");
    form.validate({
        rules:{
            txtMoviesNameAdd: {
                required: true,
                minlength: 2
            },
            txtDirectedBy:{
                required: true,
                rangelength: [2, 20]
            },
            releasedDate:{
                required: true
            }
        },
        messages:{
            txtMoviesNameAdd: {
                required: "You must enter the movie name",
                minlength: "It must be at least 2 characters long"
            },
            txtDirectedBy:{
                required: "You must enter name who directed the movies",
                rangelength: "Full name must be 2-20 chars long"
            },
            releasedDate:{
                required: "Released Date is required",
            }
        }
    });
    return form.valid();

}

function ValidateProfile(){
    var form = $("#frmProfile");
    form.validate({
        rules:{
            txtUsername: {
                required: true,
                minlength: 2
            },
            txtPassword:{
                required: true,
                minlength: 8,
                passwordCheck: true
            },
            txtVerifyPassword:{
                required: true,
                equalTo: "#txtPassword"
            },
            txtEmail:{
                required: true,
                email: true,
                emailcheck: true
            }

        },
        messages: {
            txtUsername: {
                required: "You must enter username",
                minlength: "It must be at least 2 characters long"
            },
            txtPassword:{
                required: "Password is required",
                minlength: "Must be at least 8 characters long",
                passwordCheck: "Password must contain at least one uppercase letter and 1 digit"

            },
            txtVerifyPassword:{
                required: "Please re-enter password",
                equalTo: "Password does not match, re-enter"
            },
            txtEmail:{
                required: "You must enter Email",
                email: "Please enter a valid Email",
                emailcheck: "Please enter a valid Email"

            }
        }
    });
    return form.valid();
}

jQuery.validator.addMethod("passwordCheck",
    function (value, element){
        var regex = /([A-Za-z\d]*[A-Z]+[A-Za-z\d]*[\d]+[A-Za-z\d]*)|([A-Za-z\d]*[\d]+[A-Za-z\d]*[A-Z]+[A-Za-z\d]*)/;
        return this.optional(element) || regex.test(value);
    },
    "Our complicated password checker");


jQuery.validator.addMethod("emailcheck",
    function (value, element){
        var regex = /[^@]+@[^@]+\.[a-zA-Z]{2,6}/;
        return this.optional(element) || regex.test(value);
    },
    "Our complicated password checker");
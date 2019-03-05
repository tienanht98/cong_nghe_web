$(document).ready(function () {
    $(".myform").validate({
        onfocusout: false,
        onkeyup: false,
        onclick: false,
        rules: {
            "name": {
                required: true,

            },
            "username": {
                required: true,
                maxlength: 15
            },
            "password": {
                required: true,
                minlength: 8
            },
            "re-password": {
                equalTo: "#password",
                minlength: 8

            },
            "bday": {
                required: true,
            },
            "sex": {
                required: true,
            },
            "idUser": {
                required: true,
            }
        },
        messages: {
            "name": {
                required: "Bắt buộc nhập name",
                maxlength: "Hãy nhập tối đa 15 ký tự"
            },
            "username": {
                required: "Bắt buộc nhập username",
                maxlength: "Hãy nhập tối đa 15 ký tự"
            },
            "password": {
                required: "Bắt buộc nhập password",
                minlength: "Hãy nhập ít nhất 8 ký tự"
            },
            "re-password": {
                equalTo: "Hai password phải giống nhau",
                minlength: "Hãy nhập ít nhất 8 ký tự"
            },
            "idUser": {
                required: "Bắt buộc nhập idUser"
            },
            "sex": {
                required: "true",
            },
        }
    });
});
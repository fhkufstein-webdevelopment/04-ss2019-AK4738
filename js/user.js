$(document).ready(function() {

    var userListBody = $('.userList tbody');

    //@todo store and somehow update the current number of users


    $('.needs-validation').submit(function(event) {

        event.preventDefault();
        event.stopPropagation();

        if (this.checkValidity() === false) {

            $(this).addClass('was-validated');

            return false;
        }

        //@todo
        var anzahl = userListBody.find('tr').length;
        var eingabe = $('input#username');
        var benutzername = eingabe.val();
        //4. update number of current users
        //5. clear entries from the form
        //6. maybe do something else... :-)

        //your code follows here
        userListBody.append("<tr><td>" + parseInt(anzahl + 1) + "</td><td>" + benutzername + "</td><td><button type=\"button\" class=\"btn btn-secondary btn-danger deleteTrigger\" title=\"Löschen\"><i class=\"fa fa-trash\"></i></button></td></tr>");
        // clear entries from input
        eingabe.val('');
        return false;
    });



        //@todo
        $(userListBody).on('click', '.deleteTrigger', function(){
            $(this).closest('tr').remove();
        });

        //your code follows here




    //maybe some code follows here

});
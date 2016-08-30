    function verify() {

        //for field must take some input

        if (document.admin_form.Name.value == "") {
            alert("Please give the name");
            document.admin_form.Name.focus();
            return false;
        }

        if (document.admin_form.Password.value == "") {
            alert("Please give Password");
            document.admin_form.Password.focus();
            return false;
        }

        //password length must be greater than 5 characters

        if (document.admin_form.Password.value.length < 10) {
            alert("Please give a Password equal or more than 10 characters");
            document.admin_form.Password.focus();
            return false;
        }

        return true;
    }


    function contact_verify() {

        //for field must take some input

    if (document.contact_form.Name.value == "") {
            alert("Please give the name");
            document.admin_form.Name.focus();
            return false;
        }

        if (document.contact_form.Email.value == "") {
                document.contact_form.Email.focus();
        alert("Please give the email");
                return false;
            }

            if (document.contact_form.Message.value == "") {
                document.contact_form.Message.focus();
        alert("Please give the Message");
                return false;
            }

            return true;
    }
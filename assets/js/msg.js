function sendEmail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    if (params.name === "" || params.email === "" || params.message === "") {
        alert("Please fill in all fields");
        return;
    }

    const service_id = "service_1dlehnj";
    const template_id = "template_n42p7kc";
    
    emailjs.send(service_id, template_id, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("Successfully sent message");
            }
        )
    
        .catch(
            err => {
                console.log(err);
                alert("Message not sent");
            }
        )
}

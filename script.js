document.getElementById("userform").addEventListener("submit", function (event) {
    event.preventDefault(); //prevent the default form submission

    const formData = {
        firstName: document.getElementById("firstname").value,
        lastName: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        phonenumber: document.getElementById("phoneNumber").value,
        password: document.getElementById("password").value,
        picture: document.getElementById("image").value,

    }
    console.log("Form Data Submitted", formData);
});
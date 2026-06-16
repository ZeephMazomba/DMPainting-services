document.getElementById("quote-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    location: document.getElementById("location").value,
    service: document.getElementById("service").value,
    message: document.getElementById("message").value
};

    emailjs.send(
        "service_wq9mswm",
        "template_z46h1s7",
        params
    )
    .then(function() {
        alert("Quote request sent successfully!");
        document.getElementById("quote-form").reset();
    })
    .catch(function(error) {
        console.error(error);
        alert("Failed to send quote request.");
    });
});

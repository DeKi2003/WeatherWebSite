(function () {
  emailjs.init("ApevXMZsypDO8mgdN");
})();

window.onload = function () {
  document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  // generate a five digit number for the contact_number variable
  this.contact_number.value = Math.random() * 100000 | 0;
  // these IDs from the previous steps
  emailjs.sendForm("service_3g0p92r", "template_pecj114", this)
    .then(function () {
      console.log("SUCCESS!");
      // Send additional email to your desired recipient email address
      emailjs.send("service_3g0p92r", "template_pecj114", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
      })
      .then(function () {
        console.log("Additional email sent successfully!");
      }, function (error) {
        console.log("Failed to send additional email:", error);
      });
      alert("Message sent successfully!");
    }, function (error) {
      console.log("FAILED...", error);
      alert("Message failed to send. Please try again later.");
    });
  this.reset();
});
};
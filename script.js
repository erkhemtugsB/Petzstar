// Initialize EmailJS
(function() {
    emailjs.init("aT6cmAQJVcJnqLMr8NItp"); // Replace with your EmailJS user ID
})();

document.addEventListener('DOMContentLoaded', function() {
    const quoteBtn = document.getElementById("quoteBtn");
    const popup = document.getElementById("quotePopup");
    const closeBtn = document.querySelector(".close");
    const quoteForm = document.getElementById("quoteForm");

    // Show popup
    quoteBtn.addEventListener("click", function() {
        popup.style.display = "flex";
    });

    // Close the popup when the X button is clicked
document.querySelector(".close-x").addEventListener("click", function() {
    document.getElementById("quotePopup").style.display = "none";
  });

    // Close popup
    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
    });

    // Form submission handler
    quoteForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Collect form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        // Define EmailJS parameters
        const templateParams = {
            name: name,
            email: email,
            phone: phone,
            date: date,
            time: time
        };

        // Send email using EmailJS
        emailjs.send("service_jqih9zd", "template_xtydqgg", templateParams)
            .then(function(response) {
                alert("Quote request sent successfully!");
                popup.style.display = "none";
                quoteForm.reset();
            }, function(error) {
                alert("Failed to send quote request. Please try again later.");
                console.log("EmailJS Error:", error);
            });
    });
});

// Function to close the popup
function closePopup() {
    document.getElementById("newCustomerPopup").style.display = "none";
  }
  
  // Auto-hide the popup after 5 seconds
  setTimeout(() => {
    closePopup();
  }, 5000);
  
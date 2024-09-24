document.addEventListener("DOMContentLoaded", () => {
  // Handle form submission
  const loginForm = document.getElementById("loginForm");
  const loginButton = document.getElementById("loginButton");
  const togglePasswordButton = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");
  const enrollButton = document.getElementById("enrollButton");
  const forgotIdLink = document.getElementById("forgotId");
  const forgotPasswordLink = document.getElementById("forgotPassword");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting the traditional way

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // simple validation
      if (username === "" || password === "") {
        alert("Please fill in all fields.");
        return;
      }

      // Start the loading animation
      loginButton.classList.add("show-loading");

      // Simulate login process
      setTimeout(() => {
        // Stop the loading animation
        loginButton.classList.remove("show-loading");

        // Hide all sections and start animation
        document
          .querySelectorAll(".form-section, footer,.enroll")
          .forEach((element) => {
            element.classList.add("hidden");
          });

        // Wait for hiding animation
        setTimeout(() => {
          document.querySelector(".image-section").classList.add("shrink");
          document.querySelector(".logo").classList.add("logo-animate");

          // Optionally, hide the login form and footer
          setTimeout(() => {
            document.querySelector(".form-section").style.display = "none";
            document.querySelector("footer").style.display = "none";
          }, 1000); // Delay to allow animations to finish
        }, 1000); // Delay for hiding animation
      }, 2000); // Simulated login delay
    });
  }

  // Handle "Enroll Now" button click
  if (enrollButton) {
    enrollButton.addEventListener("click", function () {
      window.location.href = "enrollment.html"; // Replace with your actual enrollment page URL
    });
  }

  // Handle "Forgot ID" link click
  if (forgotIdLink) {
    forgotIdLink.addEventListener("click", function (event) {
      event.preventDefault();
      alert("Redirecting to Forgot ID page...");
      window.location.href = "forgot-id.html"; // Replace with your actual forgot ID page URL
    });
  }

  // Handle "Forgot Password" link click
  if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener("click", function (event) {
      event.preventDefault();
      alert("Redirecting to Forgot Password page...");
      window.location.href = "forgot-password.html"; // Replace with your actual forgot password page URL
    });
  }

  // Handle "Show/Hide Password" toggle
  if (togglePasswordButton) {
    togglePasswordButton.addEventListener("click", function () {
      const type =
        passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
      this.textContent = type === "password" ? "Show" : "Hide";
    });

    // Show/Hide the toggle button based on password input
    passwordInput.addEventListener("input", function () {
      const loginFormContainer = document.getElementById("loginButton");
      if (passwordInput.value.trim() !== "") {
        loginFormContainer.classList.add("active");
        togglePasswordButton.style.display = "inline";
      } else {
        loginFormContainer.classList.remove("active");
        togglePasswordButton.style.display = "none";
      }
    });
  }

  // Show span after button's fade-in animation
  const enrollSpan = document.querySelector(".enroll span");
  if (enrollSpan) {
    setTimeout(() => {
      enrollSpan.classList.add("show");
    }, 500);
  }
});

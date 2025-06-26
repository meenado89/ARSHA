//  best sellers

// Select all product image containers
const allProducts = document.querySelectorAll('.product-img');

allProducts.forEach(container => {
  const mainImg = container.querySelector('.main-img');
  const hoverImg = container.querySelector('.hover-img');


  hoverImg.style.opacity = 0;

  // Add event listeners to each card
  container.addEventListener('mouseover', () => {
    mainImg.style.opacity = 0;
    hoverImg.style.opacity = 1;
  });

  container.addEventListener('mouseleave', () => {
    mainImg.style.opacity = 1;
    hoverImg.style.opacity = 0;
  });
});





/* filter the product cards based on category */
// product list
filterSelection('all');
function filterSelection(category) {
  const cards = document.getElementsByClassName("filterDiv");

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const isMatch = category === "all" || card.classList.contains(category);

    if (isMatch) {
      // Show card
      card.style.display = "block";
      setTimeout(() => {
        card.classList.remove("hide");
      }, 1);
      // small delay to allow display block to apply before transition
    } else {
      // Add hide class for animation
      card.classList.add("hide");
      // After transition ends (400ms), fully remove it
      setTimeout(() => {
        card.style.display = "none";
      }, 400);
    }
  }
}


     //    email

   // formValidation.js

// Reusable email checker
function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

// LOGIN validation
function validateLoginForm() {
  const email = document.getElementById("floatingInput")?.value.trim();
  const password = document.getElementById("floatingPassword")?.value.trim();

  if (!email) {
    alert("Email cannot be empty");
    return false;
  }
  if (!isValidEmail(email)) {
    alert("Please enter a valid email");
    return false;
  }
  if (!password) {
    alert("Password cannot be empty");
    return false;
  }
  return true;
}

// REGISTER validation
function validateRegisterForm() {
  const inputs = document.querySelectorAll(".register-card input");
  const firstName = inputs[0].value.trim();
  const lastName = inputs[1].value.trim();
  const email = inputs[2].value.trim();
  const password = inputs[3].value.trim();

  if (!firstName || !lastName || !email || !password) {
    alert("All fields are required");
    return false;
  }
  if (!isValidEmail(email)) {
    alert("Please enter a valid email");
    return false;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
  }

  return true;
}

// CONTACT validation
function validateContactForm() {
  const name = document.querySelector('input[name="name"]').value.trim();
  const email = document.querySelector('input[name="email"]').value.trim();
  const subject = document.querySelector('input[name="subject"]').value.trim();
  const message = document.querySelector('textarea[name="message"]').value.trim();

  if (!name || !email || !subject || !message) {
    alert("All fields are required");
    return false;
  }
  if (!isValidEmail(email)) {
    alert("Enter a valid email address");
    return false;
  }

  return true;
}

// Attach handlers only if needed
document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.querySelector(".signInbtn");
  const registerBtn = document.querySelector(".register-card .signInbtn");
  const contactForm = document.querySelector(".php-email-form");

  if (loginBtn && !registerBtn) {
    loginBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (validateLoginForm()) {
        alert("Login successful (demo only)");
      }
    });
  }

  if (registerBtn) {
    registerBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (validateRegisterForm()) {
        alert("Account created (demo only)");
      }
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      if (!validateContactForm()) {
        e.preventDefault();
      } else {
        alert("Message sent (demo only)");
      }
    });
  }
});


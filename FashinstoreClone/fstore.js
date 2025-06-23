//  best sellers

// Select all product image containers
//   const allProducts = document.querySelectorAll('.product-img');

//   allProducts.forEach(container => {
//     const mainImg = container.querySelector('.main-img');
//     const hoverImg = container.querySelector('.hover-img');


//     hoverImg.style.opacity = 0;

//     // Add event listeners to each card
//     container.addEventListener('mouseover', () => {
//       mainImg.style.opacity = 0;
//       hoverImg.style.opacity = 1;
//     });

//     container.addEventListener('mouseleave', () => {
//       mainImg.style.opacity = 1;
//       hoverImg.style.opacity = 0;
//     });
//   });



// option 2
// will work only on mouse over the img 
// const allProducts = document.querySelectorAll('.product-img, .plist-img');

// allProducts.forEach(container => {
//   const mainImg = container.querySelector('.main-img');
//   const hoverImg = container.querySelector('.hover-img');

// Initial styles (in case JS loads after CSS)
// hoverImg.style.opacity = 0;
// hoverImg.style.transform = "scale(0.95)";
// mainImg.style.opacity = 1;
// mainImg.style.transform = "scale(1)";

// container.addEventListener('mouseover', () => {
// Main image fades out and shrinks
// mainImg.style.opacity = 0;
// mainImg.style.transform = "scale(0.9)";

// Hover image fades in and zooms
//   hoverImg.style.opacity = 1;
//   hoverImg.style.transform = "scale(1.05)";
// });

// container.addEventListener('mouseleave', () => {
// Reset main image
// mainImg.style.opacity = 1;
// mainImg.style.transform = "scale(1)";

// Reset hover image
//     hoverImg.style.opacity = 0;
//     hoverImg.style.transform = "scale(0.95)";
//   });
// });


// will work with card hover
const allProducts = document.querySelectorAll('.plist-card, .plist-img');

allProducts.forEach(container => {
  const mainImg = container.querySelector('.main-img');
  const hoverImg = container.querySelector('.hover-img');

  // Initial styles (in case JS loads after CSS)
  hoverImg.style.opacity = 0;
  hoverImg.style.transform = "scale(0.95)";
  mainImg.style.opacity = 1;
  mainImg.style.transform = "scale(1)";

  container.addEventListener('mouseover', () => {
    // Main image fades out and shrinks
    mainImg.style.opacity = 0;
    mainImg.style.transform = "scale(0.9)";

    // Hover image fades in and zooms
    hoverImg.style.opacity = 1;
    hoverImg.style.transform = "scale(1.05)";
  });

  container.addEventListener('mouseleave', () => {
    // Reset main image
    mainImg.style.opacity = 1;
    mainImg.style.transform = "scale(1)";

    // Reset hover image
    hoverImg.style.opacity = 0;
    hoverImg.style.transform = "scale(0.95)";
  });
});





// card change by category 

// why this worked!!!???
// function filterSelection(category) {
//   const cards = document.getElementsByClassName("filterDiv");

//   for (let i = 0; i < cards.length; i++) {
//     cards[i].classList.remove("show");

//     if (category === "all" || cards[i].classList.contains(category)) {
//       cards[i].classList.add("show");
//     }
//   }
// }

// Handle active button highlight
// const btnContainer = document.getElementById("myBtnContainer");
// const buttons = btnContainer.getElementsByClassName("btn");

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function () {
//     const current = document.querySelector("#myBtnContainer .btn.active");
//     if (current) current.classList.remove("active");
//     this.classList.add("active");
//   });
// }

// filterSelection('all');


/* filter the product cards based on category */

filterSelection('all');

function filterSelection(category) {
  var cards, i;
  cards = document.getElementsByClassName("filterDiv");

  for (i = 0; i < cards.length; i++) {
    if (category === "all") {
      cards[i].style.display = "block";
    } else if (cards[i].classList.contains(category)) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}

/* Highlight the active category button */
function setActiveButton(button) {
  var btns = document.getElementsByClassName("pnav-link");
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.remove("active");
  }
  button.classList.add("active");
}


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


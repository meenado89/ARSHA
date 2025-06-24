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


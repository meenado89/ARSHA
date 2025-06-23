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


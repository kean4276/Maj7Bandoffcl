
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelector('.close-btn');  // Select the close button
  
    if (!hamburger || !overlay || !closeBtn) {
      console.error("Hamburger button, overlay, or close button not found.");
      return;
    }
  
    // Toggle the overlay when the hamburger button is clicked
    hamburger.addEventListener('click', function() {
      if (overlay.style.display === 'block') {
        overlay.style.right = '-250px';  // Slide it back to the right
        setTimeout(function() {
          overlay.style.display = 'none';
        }, 500); // Matches the slide-out duration
      } else {
        overlay.style.display = 'block';
        setTimeout(function() {
          overlay.style.right = '0';  // Slide in from the right
        }, 10); // Slight delay to trigger the animation
      }
    });
  
    // Close the overlay when the close button is clicked
    closeBtn.addEventListener('click', function() {
      overlay.style.right = '-250px';  // Slide it back to the right
      setTimeout(function() {
        overlay.style.display = 'none';
      }, 500); // Matches the slide-out duration
    });
  });
  
new Swiper('.card-wrapper', {
    loop: false,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable : true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      0: {
        slidesPerView: 2.3
      },
      768: {
        slidesPerView: 2.3
      },
      1024: {
        slidesPerView: 3.1
      },
    }
  });
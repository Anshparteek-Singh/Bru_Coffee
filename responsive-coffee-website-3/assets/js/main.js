/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
   const header = document.getElementById('header');
   // Add a class if the bottom offset is greater than 50 of the viewport
   this.scrollY >= 50 ? header.classList.add('shadow-header') 
                      : header.classList.remove('shadow-header');
};
window.addEventListener('scroll', shadowHeader);

/*=============== SWIPER POPULAR ===============*/
const swiperPopular = new Swiper('.popular__swiper', {
   loop: true,
   grabCursor: true,
   spaceBetween: 32,
   slidesPerView: 'auto',
   centeredSlides: 'auto',
   breakpoints: {
      1150: {
         spaceBetween: 80, 
      }
   }
});

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
   const scrollUp = document.getElementById('scroll-up');
   // When the scroll is higher than 350 viewport height, add the show-scroll class
   this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                       : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
    
const scrollActive = () => {
   const scrollDown = window.scrollY;

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
         sectionsClass.classList.add('active-link');
      } else {
         sectionsClass.classList.remove('active-link');
      }
   });
};
window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2000,
   delay: 300,
});






// Cart Functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
  const count = cart.reduce((acc, item) => acc + item.quantity, 0);
  document.getElementById('cartCount').textContent = count;
}

function updateCartDisplay() {
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';
  
  let subtotal = 0;
  
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    
    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.innerHTML = `
      <div class="cart-item-info">
        <h4>${item.name} (${item.size})</h4>
        <div>Quantity: ${item.quantity}</div>
      </div>
      <div class="cart-item-price">
        ₹${itemTotal}
        <button class="remove-item" data-index="${index}">×</button>
      </div>
    `;
    cartItems.appendChild(itemDiv);
  });

  const gst = subtotal * 0.18;
  const grandTotal = subtotal + gst;

  document.getElementById('subtotal').textContent = `₹${subtotal}`;
  document.getElementById('gst').textContent = `₹${gst.toFixed(2)}`;
  document.getElementById('grandTotal').textContent = `₹${grandTotal.toFixed(2)}`;

  // Save to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Add to Cart Functionality
// Modified Add to Cart Functionality
document.querySelectorAll('.order-form').forEach(form => {
   form.addEventListener('submit', (e) => {
     e.preventDefault();
     
     const productCard = form.closest('.products__card');
     const productName = productCard.querySelector('.products__name').textContent;
     const priceElement = productCard.querySelector('.products__price');
     
     // Handle products with size selection
     const sizeSelect = form.querySelector('#size');
     // Handle products without size selection (first three)
     const staticPrice = parseInt(priceElement.textContent.replace('₹', ''));
 
     let price, size;
     
     if (sizeSelect) {
       const sizeText = sizeSelect.options[sizeSelect.selectedIndex].text;
       price = parseInt(sizeText.split('₹')[1]);
       size = sizeSelect.value;
     } else {
       price = staticPrice;
       size = 'regular'; // Default size for products without size selection
     }
 
     const quantity = parseInt(form.querySelector('#quantity').value);
 
     // Check if item already exists
     const existingItem = cart.find(item => 
       item.name === productName && item.size === size
     );
 
     if(existingItem) {
       existingItem.quantity += quantity;
     } else {
       cart.push({
         name: productName,
         size: size,
         price: price,
         quantity: quantity
       });
     }
 
     updateCartCount();
     updateCartDisplay();
     form.closest('.modal').style.display = 'none';
   });
 });

// Cart Modal
document.getElementById('cartTrigger').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('cartModal').style.display = 'block';
  updateCartDisplay();
});

// Remove Item
document.getElementById('cartItems').addEventListener('click', (e) => {
  if(e.target.classList.contains('remove-item')) {
    const index = e.target.dataset.index;
    cart.splice(index, 1);
    updateCartDisplay();
    updateCartCount();
  }
});

// Place Order
document.getElementById('placeOrder').addEventListener('click', () => {
  const address = document.getElementById('deliveryAddress').value;
  if(!address) {
    alert('Please enter delivery address');
    return;
  }
  
  if(cart.length === 0) {
    alert('Your cart is empty');
    return;
  }

  const orderDetails = cart.map(item => 
    `${item.name} (${item.size}) x${item.quantity} - ₹${item.price * item.quantity}`
  ).join('\n');

  alert(`Order Placed!\n\nDelivery Address:\n${address}\n\nItems:\n${orderDetails}\n\nTotal: ₹${document.getElementById('grandTotal').textContent.split('₹')[1]}`);
  
  // Clear cart
  cart = [];
  localStorage.removeItem('cart');
  updateCartCount();
  updateCartDisplay();
  document.getElementById('cartModal').style.display = 'none';
});

// Initialize cart
updateCartCount();
updateCartDisplay();






document.addEventListener('DOMContentLoaded', () => {
   // Handle product modals
   document.querySelectorAll('.products__button').forEach(button => {
     button.addEventListener('click', (e) => {
       const productCard = e.currentTarget.closest('.products__card');
       const modal = productCard.querySelector('.modal');
       modal.style.display = 'block';
     });
   });
 
   // Close modal functionality
   document.addEventListener('click', (e) => {
     if (e.target.classList.contains('close-modal')) {
       const modal = e.target.closest('.modal');
       modal.style.display = 'none';
     }
     
     if (e.target.classList.contains('modal')) {
       e.target.style.display = 'none';
     }
   });
 
   // Handle form submissions
   document.querySelectorAll('.order-form').forEach(form => {
     form.addEventListener('submit', (e) => {
       e.preventDefault();
       const formData = new FormData(form);
       
       alert(`Order Details:
 Size: ${formData.get('size')}
 Sugar: ${formData.get('sugar')}
 Quantity: ${formData.get('quantity')}
 
 Product added to cart!`);
 
       form.closest('.modal').style.display = 'none';
     });
   });
 });








 




//  // Products Section Add to Cart
// document.querySelectorAll('.products__button').forEach(button => {
//   button.addEventListener('click', (e) => {
//     const productCard = e.currentTarget.closest('.products__card');
//     const modal = productCard.querySelector('.product-modal');
//     modal.style.display = 'block';
//   });
// });

// // Handle product form submissions
// document.querySelectorAll('.order-form').forEach(form => {
//   form.addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     const productCard = form.closest('.products__card');
//     const productName = productCard.querySelector('.products__name').textContent;
//     const sizeSelect = form.querySelector('.size-select');
//     const selectedOption = sizeSelect.options[sizeSelect.selectedIndex];
//     const price = parseInt(selectedOption.dataset.price);
//     const size = selectedOption.value;
//     const quantity = parseInt(form.querySelector('.quantity-input').value);

//     // Add to cart
//     const existingItem = cart.find(item => 
//       item.name === productName && item.size === size
//     );

//     if(existingItem) {
//       existingItem.quantity += quantity;
//     } else {
//       cart.push({
//         name: productName,
//         size: size,
//         price: price,
//         quantity: quantity
//       });
//     }

//     updateCartCount();
//     updateCartDisplay();
//     form.closest('.product-modal').style.display = 'none';
//   });
// });

// // Close modals
// document.addEventListener('click', (e) => {
//   if (e.target.classList.contains('close-modal') || e.target.classList.contains('product-modal')) {
//     e.target.closest('.product-modal').style.display = 'none';
//   }
// });







// Auth Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
   const authModal = document.getElementById('authModal');
   const authTrigger = document.getElementById('authTrigger');
   const closeModal = document.querySelector('#authModal .close-modal');
   let isModalOpen = false;
 
   // Show modal
   authTrigger.addEventListener('click', function(e) {
     e.preventDefault();
     document.body.classList.add('modal-open');
     authModal.style.display = 'block';
     isModalOpen = true;
   });
 
   // Close modal
   function closeAuthModal() {
     document.body.classList.remove('modal-open');
     authModal.style.display = 'none';
     isModalOpen = false;
   }
 
   closeModal.addEventListener('click', closeAuthModal);
   window.addEventListener('click', function(e) {
     if (e.target === authModal) closeAuthModal();
   });
 
   // Tab switching
   const tabs = document.querySelectorAll('.tab-link');
   const forms = document.querySelectorAll('.auth-form');
   tabs.forEach(tab => {
     tab.addEventListener('click', function(e) {
       e.preventDefault();
       const tabName = this.dataset.tab;
       tabs.forEach(t => t.classList.remove('active'));
       this.classList.add('active');
       forms.forEach(form => {
         form.classList.remove('active');
         if(form.id === `${tabName}Form`) form.classList.add('active');
       });
     });
   });
 
   // Validation functions
   function showError(input, message) {
     const formGroup = input.closest('.input-group');
     const errorMessage = formGroup.querySelector('.error-message');
     formGroup.classList.add('invalid');
     errorMessage.textContent = message;
   }
 
   function showSuccess(input) {
     const formGroup = input.closest('.input-group');
     formGroup.classList.remove('invalid');
     formGroup.querySelector('.error-message').textContent = '';
   }
 
   function validateField(input) {
     if (input.validity.valid) {
       showSuccess(input);
       return true;
     }
     
     let message = 'This field is required';
     if (input.validity.typeMismatch) message = 'Invalid email format';
     if (input.validity.tooShort) message = `Minimum ${input.minLength} characters required`;
     
     showError(input, message);
     return false;
   }
 
   // Real-time validation
   document.querySelectorAll('.auth-form input').forEach(input => {
     input.addEventListener('input', () => validateField(input));
   });
 
   // Form submission
   document.querySelectorAll('.auth-form').forEach(form => {
     form.addEventListener('submit', function(e) {
       e.preventDefault();
       let isValid = true;
       
       Array.from(form.elements).forEach(element => {
         if (element.tagName === 'INPUT' && !validateField(element)) {
           isValid = false;
         }
       });
 
       if (isValid) {
         console.log('Form submitted:', form.id);
         form.reset();
         closeAuthModal();
       }
     });
   });
 });





// about us animation
 sr.reveal(`.about__data`, {
   origin: 'left',
   distance: '100px',
   duration: 1000,
   delay: 300
 });
 
 sr.reveal(`.about__images`, {
   origin: 'right',
   distance: '100px',
   duration: 1000,
   delay: 300
 });
 
 sr.reveal(`.about__coffee`, {
   delay: 500,
   duration: 1500,
   scale: 0.5,
   rotate: { x: 0, y: 0, z: 10 }
 });
 
 sr.reveal(`.about__leaf-1, .about__leaf-2`, {
   delay: 800,
   duration: 2000,
   rotate: { z: 360 },
   scale: 0
 });



 







sr.reveal(`.popular__swiper, .footer__container`);
sr.reveal(`.home__shape`, {origin: 'bottom'});
sr.reveal(`.home__coffee`, {delay: 1000, distance: '200px', duration: 1500});
sr.reveal(`.home__splash`, {delay: 1600, scale: 0, duration: 1500});
sr.reveal(`.home__bean-1, .home__bean-2`, {delay: 2200, duration: 1500, scale: 0, rotate: {z: 180}});
sr.reveal(`.home__ice-1, .home__ice-2`, {delay: 2600, duration: 1500, scale: 0, rotate: {z: 180}});
sr.reveal(`.home__leaf`, {delay: 2800, duration: 1500, scale: 0, rotate: {z: 90}});
sr.reveal(`.home__title`, {delay: 3500});
sr.reveal(`.home__data, .home__sticker`, {delay: 4000});
sr.reveal(`.about__data`, {origin: 'left'});
sr.reveal(`.about__images`, {origin: 'right'});
sr.reveal(`.about__coffee`, {delay: 1000});
sr.reveal(`.about__leaf-1, .about__leaf-2`, {delay: 1400, rotate: {z: 90}});
sr.reveal(`.products__card, .contact__info`, {interval: 100});
sr.reveal(`.contact__shape`, {delay: 600, scale: 0});
sr.reveal(`.contact__delivery`, {delay: 1200});

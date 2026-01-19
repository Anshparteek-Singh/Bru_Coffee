# ☕ Bru_Coffee - Responsive Coffee Website

A modern, fully responsive coffee website showcasing Bru Coffee products with an interactive shopping cart, user authentication, and smooth animations. Built with vanilla JavaScript, HTML5, and CSS3.

![Coffee Website Preview](responsive-coffee-website-3/preview.png)

## 📋 Table of Contents

- [Features](#-features)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Technologies Used](#-technologies-used)
- [Features in Detail](#-features-in-detail)
- [Design Instructions](#-design-instructions)
- [Project Instructions](#-project-instructions)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

## ✨ Features

- 🎨 **Modern Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🛒 **Interactive Shopping Cart** - Add items, manage quantities, and calculate totals with GST
- 🔐 **User Authentication** - Login and Sign Up functionality with form validation
- ☕ **Product Catalog** - Browse 6 different coffee products with detailed modals
- 📱 **Mobile Navigation** - Hamburger menu with smooth transitions
- ✨ **Smooth Animations** - ScrollReveal animations and hover effects
- 💳 **Price Calculation** - Automatic GST (18%) calculation
- 📍 **Contact Information** - WhatsApp, location, and delivery details
- 📧 **Newsletter Subscription** - Email subscription form
- 💾 **LocalStorage** - Cart persists across page refreshes



## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Git (for cloning the repository)
- Optional: Figma (to view/edit design files)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Anshparteek-Singh/Bru_Coffee.git
   cd Bru_Coffee
   ```

2. **Navigate to the website folder:**
   ```bash
   cd responsive-coffee-website-3
   ```

3. **Open the website:**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

4. **That's it!** No build process or dependencies required.

## 📁 Project Structure

```
Bru_Coffee/
├── DESIGN INSTRUCTIONS/
│   ├── DESIGN IMPORTANT NOTE.txt          # Design guidelines
│   └── FIGMA DESIGN - Responsive coffee website 3.fig  # Figma design file
│
├── PROJECT INSTRUCTIONS/
│   ├── PROJECT IMPORTANT NOTE.txt         # Project setup guide
│   ├── Upload project to the internet - English.png
│   └── Subir proyecto a internet - Español.png
│
├── responsive-coffee-website-3/           # Main website
│   ├── index.html                         # Main HTML file
│   ├── order.html                         # Order page (legacy)
│   ├── preview.png                        # Website preview image
│   └── assets/
│       ├── css/
│       │   ├── styles.css                 # Main stylesheet
│       │   └── swiper-bundle.min.css      # Swiper carousel styles
│       ├── js/
│       │   ├── main.js                    # Main JavaScript file
│       │   ├── scrollreveal.min.js        # Scroll animation library
│       │   └── swiper-bundle.min.js       # Carousel library
│       ├── img/                           # All images
│       └── scss/                          # SCSS source files (optional)
│           ├── base/
│           ├── components/
│           ├── config/
│           └── layout/
│
├── .gitignore                             # Git ignore file
└── README.md                              # This file
```

## 🛠 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Variables
- **JavaScript (Vanilla)** - No frameworks, pure JS
- **Swiper.js** - Touch-enabled carousel/slider
- **ScrollReveal.js** - Scroll animations
- **RemixIcon** - Icon library
- **SCSS** - CSS preprocessing (optional)

## 📱 Features in Detail

### Shopping Cart System
- ✅ Add items to cart from product cards
- ✅ Quantity selection (1-10 items)
- ✅ Size options (Small, Medium, Large) for applicable products
- ✅ Real-time price calculation
- ✅ 18% GST calculation
- ✅ Delivery address input
- ✅ Remove items functionality
- ✅ Cart persistence using localStorage
- ✅ Order placement confirmation

### Product Catalog
1. **BRU INSTANT** - ₹459
2. **BRU SUPER STRONG** - ₹299
3. **COLD COFFEE CARAMEL** - ₹90
4. **COFFEE WITH MILK** - ₹99 (with size options)
5. **CLASSIC ICED COFFEE** - ₹399 (with size options)
6. **ICED COFFEE FRAPPE** - ₹399 (with size options)

### Popular Creations (Carousel)
- BREW INSTANT
- BRU GOLD
- BRU INSTANT

### User Authentication
- Login form with email validation
- Sign Up form with password requirements
- Real-time form validation
- Error messages and success states
- Tab switching between Login/Sign Up

### Contact Information
- **Location**: Sector-35, Chandigarh
- **Delivery Numbers**: 
  - +91-9876255549
  - +91-9417952647
- **Hours**: Monday - Sunday, 9AM - 10PM
- **Social Links**: WhatsApp, Messenger, Telegram
- **Map Integration**: Google Maps link

## 🎨 Design Instructions

For design-related information, see the **[DESIGN INSTRUCTIONS](DESIGN%20INSTRUCTIONS/)** folder:

### Opening Figma Design
1. Go to [Figma](https://www.figma.com/)
2. Drag and drop `FIGMA DESIGN - Responsive coffee website 3.fig` into Figma
3. The design will be uploaded to your Figma account

### Creating Favicon
- Use any design tool (recommended: Figma)
- Export with size: **32px × 32px**
- Save as `favicon.png` in `assets/img/` folder

## 📖 Project Instructions

For detailed setup and deployment, see the **[PROJECT INSTRUCTIONS](PROJECT%20INSTRUCTIONS/)** folder:

### Key Points:
- **HTML Modification**: Add your information directly in HTML files
- **CSS Modification**: Edit CSS files normally
- **SCSS Modification**: Watch [Sass Tutorial Video](https://youtu.be/PYm6QkM7bOU) for SCSS setup
- **Image Guidelines**: Keep same dimensions as original images (e.g., 1200 × 1050)

## 🚀 Deployment

### Deploy to Netlify

1. Go to [Netlify](https://www.netlify.com/)
2. Sign up/Login
3. Drag and drop the `responsive-coffee-website-3` folder
4. Your site will be live in seconds!

### Deploy to Vercel

1. Go to [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Deploy automatically

### Deploy to GitHub Pages

1. Go to repository Settings
2. Navigate to Pages
3. Select `main` branch and `/responsive-coffee-website-3` folder
4. Save

## 🐛 Recent Fixes & Improvements

- ✅ Fixed navigation menu toggle functionality
- ✅ Fixed `this.scrollY` → `window.scrollY` bug
- ✅ Fixed incorrect modal titles
- ✅ Removed duplicate CSS code
- ✅ Fixed product image positioning issues
- ✅ Added newsletter form handler
- ✅ Improved error handling in JavaScript
- ✅ Added null checks for DOM elements
- ✅ Enhanced cart functionality

## 🤝 Contributing

This is a class project, but contributions are welcome! 

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is for educational purposes. Feel free to use it for learning and portfolio projects.

## 👨‍💻 Author

**Anshparteek-Singh**

- GitHub: [@Anshparteek-Singh](https://github.com/Anshparteek-Singh)
- Repository: [Bru_Coffee](https://github.com/Anshparteek-Singh/Bru_Coffee)

## 🙏 Acknowledgments

- Design inspiration from the Figma template
- Icons from [RemixIcon](https://remixicon.com/)
- Carousel functionality from [Swiper.js](https://swiperjs.com/)
- Animations from [ScrollReveal](https://scrollrevealjs.org/)

## 📊 Project Status

✅ **Complete** - All features implemented and tested

---

⭐ **If you like this project, please consider giving it a star on GitHub!**

📧 **Questions or suggestions?** Feel free to open an issue or contact me.

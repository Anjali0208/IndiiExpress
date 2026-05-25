# Spice Highway Dhaba - Restaurant Website

A complete, responsive website for an authentic Indian Dhaba restaurant with a vibrant rustic theme inspired by Punjab's highway food culture.

## 🔥 Features

### Design & Aesthetics
- **Bold Rustic Indian Theme**: Warm earthy colors (deep orange, mustard yellow, terracotta, burnt sienna)
- **Distinctive Typography**: Mix of Bebas Neue (display), Secular One (headings), and Crimson Text (body)
- **Rich Visual Effects**: Parallax scrolling, fade-in animations, hover effects, gradient overlays
- **Textile-Inspired Patterns**: Background patterns and textures throughout
- **High-Quality Images**: Professional food photography from Unsplash

### Pages Included

#### 1. Home Page (index.html)
- Full-width parallax hero section with bustling dhaba imagery
- Featured dishes grid with 4 signature items
- Auto-rotating testimonials carousel (5 reviews)
- Online ordering CTAs (Swiggy & Zomato)
- Reservation form with validation
- Contact information card

#### 2. About Page (about.html)
- Heritage story section with large hero image
- Mission & values cards (4 key points)
- Photo gallery with 8+ images in responsive grid
- "Why Choose Us" section with numbered benefits
- Call-to-action section

#### 3. Menu Page (menu.html)
- Tabbed/categorized layout with 5 sections:
  - Starters (6 items)
  - Main Courses (8 items)
  - Breads (6 items)
  - Desserts (4 items)
  - Beverages (6 items)
- Each item includes:
  - High-quality image
  - Name, description, price
  - Spice level indicators (mild/medium/hot)
  - Hover animations
  - Order buttons

#### 4. Contact Page (contact.html)
- Comprehensive reservation form with validation:
  - Name, email, phone (required)
  - Date, time, number of guests (required)
  - Special requests (optional)
- Contact information cards
- Online ordering buttons (Swiggy & Zomato)
- Social media links
- Google Maps embed (Murthal, NH-1)
- Success/error message handling

### Interactive Features
- **Fixed Navigation**: Sticky navbar with scroll effects and mobile hamburger menu
- **Smooth Scrolling**: Animated scroll to sections
- **Form Validation**: Real-time email and phone number validation
- **Auto-Carousel**: Testimonials rotate every 5 seconds
- **Menu Tabs**: Switch between food categories with smooth transitions
- **Order Modal**: Pop-up for selecting delivery platform
- **Responsive Design**: Fully mobile-friendly with media queries
- **Accessibility**: Keyboard navigation, ARIA labels, semantic HTML

### Technical Stack
- **HTML5**: Semantic markup, proper meta tags
- **CSS3**: Custom properties (variables), Grid, Flexbox, animations
- **Vanilla JavaScript**: No dependencies, modern ES6+ syntax
- **Google Fonts**: Bebas Neue, Secular One, Crimson Text
- **Unsplash**: High-quality food photography

## 📁 File Structure

```
spice-highway-dhaba/
├── index.html          # Home page
├── about.html          # About page
├── menu.html           # Menu page
├── contact.html        # Contact page
├── styles.css          # Complete stylesheet (45KB)
├── script.js           # JavaScript functionality (17KB)
└── README.md           # This file
```

## 🚀 Setup Instructions

### Basic Setup (Local Development)
1. Download all files to a folder on your computer
2. Open `index.html` in a modern web browser
3. All pages are interlinked and will work immediately

### Web Server Setup
1. Upload all files to your web hosting server
2. Ensure files maintain their relative paths
3. Point your domain to `index.html`
4. Files are optimized for fast loading

### Testing
- Test on Chrome, Firefox, Safari, Edge
- Test responsive design on mobile devices
- Verify form validation works correctly
- Check all navigation links

## 🎨 Color Palette

```css
Primary Colors:
- Saffron Orange: #FF6B35
- Mustard Yellow: #F7B32B
- Terracotta: #C85C3C
- Burnt Sienna: #8B4513
- Dark Brown: #3E2723

Accent Colors:
- Warm Beige: #F5E6D3
- Cream: #FFF8E7
- Deep Orange: #E64A19
```

## 📱 Responsive Breakpoints

- Desktop: > 968px (full layout)
- Tablet: 640px - 968px (adjusted grid)
- Mobile: < 640px (single column, hamburger menu)

## ✨ Key Features to Highlight

### Animations
- Hero section fade-in on load
- Staggered element animations on scroll
- Card hover effects with scale transforms
- Smooth page transitions
- Auto-rotating testimonials
- Parallax background scrolling

### User Experience
- Intuitive navigation with active state indicators
- Clear call-to-action buttons throughout
- Form validation with helpful error messages
- Mobile-friendly hamburger menu
- Keyboard accessible carousel
- Loading animations for better perceived performance

### SEO Optimizations
- Semantic HTML5 structure
- Meta descriptions on all pages
- Alt text for all images
- Proper heading hierarchy
- Clean, readable URLs

## 🔧 Customization Guide

### Updating Contact Information
Edit the contact details in:
- Footer section (all pages)
- Contact page info cards
- Contact form submission handler in `script.js`

### Changing Colors
Update CSS variables in `styles.css`:
```css
:root {
    --saffron-primary: #FF6B35;
    --mustard: #F7B32B;
    /* etc. */
}
```

### Adding Menu Items
Copy the `.menu-item-card` structure in `menu.html`:
```html
<div class="menu-item-card" data-animate>
    <!-- Item content -->
</div>
```

### Updating Images
Replace Unsplash URLs with your own:
- Hero backgrounds
- Dish images
- Gallery photos
- About page images

### Google Maps Integration
Replace the iframe src in `contact.html` with your actual location:
```html
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL"></iframe>
```

## 🌐 Browser Support

- Chrome/Edge: Latest 2 versions ✅
- Firefox: Latest 2 versions ✅
- Safari: Latest 2 versions ✅
- Mobile browsers: iOS Safari, Chrome Mobile ✅

## 📊 Performance

- Optimized CSS with minimal redundancy
- Vanilla JavaScript (no heavy frameworks)
- Lazy-loaded images where applicable
- Efficient animations using CSS transforms
- Minify files for production (recommended)

## 🎯 Future Enhancements (Optional)

- [ ] Connect forms to backend/email service
- [ ] Add online reservation system integration
- [ ] Implement actual ordering system
- [ ] Add blog section for recipes/stories
- [ ] Create admin panel for menu updates
- [ ] Add multilingual support (Hindi/Punjabi)
- [ ] Implement progressive web app (PWA) features
- [ ] Add customer review submission form

## 📞 Support

For questions or customization help, refer to the inline comments in the code files.

## 📄 License

This is a demo/portfolio project. Modify and use as needed for your restaurant website.

---

**Developed with ❤️ and 🌶️**

*Bringing the authentic taste of Punjab's highway culture to the web!*

## 🎉 Ready to Launch!

Simply open `index.html` in your browser to experience the complete website. All functionality works out of the box!

# Rix Printing - Multilingual Website

A comprehensive multilingual website for Rix Printing company supporting Kurdish (Sorani), Arabic, and English languages with RTL/LTR direction switching.

## Features

- **Multilingual Support**: Kurdish (ckb), Arabic (ar), and English (en)
- **RTL/LTR Direction**: Automatic text direction switching based on language
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Language Switcher**: Floating language selector with smooth animations
- **Contact Form**: AJAX-powered contact form with validation
- **Smooth Scrolling**: Enhanced user experience with smooth navigation
- **Mobile Menu**: Collapsible navigation for mobile devices
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML

## File Structure

```
/
├── index.html              # Main HTML file
├── style.css               # Custom styles
├── script.js               # JavaScript functionality
├── languages/              # Language files
│   ├── ckb.json           # Kurdish (Sorani)
│   ├── ar.json            # Arabic
│   └── en.json            # English
└── README.md              # This file
```

## Language Features

### Kurdish (ckb)
- RTL direction
- Noto Kufi Arabic font
- Kurdish-specific text content

### Arabic (ar)
- RTL direction
- Noto Kufi Arabic font
- Arabic-specific text content

### English (en)
- LTR direction
- Noto Sans font
- English-specific text content

## Technical Implementation

### Language Switching
- Uses localStorage to save user preference
- Dynamic text direction switching (RTL/LTR)
- Font family switching based on language
- Smooth animations during language change

### Responsive Design
- Mobile-first approach
- Tailwind CSS framework
- Custom CSS for RTL-specific styling
- Mobile menu overlay

### JavaScript Features
- Language switching functionality
- Contact form handling
- Smooth scrolling navigation
- Mobile menu toggle
- Scroll-based animations
- Intersection Observer for performance

## Deployment

### Static Hosting
The website can be deployed to any static hosting service:

1. **Netlify**: Drag and drop the folder to Netlify
2. **Vercel**: Connect GitHub repository
3. **GitHub Pages**: Push to GitHub and enable Pages
4. **Firebase Hosting**: Use Firebase CLI

### Local Development
```bash
# Serve locally
python -m http.server 8000
# or
npx serve .

# Open in browser
http://localhost:8000
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Optimizations

- Lazy loading images
- CSS animations with hardware acceleration
- Debounced scroll events
- Preloaded critical images
- Minified CSS and JavaScript

## Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast support
- Reduced motion support

## Contact Form API

The contact form expects a POST endpoint at `/api/contact` with the following payload:

```json
{
  "name": "string",
  "phone": "string", 
  "description": "string",
  "lang": "ckb|ar|en"
}
```

## Customization

### Adding New Languages
1. Create new JSON file in `languages/` folder
2. Add language translations
3. Update language switcher in HTML
4. Add CSS for language-specific styling

### Styling
- Modify `style.css` for custom styles
- Use Tailwind classes in HTML
- Follow BEM methodology for CSS classes

### Images
- Replace placeholder images with actual content
- Optimize images for web
- Use WebP format for better performance

## License

© 2025 Rix Printing. All rights reserved.

## Support

For technical support or questions about the implementation, please contact the development team.
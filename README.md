# MUA - Mercure Uni et Actif

A professional website for the MUA university presidency campaign. This is a responsive portfolio showcasing our movement, candidate, convictions, and projects.

## About MUA

**MUA** (Mercure Uni et Actif) is a unified and active movement focused on student leadership and positive change within the university community. We are committed to transparent, inclusive, and innovative governance.

## Features

- **Responsive Design**: Fully responsive website that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with blue and white theme
- **Sections Included**:
  - Hero section with call-to-action
  - Movement introduction
  - Candidate profile
  - Core convictions (6 key values)
  - Projects showcase (6 initiatives)
  - Contact form for engagement
  - Social media links

- **Smooth Navigation**: Sticky navigation bar with smooth scroll to sections
- **Mobile Menu**: Hamburger menu for mobile devices
- **Interactive Elements**: Hover effects, animations, and form validation

## Project Structure

```
MUA/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styling (blue & white theme)
├── js/
│   └── script.js       # Interactive features
├── images/             # Image directory
│   ├── hero-image.jpg
│   ├── movement-image.jpg
│   ├── candidate.jpg
│   ├── project-1.jpg
│   ├── project-2.jpg
│   ├── project-3.jpg
│   ├── project-4.jpg
│   ├── project-5.jpg
│   └── project-6.jpg
├── .gitignore         # Git ignore file
└── README.md          # This file
```

## Getting Started

### Prerequisites
- No dependencies required! This is a static HTML/CSS/JavaScript website
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)

### Installation

1. Clone the repository or download the files
2. Navigate to the project folder
3. Open `index.html` in your web browser
4. To edit: Open the project in your text editor

## How to Add Images

Replace the placeholder images with your own:

1. Create an `images` folder if it doesn't exist
2. Add your images to this folder with these names:
   - `hero-image.jpg` - Hero section background
   - `movement-image.jpg` - Movement section image
   - `candidate.jpg` - Candidate profile photo
   - `project-1.jpg` through `project-6.jpg` - Project showcase images

The images will automatically display in the website.

## Customization

### Edit Text Content
Open `index.html` and edit:
- Page title: `<title>` tag
- All section headings and descriptions
- Candidate information
- Project details

### Modify Colors
Edit the CSS variables in [css/style.css](css/style.css#L8-L16):
```css
:root {
    --primary-blue: #0052cc;
    --dark-blue: #003d99;
    --light-blue: #e8f0fe;
    /* ... other colors */
}
```

### Add Social Media Links
Edit the footer section in [index.html](index.html) to add your social media URLs.

## Features Explained

### Navigation
- Fixed header with MUA logo and navigation links
- Hamburger menu for mobile devices
- Smooth scrolling to sections

### Hero Section
- Eye-catching introduction
- Call-to-action button

### Movement Section
- Overview of MUA values and beliefs
- Visual elements and key points

### Candidate Section
- Candidate profile with photo
- Highlights of experience, vision, and commitment

### Convictions
- 6 core values/beliefs
- Icon-based design for easy scanning
- Hover effects for interactivity

### Projects
- Grid layout of 6 major initiatives
- Project cards with descriptions
- "Learn More" buttons for each project

### Contact Section
- Form for supporters to connect
- Background in light blue theme color

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Publishing to GitHub

### Steps:
1. Create a new repository on GitHub named `MUA`
2. Initialize git in your project folder:
   ```bash
   git init
   ```
3. Add all files:
   ```bash
   git add .
   ```
4. Commit:
   ```bash
   git commit -m "Initial commit - MUA website"
   ```
5. Add remote (replace YOUR_USERNAME):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/MUA.git
   ```
6. Push:
   ```bash
   git branch -M main
   git push -u origin main
   ```

### Deploy with GitHub Pages:
1. Go to repository Settings
2. Scroll to "GitHub Pages"
3. Select "Deploy from a branch"
4. Choose `main` branch
5. Your site will be live at `https://YOUR_USERNAME.github.io/MUA/`

## Maintenance

- Update candidate information seasonally
- Add new projects as they launch
- Update social media links in footer
- Keep images optimized for web

## Future Enhancements

Potential additions:
- Blog/News section
- Event calendar
- Team member profiles
- Donation/Support system
- Multi-language support
- Newsletter signup
- Analytics integration

## License

This project is open source and available for educational purposes.

## Contact

For questions or support regarding this website, please reach out to the MUA team.

---

**Created for:** MUA - Mercure Uni et Actif  
**Year:** 2026  
**Version:** 1.0

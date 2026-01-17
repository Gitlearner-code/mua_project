# MUA Website - Quick Start Guide

Welcome to your MUA campaign website! Here's everything you need to get started.

## 📁 What You Have

```
MUA/
├── index.html           ← Main website file (open this in a browser)
├── css/style.css        ← Styling (blue & white theme)
├── js/script.js         ← Interactive features
├── images/              ← Your image folder (add images here)
├── README.md            ← Full documentation
├── IMAGES.md            ← Image guide
└── .gitignore           ← For GitHub
```

## 🚀 Quick Start (5 minutes)

### 1. View Your Website
- Open `index.html` in any web browser
- You should see a beautiful blue & white website with all sections

### 2. Add Your Images
1. Prepare 9 images (see IMAGES.md for details):
   - 1 hero image
   - 1 movement image
   - 1 candidate photo
   - 6 project images
2. Save them to the `images/` folder with exact names:
   - `hero-image.jpg`
   - `movement-image.jpg`
   - `candidate.jpg`
   - `project-1.jpg` to `project-6.jpg`
3. Refresh your browser - images will appear!

### 3. Edit Content
Open `index.html` in any text editor (VS Code, Notepad, etc.) and change:

**Key sections to customize:**

#### Hero Section (top)
Find this line and edit the text:
```html
<h1>Mercure Unie et Active</h1>
<p>Your Voice for University Leadership</p>
```

#### Movement Section
Edit the description:
```html
<p>MUA represents a unified and active voice for change...</p>
```

#### Candidate Section
Update candidate information:
```html
<h3>Leading the Way Forward</h3>
<p class="candidate-bio">Your candidate description here...</p>
```

#### Convictions Section
Modify the 6 core beliefs - find and edit:
```html
<h3>Quality Education</h3>
<p>Your conviction description...</p>
```

#### Projects Section
Edit each project's title and description (6 total):
```html
<h3>Campus Improvement Initiative</h3>
<p>Your project description...</p>
```

#### Contact Section
Update contact info and social media links in footer.

## 🎨 Customization

### Change Colors
Edit [css/style.css](css/style.css) - look for:
```css
:root {
    --primary-blue: #0052cc;    ← Main color
    --dark-blue: #003d99;       ← Darker shade
    --light-blue: #e8f0fe;      ← Light background
}
```

### Add Social Media
In footer section, update these links:
```html
<a href="https://facebook.com/your-page">Facebook</a>
<a href="https://instagram.com/your-handle">Instagram</a>
<a href="https://twitter.com/your-handle">Twitter</a>
```

## 📱 Responsive Design

Your website automatically looks great on:
- ✅ Desktop computers
- ✅ Tablets
- ✅ Mobile phones

Just open it in any browser - no extra work needed!

## 🐙 Publish to GitHub (Later)

When you're ready to publish:

1. Create a GitHub account (free)
2. Create a new repository named "MUA"
3. Run these commands in your project folder:
   ```bash
   git init
   git add .
   git commit -m "MUA campaign website"
   git remote add origin https://github.com/YOUR_USERNAME/MUA.git
   git push -u origin main
   ```
4. Enable GitHub Pages in repository settings
5. Your site goes live at `YOUR_USERNAME.github.io/MUA/`

See [README.md](README.md#publishing-to-github) for detailed instructions.

## 🔧 Making Changes

### Simple Way (No coding experience needed)
1. Open `index.html` in a text editor
2. Find the text you want to change
3. Edit it
4. Save the file
5. Refresh your browser

### Organization
- **Content edits** → Edit `index.html`
- **Style changes** → Edit `css/style.css`
- **Add interactivity** → Edit `js/script.js`
- **Images** → Add to `images/` folder

## 📋 Content Checklist

- [ ] Added all 9 images to `images/` folder
- [ ] Updated hero section text
- [ ] Updated movement description
- [ ] Added candidate information
- [ ] Customized 6 convictions
- [ ] Described all 6 projects
- [ ] Updated social media links in footer
- [ ] Tested website in browser
- [ ] Ready to publish on GitHub

## 🎯 Website Sections

1. **Navigation Bar** - Links to all sections, sticky at top
2. **Hero Section** - Eye-catching introduction with image
3. **Movement Section** - About MUA and core values
4. **Candidate Section** - Profile with highlights
5. **Convictions** - 6 core beliefs/values
6. **Projects** - 6 major initiatives showcase
7. **Contact** - Form for supporters to join
8. **Footer** - Social links and copyright

## 💡 Tips

- **Backup your work**: Save copies before making major changes
- **Test on mobile**: Open in phone browser to verify responsiveness
- **Keep images optimized**: Smaller file sizes = faster loading
- **Consistent updates**: Keep content fresh and current
- **Check links**: Make sure all buttons work before publishing

## 🆘 Need Help?

1. Check [README.md](README.md) for detailed documentation
2. See [IMAGES.md](IMAGES.md) for image specifications
3. Browser errors? Press F12 to open Developer Tools
4. Styling issues? Check [css/style.css](css/style.css)

## 📊 File Sizes (Approximate)

- `index.html` - 15 KB
- `css/style.css` - 12 KB
- `js/script.js` - 3 KB
- Each image - 100-300 KB (depending on optimization)

**Total without images:** ~30 KB  
**With 9 optimized images:** ~1-3 MB

## 🚀 Next Steps

1. ✅ View the website
2. ✅ Add your images
3. ✅ Customize content
4. ✅ Test everything
5. ✅ Deploy to GitHub Pages

You're all set! Your MUA campaign website is ready to showcase your movement! 🎉

---

**Questions or need to make changes?**
- All sections are clearly labeled in `index.html`
- Colors are defined in `css/style.css`
- Images go in the `images/` folder

Happy campaigning! 🗳️

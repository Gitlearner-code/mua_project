# MUA Website - Image Guide

## Image Specifications

### Required Images

#### 1. **hero-image.jpg** (Hero Section)
- **Location**: Top of the website, right side of "Mercure Unie et Active"
- **Purpose**: Main campaign hero image
- **Recommended size**: 500x500px or larger
- **Format**: JPG or PNG
- **Content**: Can be the movement in action, candidate speaking, or campaign imagery

#### 2. **movement-image.jpg** (Movement Section)
- **Location**: Right side of "Our Movement" section
- **Purpose**: Show the movement/team in action
- **Recommended size**: 500x400px or larger
- **Format**: JPG or PNG
- **Content**: Team photo, movement event, or group collaboration

#### 3. **candidate.jpg** (Candidate Section)
- **Location**: Left side of candidate profile
- **Purpose**: Professional candidate portrait
- **Recommended size**: 400x500px or larger
- **Format**: JPG or PNG
- **Content**: Professional headshot or portrait of the presidential candidate

#### 4. **project-1.jpg through project-6.jpg** (Projects Section)
- **Location**: Grid layout in "Our Projects" section
- **Purpose**: Visual representation of each project
- **Recommended size**: 400x250px or larger
- **Format**: JPG or PNG
- **Content Ideas**:
  - project-1.jpg: Campus building/facilities
  - project-2.jpg: Students/wellness activities
  - project-3.jpg: Career/professional development
  - project-4.jpg: Community/people working together
  - project-5.jpg: Diversity/inclusion moments
  - project-6.jpg: Green/sustainability initiative

## How to Add Your Images

### Step 1: Prepare Your Images
1. Resize images to appropriate dimensions
2. Optimize file size (aim for 100-300KB per image)
3. Use JPG for photographs, PNG for graphics with transparency

### Step 2: Save Images
1. Place your images in the `images/` folder
2. Name them exactly as listed above:
   - `hero-image.jpg`
   - `movement-image.jpg`
   - `candidate.jpg`
   - `project-1.jpg` to `project-6.jpg`

### Step 3: Verify
1. Open `index.html` in a web browser
2. Check that all images display correctly
3. Adjust image sizing in CSS if needed

## Image Optimization Tips

### File Size
- Compress images using tools like TinyPNG.com or ImageOptim
- Aim for 100-300KB per image for fast loading

### Quality
- Use at least 1200px width for high-quality display
- Maintain good aspect ratios (landscape for hero, square for projects)

### Format
- **JPG**: Use for photographs (supports compression)
- **PNG**: Use for graphics, logos, or images needing transparency
- **WebP**: Modern format for better compression (optional)

## Recommended Image Dimensions

| Image | Recommended Size | Aspect Ratio |
|-------|-----------------|--------------|
| hero-image.jpg | 600x600px | 1:1 |
| movement-image.jpg | 600x500px | 6:5 |
| candidate.jpg | 500x600px | 5:6 |
| project images | 600x375px | 16:9 |

## Image Editing Tools (Free)

- **Canva**: www.canva.com (easy design tool)
- **Pixlr**: www.pixlr.com (online editor)
- **GIMP**: www.gimp.org (desktop editor)
- **Photopea**: www.photopea.com (Photoshop alternative)
- **Unsplash**: www.unsplash.com (free stock photos)
- **Pexels**: www.pexels.com (free stock photos)

## Placeholder Images

If you don't have images yet, you can use:

1. **Placeholder Service**: Replace image src with:
   ```html
   https://via.placeholder.com/600x400?text=MUA+Project
   ```

2. **Free Stock Photos**:
   - Unsplash (unsplash.com)
   - Pexels (pexels.com)
   - Pixabay (pixabay.com)

## Troubleshooting

### Images Not Showing?
1. Check file names match exactly (including .jpg extension)
2. Verify images are in the `images/` folder
3. Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
4. Check browser console for errors (F12)

### Images Look Blurry?
1. Use larger source images (at least 1200px width)
2. Use high-quality source files
3. Check image compression isn't too aggressive

### Images Load Slowly?
1. Compress images further
2. Use modern format like WebP
3. Reduce image dimensions if they're very large

## Image Paths in HTML

All image paths in the HTML file use `images/` folder:
```html
<img src="images/hero-image.jpg" alt="MUA Movement">
```

This means:
- Place all images in the `images/` folder
- Keep the same filename as specified
- The HTML will automatically find and display them

## Questions?

For more help with images or the website, consult the main [README.md](README.md) file.

# Mustak Hussain - Art Portfolio
A responsive online art portfolio website created to showcase digital artwork and provide a method to submit commission requests. This project was built mostly with HTML and CSS but Javascript is also employed in order to create an interactive gallery experience

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
  - [Common Features for All Pages](#common-features-for-all-pages)
  - [Unique Features for the Gallery Page](#unique-features-for-the-gallery-page)
  - [Unique Features for the Commissions Page](#unique-features-for-the-commissions-page)
- [Design and Layout](#design-and-layout)
  - [Navigation and Structure](#navigation-and-structure)
- [Skeleton](#skeleton)
  - [Desktop Wireframes](#desktop-wireframes)
  - [Tablet Wireframes](#tablet-wireframes)
  - [Mobile Wireframes](#mobile-wireframes)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Technology Stack](#technology-stack)
- [Gallery Contents](#gallery-contents)
- [Customization](#customization)
  - [Adding New Artworks](#adding-new-artworks)
  - [Changing Slideshow Speed](#changing-slideshow-speed)
  - [Updating Social Media Links](#updating-social-media-links)
- [Deployment](#deployment)
- [Fixed Issues](#fixed-issues)
- [Testing](#testing)
  - [Browser Compatibility](#browser-compatibility)
  - [Gallery Functionality](#gallery-functionality)
  - [Form Submission](#form-submission)
  - [Accessibility Standards](#accessibility-standards)
- [Sources](#sources)

## Project Overview
This is an artist portfolio website designed to present my artwork to clients. The website features the following:

- **Home Page**: A landing page that displays an artwork as the hero section as well as a short welcome message inviting users and outlining the function of the website
- **Gallery Page**: An interactive gallery that automatically slides images but can also be navigated via previous & next buttons as well as by selecting thumbnails
- **Commissions Page**: A form that features inputs for name and email addresses as well as a comment box to make a detailed request for a commission. The form is powered by Formspree.io and the request is forwarded to my account on their website; however, a copy is also forwarded as an email by the site to a dedicated email address I have set up
- **Responsive Design**: The website dynamically adjusts to multiple device types including desktops, tablets and mobile
- **Social Media Integration**: Icons that link to my DeviantArt page and Instagram are included in the footer of each page

## Purpose and Value

### Purpose
The primary purpose of this project is to establish a professional online presence for my artwork, allowing it to be showcased in an organised and easily accessible manner.

### Value to Users
This website provides value by:
- Allowing users to explore a curated collection of artwork via a interactive gallery
- Offering a simple and efficient way to contact me directly for commissions 
- Delivering a consitent and responsive experience across all devices
- Providing easy access to social media that also showcase my artwork

## Features

### Common features for all pages
- A header that features a website title and a hamburger button for a dropdown menu. The navigation menu gives quick access to the Home, Gallery and Commissions pages
- A footer that includes icons that link to my social media pages and a generic license notice

### Unique features for the Gallery page
- Navigate the slideshow with previous and next buttons
- Access any artwork quickly by clicking on the thumbnails
- If left alone the gallery will autoplay through all the featured images
- ARIA labels and semantic HTML present for screen readers

### Unique features for the Commissions page
- A contact form is available for clients to request a commission 
- Clients can enter their name, an email address and a detailed description of their request
- The form is handled by Formspree.io which adds it to an inbox on my account on their website and forwards the request to an email address I have designated

## Design and Layout

### Navigation and Structure
The website includes a clear main navigation menu that is accessible across all pages via the page header. It allows users to move between:
- Home
- Gallery
- Commissions

 The layout of the website has a consistent structure that includes:
- A fixed naivgation bar in the header
- A central main content area
- A footer containing copyright information

 Each page follows a logical structure that utilises semantic HTML elements such as:
- **< header >**
- **< nav >**
- **< main >**
- **< section >**
- **< footer >**

### Design Rationale
The design of the website was guided by principles of usability, accessibility, and visual clarity.

- **Layout**: A simple and consistent layout ensures that users can easily navigate the website without confusion  
- **Navigation**: A fixed navigation system allows users to move between pages quickly and efficiently  
- **Accessibility**: High contrast colours, alt text for images, and ARIA labels are used to support users with accessibility needs  
- **User Experience**: Content is structured using clear headings and logical grouping, making information easy to locate  

The overall design avoids unnecessary visual clutter, ensuring that the artwork remains the focal point of the website.

## Accessibility
The website has been tested to ensure accessibility compliance:
- **Keyboard Navigation**: All interactive elements can be navigated using keyboard controls only
- **ARIA Labels**: Proper ARIA labels are present and descriptive for screen readers
- **Heading Hierarchy**: The document structure follows proper heading hierarchy for content organization
- **Image Alt Text**: All images include appropriate alt text for screen reader users

## User Experience (UX)

### Target Audience
- Individuals interested in digital art  
- Potential clients seeking commissioned artwork  
- Social media users discovering the artist’s work  

### User Goals
- To easily browse and view artwork  
- To navigate the website without confusion  
- To submit commission requests quickly and efficiently  

### Site Goals
- To present artwork in a clear and visually appealing format  
- To encourage user interaction with the gallery  
- To provide a straightforward and accessible commission process  

The design prioritises clarity and simplicity, ensuring that users can explore and evaluate the artwork intuitively and provides a method of contact to the artist from the site itself.

## User Stories

1. **As a visitor**, I want to browse artwork so that I can understand the artist’s style and quality  
2. **As a potential client**, I want to submit a commission request so that I can hire the artist  
3. **As a mobile user**, I want the website to be responsive so that I can use it comfortably on my device  
4. **As a user**, I want clear navigation so that I can easily move between pages  

## Skeleton
The website wireframes were created using Balsamiq and can be viewed below.

### Desktop Wireframes:
#### Design layout for the desktop version of the home page
#### ![Desktop - Home](<assets/images/Desktop - Home.webp>)
#### Design layout illustrating how the dropdown selector will look like on a desktop web browser
#### ![Desktop - Home - Dropdown](<assets/images/Desktop - Home - Dropdown Selection .webp>)
#### Design layout for the desktop version of the gallery page
#### ![Desktop - Gallery](<assets/images/Desktop - Gallery.webp>)
#### Design layout for the desktop version of the commissions page
#### ![Desktop - Commissions](<assets/images/Desktop - Commissions.webp>)

### Tablet Wireframes:
#### Design layout for the tablet version of the home page
#### ![Tablet - Home](<assets/images/Tablet - Home.webp>)
#### Design layout for the tablet version of the gallery page
#### ![Tablet - Gallery](<assets/images/Tablet - Gallery .webp>)
#### Design layout for the tablet version of the commissions page
#### ![Tablet - Commissions](<assets/images/Tablet - Commissions.webp>)

### Mobile Wireframes:
#### Design layout for the mobile version of the home page
#### ![Mobile - Home](<assets/images/Mobile - Home  .webp>)
#### Design layout for the mobile version of the gallery page
#### ![Mobile - Gallery](<assets/images/Mobile - Gallery.webp>)
#### Design layout for the mobile version of the commissions page
#### ![Mobile - Commissions](<assets/images/Mobile - Commissions.webp>)

## Screenshots

### Home
### Gallery
### Commissions

### Mobile - Home
### Mobile - Gallery
### Mobile - Commissions

## Getting Started
### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or server required for local development

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/mhussaingit/Milestone-Project-1--art-portfolio.git
   cd Milestone-Project-1--art-portfolio
   ```

2. Open in a browser:
   - Simply open `index.html` in your web browser, or
   - Use a local server:
     ```bash
     python -m http.server 8000
     # Then visit http://localhost:8000
     ```

## Technology Stack
- **HTML5**: Semantic markup structure
- **CSS3**: Responsive design with flexbox and modern styling
  - Google Fonts (Lato, Oswald)
  - Custom animations and transitions
- **JavaScript (Vanilla)**: Gallery functionality without dependencies
- **Font Awesome**: Icon library for social media links
- **Formspree**: Backend form handling for commission requests

## Gallery Contents
The portfolio includes artwork featuring:
- Anime characters
- Superheroes
- Celebrities

## Customization
### Adding New Artworks
1. Add image files to `assets/images/`
2. Update the `IMAGES` array in `assets/js/gallery.js` with the filename
3. The gallery will automatically include the new image

### Changing Slideshow Speed
Edit `assets/js/gallery.js` and modify the `AUTOPLAY_DELAY` value (currently 5000ms):
```javascript
const AUTOPLAY_DELAY = 5000; // Change this value
```

### Updating Social Media Links
Edit the footer in any HTML file to update social media URLs

## Deployment
The project is deployed using GitHub Pages.

Deployment Steps:
1. Push project files to a GitHub repository
2. Navigate to repository settings
3. Select Pages
4. Choose the main branch
5. Save settings

The site will be available at:
```
https://username.github.io/repository-name/
```
## Validation

### HTML Validation
All HTML files were tested using the W3C Markup Validation Service:
- index.html – No errors found
#### ![Index - Validator Result](<assets/images/index-html-validator.png>)
- gallery.html – No errors found
#### ![Gallery - Validator Result](<assets/images/gallery-html-validator.png>)
- commissions.html – No errors found
#### ![Commissions - Validator Result](<assets/images/commissions-html-validator.png>)


### CSS Validation
The CSS stylesheet was tested using the W3C Jigsaw CSS Validator and returned no errors.
#### ![CSS - Validator Result](<assets/images/css-validator.png>)

## Testing

### Manual Testing Procedures

| Feature | Action | Expected Result | Result |
|--------|-------|---------------|--------|
| Navigation | Click each menu link | Correct page loads | Pass |
| Gallery autoplay | Wait for slideshow | Images change automatically | Pass |
| Gallery controls | Click next/previous buttons | Images change accordingly | Pass |
| Thumbnail selection | Click a thumbnail | Corresponding image is displayed | Pass |
| Form validation | Submit empty form | Error message appears | Pass |
| Form submission | Submit valid details | Form successfully sends request | Pass |
| Responsiveness | Resize browser window | Layout adjusts correctly | Pass |

### Gallery Functionality
The interactive gallery has been tested to ensure the following features work as intended:
- **Autoplay Feature**: Verifies that images automatically cycle through every 5 seconds
- **Navigation Controls**: Confirms that the previous and next buttons navigate through the gallery correctly
- **Thumbnail Selection**: Ensures that clicking on thumbnail images jumps to the correct corresponding artwork
- **Wraparound Behavior**: Checks that the gallery wraps around properly when reaching the beginning or end of the collection

### Form Submission
The commission request form has been tested to validate the following:
- **Required Fields**: All form fields are properly marked as required and prevent submission if empty
- **Successful Submission**: Form submission works correctly with valid data
- **Email Delivery**: Confirmation emails are successfully received via Formspree integration

### Browser Compatibility
The website was tested on:
- Google Chrome  
- Mozilla Firefox  
- Microsoft Edge  

All browsers displayed consistent layout and functionality.

### Device Testing
- Desktop (full screen and resized)
- Tablet (simulated using developer tools)
- Mobile (simulated using developer tools)

### Accessibility Testing
- All interactive elements are accessible via keyboard navigation
- ARIA labels are used where appropriate
- Proper heading hierarchy ensures screen reader compatibility

## Fixed Issues
- The **< a >** tag on line 52 on every page was not closed properly so added a **< /a >** tag on line 53 to close it
- The **< main >** tag on line 39 in the Comissions page was not closed properly so added a **< /main>** tag on line 61 to close it

## Future Improvements

- Expand the gallery with more artwork
- Add an artist biography section
- Include pricing tiers for commissions
- Add filtering or categories for gallery images
- Improve animations and transitions for enhanced user experience

## Sources

### Favicon
- **Icons8**: https://icons8.com/icons/set/artist-portfolio/

### Form Service
- **Formspree**: https://formspree.io/

### Icons
- **Font Awesome**: https://fontawesome.com/

### Fonts
- **Google Fonts**: https://fonts.google.com/

### Gallery
- **GeeksforGeeks**:
  - https://www.geeksforgeeks.org/automatic-image-slider-using-javascript/
  - https://www.geeksforgeeks.org/javascript/create-an-autoplay-carousel-using-html-css-and-javascript/

- **CodeHim**:
  - https://codehim.com/carousel/javascript-image-carousel-with-thumbnails/
  - https://codehim.com/gallery/slideshow-javascript-with-buttons/

- **CSS Script**: https://www.cssscript.com/responsive-keyboard-accessible-image-carousel/

- **CodyHouse**: https://codyhouse.co/ds/components/info/slideshow

- **Stack Overflow**: https://stackoverflow.com/questions/59429425/touch-image-slider-next-prev-keys-interfere-with-code-for-current-slide

- **Mozilla**: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
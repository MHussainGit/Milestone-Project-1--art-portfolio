# Mustak Hussain - Art Portfolio
A responsive online art portfolio website created to showcase digital artwork and provide a method to submit commission requests. This project was built mostly with HTML and CSS but Javascript is also employed in order to create an interactive gallery experience

## Table of Contents

- [Project Overview](#project-overview)
- [Purpose and Value](#purpose-and-value)
  - [Purpose](#purpose)
  - [Value to Users](#value-to-users)
- [Features](#features)
  - [Common Features for All Pages](#common-features-for-all-pages)
  - [Unique Features for the Gallery Page](#unique-features-for-the-gallery-page)
  - [Unique Features for the Commissions Page](#unique-features-for-the-commissions-page)
- [Design and Layout](#design-and-layout)
  - [Navigation and Structure](#navigation-and-structure)
  - [Design Rationale](#design-rationale)
- [Accessibility](#accessibility)
- [User Experience (UX)](#user-experience-ux)
  - [Target Audience](#target-audience)
  - [User Goals](#user-goals)
  - [Site Goals](#site-goals)
- [User Stories](#user-stories)
- [Skeleton](#skeleton)
  - [Desktop Wireframes](#desktop-wireframes)
  - [Tablet Wireframes](#tablet-wireframes)
  - [Mobile Wireframes](#mobile-wireframes)
- [Screenshots](#screenshots)
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
- [Validation](#validation)
  - [HTML Validation](#html-validation)
  - [CSS Validation](#css-validation)
- [Testing](#testing)
  - [Manual Testing](#manual-testing)
  - [Functionality Testing](#functionality-testing)
  - [Usability & Accessibility Testing](#usability--accessibility-testing)
  - [Responsiveness Testing](#responsiveness-testing)
  - [Browser Compatibility Matrix](#browser-compatibility-matrix)
- [Fixed Issues](#fixed-issues)
- [Future Improvements](#future-improvements)
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
The primary purpose of this project is to establish a professional and centralized online presence for my digital artwork. Prior to this, artwork may have been scattered across various social media platforms; this website serves as a dedicated portfolio that allows me to present my work in a highly organised, distraction-free environment. By curating my own gallery space, I can control the narrative of my art, demonstrate my technical versatility, and provide a direct, professional avenue for clients to request custom commissions.

### Value to Users
- This website is designed with the user's convenience and enjoyment in mind, providing tangible value in several ways:

- Frictionless Browsing: Users can explore a curated collection of high-quality artwork through an interactive, easily navigable gallery without needing to create an account or log into a third-party platform.

- Direct Communication: Potential clients are provided with a streamlined, secure commission form, eliminating the need to navigate confusing social media direct messaging systems.

- Cross-Device Consistency: Whether viewing on a large desktop monitor or a mobile phone on the go, users receive a fully responsive, tailored viewing experience that does not compromise image quality or layout structure.

- Connectivity: Integrated social media links allow fans to easily follow my ongoing artistic journey on platforms like Instagram and DeviantArt.

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
To ensure the site's design remained focused on the target audience, the following user stories were utilized to guide the development of specific features:

- As a visitor, I want to easily browse through a gallery of artwork so that I can understand the artist’s unique style, quality, and range.
Addressed by: The interactive JavaScript gallery, featuring auto-play functionality, manual navigation buttons, and quick-select thumbnails.
ADD SCREENSHOT HERE

- As a potential client, I want to find a clear and simple method to submit a commission request so that I can hire the artist for custom work.
Addressed by: The dedicated Commissions page featuring a structured form that safely forwards requests directly to the artist's email.
ADD SCREENSHOT HERE

- As a mobile user, I want the website to be fully responsive so that I can view the artwork and navigate the site comfortably on my smaller device.
Addressed by: The implementation of CSS media queries that adjust padding, font sizes, and layout structures (such as a hamburger dropdown menu) for screens under 600px.
ADD SCREENSHOT HERE

-  As a user, I want clear and consistent navigation so that I can easily move between the Home, Gallery, and Commissions pages without getting lost.
Addressed by: The fixed navigation bar present at the top of every page, complete with an "active" indicator to show the user their current location on the site.
ADD SCREENSHOT HERE

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

### Home Page
#### ![Desktop - Home Page](<assets/images/Desktop-Screenshot-Home.png>)
### Navigation Menu
#### ![Desktop - Navigation Menu](<assets/images/Desktop-Screenshot-Dropdown.png>)
### Gallery Page
#### ![Desktop - Gallery](<assets/images/Desktop-Screenshot-Gallery.png>)
### Commissions Page
#### ![Desktop - Commissions Page](<assets/images/Desktop-Screenshot-Commissions.png>)

### Mobile - Home Page
#### ![Mobile - Home Page](<assets/images/Mobile-Screenshot-Home.png>)
### Mobile - Navigation Menu
#### ![Mobile - Navigation Menu](<assets/images/Mobile-Screenshot-Dropdown.png>)
### Mobile - Gallery Page
#### ![Mobile - Gallery](<assets/images/Mobile-Screenshot-Gallery.png>)
### Mobile - Commissions Page
#### ![Mobile - Commissions Page](<assets/images/Mobile-Screenshot-Commissions.png>)

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

### Javascript Validation
The app.js file was tested using the JSLINT tool and was returned with no errors.
#### ![JS - Validator Result](<assets/images/jslint-js-validator.png>)

## Testing

### Manual Testing 
Extensive manual testing was designed and implemented to assess the functionality, usability, and responsiveness of the website.

#### Functionality Testing
Functionality testing was conducted to ensure all interactive elements and forms work exactly as intended.

#### Gallery Interactive Features:
- Action: Allowed the page to sit idle to test the Autoplay feature.
- Result: The images automatically cycled exactly every 5 seconds as programmed in gallery.js. (PASS)

- Action: Clicked the 'Next' and 'Previous' arrows rapidly.
- Result: The slideshow responded immediately, pausing the autoplay timer, moving to the correct image, and wrapping around seamlessly at the beginning and end of the array. (PASS)

- Action: Clicked random thumbnails in the gallery.
- Result: The main display instantly updated to the selected artwork, and the active border highlight jumped to the correct thumbnail. (PASS)

#### Commission Form & Validation:
- Action: Attempted to submit the form completely empty.
- Result: The browser prevented submission and displayed a "Please fill out this field" validation error on the Name input. (PASS)
##### ADD SCREENSHOT HERE

- Action: Entered a plain text string (e.g., "not-an-email") into the Email field and clicked submit.
- Result: The browser caught the invalid format and prompted the user to include an "@" symbol. (PASS)
##### ADD SCREENSHOT HERE

- Action: Filled out all fields correctly and clicked submit.
- Result: The form successfully routed to the Formspree thank-you page, and a test email was successfully received in my designated inbox. (PASS)
##### ADD SCREENSHOT HERE

#### Usability & Accessibility Testing
Usability testing was conducted to ensure the site is easy to navigate for all users, including those relying on keyboards or screen readers.

#### Keyboard Navigation: 
- Action: Used the Tab key to navigate through the entire website.
- Result: All links, form inputs, form buttons, and gallery controls were accessible. The Enter key successfully activated the gallery arrows and form submission. The left and right arrow keys successfully navigated the gallery images. (PASS)

#### Lighthouse Accessibility Audit:
- Action: Ran Google Chrome's Lighthouse tool to check for contrast and ARIA labels.
- Result: The site passed contrast checks. The custom JavaScript correctly assigns aria-label and alt text to every dynamically generated image in the gallery. (PASS)
ADD SCREENSHOT HERE

#### Responsiveness Testing
Responsiveness testing was conducted using Google Chrome Developer Tools and physical devices to ensure structural integrity across all screen sizes.

#### Mobile Devices (Screens < 600px):
- Action: Viewed the site on a simulated iPhone 12 Pro.
- Result: The top navigation bar cleanly collapses into a hamburger menu. The hero text scales down to 100% font size, and the form fields stack vertically. The gallery thumbnails shrink to 60x60px to fit on the screen without horizontal scrolling. (PASS)
ADD SCREENSHOT HERE

#### Tablet Devices (Screens 601px - 900px):
- Action: Viewed the site on a simulated iPad Mini.
- Result: The header padding increases to accommodate the larger screen, and the form padding expands to 2rem. The gallery thumbnails adjust to 75x75px. (PASS)

#### Desktop Devices (Screens > 901px):
- Action: Viewed the site on a standard 1080p monitor.
- Result: The maximum width of the gallery and form containers (1000px and 600px respectively) prevents the content from stretching too wide, maintaining an elegant layout. (PASS)

#### Browser Compatibility Matrix
To ensure cross-platform compatibility, the live GitHub Pages deployment was manually tested across multiple modern browsers:

| Browser | Layout Integrity | Gallery JS Works | Form Submission Works | Result |
|---|---|---|---|---|
| Google Chrome | Excellent | Yes | Yes | ✅ Pass |
| Mozilla Firefox | Excellent | Yes | Yes | ✅ Pass |
| Microsoft Edge | Excellent | Yes | Yes | ✅ Pass |
| Safari (iOS) | Excellent | Yes (Swipe works) | Yes | ✅ Pass |

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
# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [ solution URL ](https://github.com/miteshp98/blogr-landing-page-main)
- Live Site URL: [ live site URL ](https://miteshp98.github.io/blogr-landing-page-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I have a webpage with a responsive navigation menu. The CSS defines styles for various elements, including the navigation wrapper, menu items, and dropdowns, as well as media queries for different screen sizes. The JavaScript handles toggling the menu and dropdowns, including changing the menu icon when the navigation is opened or closed.

Responsive Design: The layout adjusts for different screen sizes using media queries.
Dropdown Menu: The dropdowns toggle open and closed when clicked, with an arrow icon that rotates to indicate the dropdown state.
Menu Toggle: A hamburger icon that changes to a close icon when the menu is open on smaller screens.

CSS:

Uses Google Fonts (Overpass and Ubuntu).
Includes custom properties for colors and fonts.
Defines various sections and their styles (hero, header, navigation, about, infrastructure, detail, footer).
Media queries for screen sizes (425px, 768px, 1024px, 1440px, 1920px).

JavaScript:

Adds event listeners to toggle the navigation menu and dropdowns.
Adjusts the icon for the menu toggle button.
Manages the display of dropdowns and rotates the arrow icons.

```js
dropdown.forEach((link, index) => {
  link.addEventListener("click", function () {
    if (
      dropdownMenu[index].classList.contains("toggle-dropdown") &&
      arrow[index].classList.contains("arrow-rotate")
    ) {
      dropdownMenu[index].classList.remove("toggle-dropdown");
      arrow[index].classList.remove("arrow-rotate");
    } else {
      removeDropdownMenu();
      dropdownMenu[index].classList.add("toggle-dropdown");
      arrow[index].classList.add("arrow-rotate");
    }
  });
});

function removeDropdownMenu() {
  dropdownMenu.forEach((element) => {
    element.classList.remove("toggle-dropdown");
  });

  arrow.forEach((element) => {
    element.classList.remove("arrow-rotate");
  });
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Next Steps for Continued Development:

Bug Fixing:

Debug and fix the issue with dropdown menus not closing on the second click.
Code Optimization:

Refactor JavaScript to ensure clean and efficient code.
Ensure CSS adheres to best practices for responsiveness and accessibility.
Enhanced Features:

Add animations for smoother transitions when opening and closing dropdowns.
Implement accessibility improvements, such as keyboard navigation and ARIA roles.
Testing:

Conduct thorough testing across different browsers and devices to ensure consistent behavior.
Implement automated tests for critical features to catch regressions early.
Documentation:

Document the CSS and JavaScript for easier maintenance and future enhancements.
Provide a style guide for consistent design across the site.
User Experience:

Gather feedback from users to identify any usability issues or desired features.
Iterate on the design and functionality based on user feedback to improve the overall experience.
Technologies Used:

CSS for styling and layout
JavaScript for interactive behavior
HTML for structure

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Udemy Webdevlopment](https://www.udemy.com/share/101W9C3@2s1lShiGH32a3OJHMYullps9bvMmvxO_kykXK5ZGloqkGQDHawnryvbZtrMeQ8y81A==/)

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Mitesh Panchal](https://miteshp98.github.io/portfolio-website/)
- Frontend Mentor - [@miteshp98](https://www.frontendmentor.io/profile/miteshp98)
- Linkedin - [@Mitesh Panchal](https://www.linkedin.com/in/mitesh-panchal-356558126/)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

Thanks to the challenge provider for creating this opportunity to apply and improve my frontend development skills.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**

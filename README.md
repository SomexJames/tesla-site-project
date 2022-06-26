# Tesla Site Project

<div id="top"></div>


<br />

<h3 align="center">Tesla Site Project</h3>

  <p align="center">
    My Clone of Tesla's Website with React
    <br />
    <a href="https://github.com/SomexJames/tesla-site-project"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/SomexJames/tesla-site-project/issues">Report Issues</a>
    ·
    <a href="https://github.com/SomexJames/tesla-site-project/issues">Submit Improvements</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#features">Features</a>
      <ul>
        <li><a href="#arrow-animation">Arrow Animation</a></li>
        <li><a href="#box-shadow">Box Shadow</a></li>
      </ul>
    </li>
    <li>
      <a href="#steps-i-took">Steps I Took</a>
      <ul>
        <li><a href="#navbar">Navbar</a></li>
        <li><a href="#banner">Banner</a></li>
        <li><a href="#font">Font</a></li>
        <li><a href="#header">Header</a></li>
        <li><a href="#home-page">Home Page</a></li>
        <li><a href="#block-content">Block Content</a></li>
        <li><a href="#window-size-hook">Window Size Hook</a></li>
        <li><a href="#side-menu">Side Menu</a></li>
      </ul>
    </li>
    <li>
      <a href="#what-i-learned">What I Learned</a>
      <ul>
        <li><a href="#power-of-template-literals">Power of Template Literals</a></li>
        <li><a href="#creating-custom-hooks">Creating Custom Hooks</a></li>
        <li><a href="#utilizing-css-properties">Utilizing CSS Properties</a></li>
      </ul>
    </li>
    <li>
      <a href="#version-control">Version Control</a>
    </li>
    <li>
      <a href="#next-steps">Next Steps</a>
      <ul>
        <li><a href="#form-validation">Form Validation</a></li>
        <li><a href="#minor-sizing-bugs">Minor Sizing Bugs</a></li>
        <li><a href="#arrow-animation-timing-accuracy">Arrow Animation Timing Accuracy</a></li>
        <li><a href="#side-menu-bugs">Side Menu Bugs</a></li>
        <li><a href="#clean-up-duplicate-code">Clean Up Duplicate Code</a></li>
      </ul>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

I have this great feeling of triumph and satisfaction in my previous projects that really made me think about mathematics and planning for React component interactions. However, I was never able to be fully satisfied knowing how bland they look (and also because there are still bugs I've yet to fix). Any time I tried to think of a design to revamp my <span><a href="https://github.com/SomexJames/BlackJackReact">BlackJackReact</a></span> or <span><a href="https://github.com/SomexJames/3x3-monte-dapp">3x3-monte-dapp</a></span>, I drew a blank. So, with this project focusing primarily on recreating a design, I was able to remove my creative design block from the equation and focus on the type of creativity that I enjoyed: resourcefulness. I got the idea of cloning a website from an answer to a <span><a href="https://www.quora.com/Must-a-front-end-web-developer-know-how-to-design">Quora Question</a></span> and chose Tesla because I follow the company and the website design looked nice.

<p align="right">(<a href="#top">back to top</a>)</p>

## Features

### Arrow Animation
***Tesla's Arrow Animation:***  
![](/src/assets/tesla-arrow.gif)

***My Arrow Animation:***  
![](/src/assets/my-arrow.gif)

### Box Shadow
***CSS on Tesla's official site:***  
![](/src/assets/tesla-transition.png)


(Nothing was hidden, so I was able to find everything I need for the box shadow from the Inspect element)


<!-- Steps I Took -->
## Steps I Took

### Navbar
<ul>
  <li>Started with the base "create-react-app" template and immediately started working on the navbar</li>
  <li>From my initial planning, I already had an idea of creating an array of objects, so I naturally used that to map over the array to create an element for each product</li>
  <li>Already planned on setting up states for when side menu is open and closed</li>
</ul>

### Banner
<ul>
  <li>As of today, Tesla's official website has a banner on top of its home page advertising its 2021 Impact Report</li>
  <li>I thought it would be a nice touch and simple addition to the site</li>
  <li>Includes the cubic bezier box shadow on hover feature</li>
</ul>

### Font
<ul>
  <li>Put comments in the CSS file regarding my steps for font selection because I didn't have another place to write down my thoughts early on</li>
</ul>

### Header
<ul>
  <li>A container component for Banner and Navbar since they are both sticky components</li>
</ul>

### Home Page
<ul>
  <li>I originally planned on having everything the home page needed in one file, but once it started getting messy from all the HTML elements and needing different description for certain products, I created a separate Block Content template file</li>
</ul>

### Block Content
<ul>
  <li>I took all the elements I wrote in the original Home Page file and created a template component with JSX elements</li>
</ul>

&emsp;***Note:*** At this point, I did think of creating a global state to just have one array with all the details of each object the site would need. But, I wanted to try passing down states since my previous projects all used React's Global Context (or maybe I was just too lazy to set it up).

### Window Size Hook
<ul>
  <li>Needed a dynamic array of side menu items to change based on window size (so css can't alter state)</li>
</ul>

### Side Menu
<ul>
  <li>Once I finished the window size hook, I just made it so that the items from the center navbar are inserted into the "menuItems" variable before its elements are mapped out into the sidemenu</li>
</ul>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- What I Learned -->
## What I Learned

### Power of Template Literals
<ul>
  <li>I avoided using template literals at first, but once I got used to it, I wish I had done more because of how much utility and flexibility they provide</li>
</ul>

### Creating custom hooks
<ul>
  <li>I spent a lot of time looking for a native react hook that did exactly what I wanted it to do (handle real-time resizing), but all of the search results included creating your own hook using event listeners</li>
  <li>I guess I wanted an easier way, but it turns out using the native window event type, "resize" was easier than I thought!</li>
</ul>

### Utilizing CSS properties
<ul>
  <li>I've been wanting to practice more CSS, but I could never come up with a creative design myself to truly be able to take pride in my work</li>
  <li>With that out of the equation, I was finally able to take the time to really dive into the CSS aspect</li>
</ul>


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- Version Control -->
## Version Control
From my previous projects, I knew how important version control was and I knew I wanted to implement that in this project. However, I didn't actually start setting up git until I had already created most of the components. Looking back, it was most likely due to a lack of humility in the chance that my beginning code and structure could be laughably wrong. However, in comparison to my previous projects, I would say that this one didn't require as much "pulling from the roots" as the other ones did. (As of now, at least)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Next Steps -->
## Next Steps

### Form Validation
<ul>
  <li>I want to create a sign up page with form validation</li>
  <li>Probably not going to be linked to a back end server anytime soon, but I may add pseudo code to plan for it</li>
</ul>

### Minor Sizing Bugs
<ul>
  <li>Arrow is cut off on certain browsers (especially iPhone/Safari or other browsers that have the address bar on the bottom)</li>
  <li>Navbar right items too close</li>
  <li>Tesla logo is a bit small</li>
</ul>

### Arrow Animation Timing Accuracy
<ul>
  <li>Improve accuracy of arrow animation</li>
</ul>

### Side Menu Bugs
<ul>
  <li>Opening side menu shifts header by a couple pixels</li>
  <li>I assume it has something to do with the side scroll</li>
</ul>

### Clean Up Duplicate Code
<ul>
  <li>As I found better ways to organize CSS inheritance, I made more parent components with properties that are the same as the child's</li>
</ul>

<p align="right">(<a href="#top">back to top</a>)</p>

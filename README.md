# My Portfolio Page

A NextJS portfolio website detailing my bio, projects, skills, and contact information. Available at https://faroukadeleke.vercel.app/

### GSAP (GreenSock Animation Platform) 
I had a really fun time developing the GSAP animations for this page - while tedious and meticulous, it gave me a sense of appreciation for the detail that goes into frontend development. Below I will detail how I created the "magic" text slide animation - where the text seems to be sliding out from behind an invisible box. It's a really cool alternative to the traditional "fade right" or "slide right" animations and can be combined with delays to create a really cool staggered effect.

### Installation:

Install the required gsap packages to your project:

```
npm install gsap
```

Make sure to import the tools we'll be using for this animation and register the scroll-trigger to your component (*I used "useGSAP" instead of "useEffect" here because it automatically cleans up the animation, which is best practice for using GSAP animations in react.*):

```
import { useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);
```

Then, in your return, set up ur html (*I add a reference to the text so I can be modified by the GSAP animation*):

```
<div className="text-slide-container">
  <h2 ref={textElement} className="text">Hello World!</h2>
</div>
```

For the container, make sure it has overflow hidden, so the sliding text starts hidden:

```
.text-slide-container {
  overflow: hidden;
}

.text {
  transform: translateX(-100%);
}
```
Animate with GSAP:

```
useGSAP(() => {
  const textElement = useRef(null);

  gsap.to(textElement.current, {
    x: 0, // Moves the text from -100% to 0 on the X-axis
    duration: 1, // Animation duration
    ease: "power3.out", // easing for smooth movement (explore the different easing to experiment)
    scrollTrigger: {
      trigger: textElement.current,
      start: "top 80%", // starts when the top of the element hits the 80% viewport height
      end: "bottom 60%", // ends when the bottom of the element exits the 60% viewport height
      toggleActions: "play none none reverse", // Defines how the animation responds to scroll direction
    },
  });
}, []);
```
<br><br>
I suggest playing around with multiple text boxes and staggering the delay, changing the direction, etc. to make the most out of GSAP's library.
<br><br>




![Screenshot 2024-01-22 163021](https://github.com/Fadeleke57/faroukadeleke/assets/110058327/d2ee00d9-bb11-410f-b23f-012c2188e90f)








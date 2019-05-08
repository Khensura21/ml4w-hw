# Inevitable 

## Project Brief

For my final project in Machine Learning for Web, I created an interactive p5.sketch that "poof'd" all of your negatives worries out your life. 


## The WHY

picture here 
What really inspired me to create Inevitable were these  three distinctive things:
- A conversation with my mother 
- Marvel's Avenger: Endgames
- Mental Health


Yeah, I know, pretty random, but I'll briefly explain how each one of these randoms things shaped my project.

The conversation I had with my mom came at a pretty dark momemt I was having in my life at the time. Life, school, and New York City in general was kicking my butt and I was really out of it. I confided in my mother about this, and her words as usual, help calm and ground me. But she also said something that really resonated with me: "Ra, just remember, no matter how real they feel or big they become, all of your stresses, worries, and anxities will pass away. They are simply illusions!"

Next, you have Avengers: Endgames. Besides being one of the greatest movies ever (YES I am making that claim), I had also been inspired by the maniacal Thanos. His power (With the inifinity Stones of course) allowed him to snap away anything he wanted (Half of the universe unfortunately :( ) , and I wondered myself, what would I do if I could have type of power.

After brainstorming for a few days, this led me to play with the idea of "snapping" away all my worries and Inevitable was born. After all, they would go poof anyway because they were ultimately transient things placed in my life to try and stop me. 

What is more, my mental health is something that must stay strong if I plan to be successful and happy in this lifetime. 
This piece was created to act as a reminder to keep the minds healthy and hopeful during tough moment in life.

## The HOW

Now I'll break down how it was put together. The technologies used in this project were:

1. P5.js
2. Google's Teachable Machine Audio Version (tensorflow.js)


### Step 1

Initially, I trained the ML algorithim to distinguish a finger snap from no noise. This was pretty simple thanks to Teachable Machine.


picture

### Step 2

Next I used that algorithim to test out the functionality part of my sketch which was to trigger something if it heard a snap. In this example, the background color of the canvas changed everytime I snapped my fingers.


picture 


### Step 3

After getting the functionality to work with ML to work, I then simulated the idea of removing elements that I had drawn on the canvas. Building on top of a p5 example, I created two buttons with callback functions. The "submit" button allowed me to draw text to the sketch from a word array. The remove button, when pressed, subsequentl deleted each word randomly. 


picture 




### Step 4

Finally, after coding a view more lines of code for interaction and prettying it up a bit via CSS,  I put it all together to make my below is a picture of the final product. The "random" button was replaced with the Teachable Machine audio model and there you! Be sure to check it out live under the "Demo" section. 


picture



## Further Steps
While I am happy with the initial results, I look forward in my future iterations to:

- Create "Poof" animations as each worry leaves the canvas
- Iterate the visual design to make it more robust and customized
- Iterate the interaction making it more user-friendly and conduct user testing






## References and Links
1. Yining Shi
2. https://p5js.org/examples/dom-input-and-button.html
3. [p5.js Example](https://p5js.org/examples/dom-input-and-button.html)
4. [Colorway Inspiration](https://giphy.com/search/thanos-stickers)




## Live Demo
[demo]()

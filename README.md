# Memory Game

The Memo![responsive](https://user-images.githubusercontent.com/93283135/152126688-4e10808b-85fd-498d-911a-ac7c6de5d88b.PNG)

The Memory Game website is a simple and sleek website that hosts a game playable within the browser.

Memory game is used to display how pure, vanilla Javascript can be used to create a simple but fun card based memory game. I used many javascript concepts such as for loops and if statements to create the majority of the site within javascript exclusively. 

The target audience for this game would be people of all ages. I wish to achieve this through the simplicity of the sites design and function.

## Features:

### Heading

The site features a simple heading upon the light pink background which covers the page. I decided to go with a simple heading and short description due to the simplicity of the game. 

The heading outlines the rules of the game. The player is to match the album covers that are hidden on the underside of the cards without using all the lives given. 

![header](https://user-images.githubusercontent.com/93283135/152021174-4ff91fcb-f64b-409a-afa9-66e3b469019e.PNG)

### Player Lives

The player is given 8 lives to complete the game. If there is a mismatch when unconvering two covers, a life will be lost. If the flipped covers match then the lives total will not change. Upon the player losing or winning the game, the lives will be refreshed to 8 again.  

![lives](https://user-images.githubusercontent.com/93283135/152021125-00a58f77-8a85-4e12-a4b2-0d2f51c9e3d4.PNG)

### The Game Area

Here there is 4 column with 4 rows each. The placement of each card (2 sets of 8) is randomized in the game area. the goal is to flip cards (2 per life) until all cards are revealed. 

When 2 cards are flipped and they are not matching, they will flip back to their original form and a life will be taken from the lives total.

When 2 cards are flipped and are matching. They will remain flipped and no lives will be taken from the player. 

Each set of cards represents a album cover. I chose album covers for the images as I believe they are just generally very noteworthy images and may help with the memory. It also adds a nice look, as I believe I chose very striking album covers.

An extra goal I had for achieving optimal user experience was to create shadows and animations in CSS that would be applied to each card. 


![game area](https://user-images.githubusercontent.com/93283135/152021339-308c8582-c28a-4d0b-a96b-e98550757cd0.PNG)


## Testing

I tested that the page works in the primary browsers used on desktop and mobile. (Edge, Chrome, Firefox and Safari)

I confirmed that the project is perfectly responsive and works on all screen sizes using Developer Tools on Google Chrome.

I confirmed that all sections are readable and easy to access.

I confirmed that all elements are working.

## Validator Testing

- HTML

No errors were returned when passing through the official W3C Validator.

- CSS

No errors were found when passing through the official Jigsaw Validator.

- JavaScript

No errors were found when passing through the official Jshint Validator.

The validator returned the following:

There are 14 functions in this file.

Function with the largest signature take 2 arguments, while the median is 0.5.

Largest function has 17 statements in it, while the median is 2.

The most complex function has a cyclomatic complexity value of 5 while the median is 1.

## Fixed Bugs

The most notable bug I encountered when coding this project was that whenever the cards would randomize and flip back down, the player would be able to see a glimpse of the new randomized cards as they were flipping. I was able to fix this bug by using a setTimeout function to delay the restart function by 1 second so the player wouldn't be able to see the new cards as they returned to the unflipped position.

An example of a setTimeout function used:

![code example](https://user-images.githubusercontent.com/93283135/152127895-b4a2fdf3-09f8-41f9-8b47-2a56813f0f14.PNG)


## Unfixed Bugs

There are no unfixed bugs in the finished project. 

## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The livelink can be found here: https://tylerdevries.github.io/Memory-Game/

## Credits


api.deezer.com:
  - I used Deezers API to find high quality renders of the album covers used.


cssgradient.io:
  - I used this site to create the gradient used on the background of the site. 




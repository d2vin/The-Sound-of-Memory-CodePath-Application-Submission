# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Devin Minnihan**

Time spent: **#8** hours spent in total

Link to project: https://glitch.com/edit/#!/innovative-petite-feast

## Required Functionality

The following **required** functionality is complete:

- [✅] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [✅] "Start" button toggles between "Start" and "Stop" when clicked.
- [✅] Game buttons each light up and play a sound when clicked.
- [✅] Computer plays back sequence of clues including sound and visual cue for each button
- [✅] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [✅] User wins the game after guessing a complete pattern
- [✅] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [✅] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [✅] Buttons use a pitch (frequency) other than the ones in the tutorial
- [✅] More than 4 functional game buttons
- [✅] Playback speeds up on each turn
- [✅] Computer picks a different pattern each time the game is played
- [✅] Player only loses after 3 mistakes (instead of on the first mistake)
- [✅] Game button appearance change goes beyond color (e.g. add an image)
- [✅] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
0:00 - 0:30 out of 2:15
https://cdn.glitch.com/13310440-a18e-434f-9802-5cdebd35e650%2Fezgif-3-e7f2d5678c8c.gif?v=1616550047895
0:30 - 1:00 out of 2:15
https://cdn.glitch.com/13310440-a18e-434f-9802-5cdebd35e650%2Fezgif-3-0403cfe4392a.gif?v=1616550224264
1:00 - 1:30 out of 2:15
https://cdn.glitch.com/13310440-a18e-434f-9802-5cdebd35e650%2Fezgif-3-cd0037145f48.gif?v=1616550318454
1:30 - 2:00 out of 2:15
https://cdn.glitch.com/13310440-a18e-434f-9802-5cdebd35e650%2Fezgif-3-8fd8b318773f.gif?v=1616550415316
2:00 - 2:15 out of 2:15
https://cdn.glitch.com/13310440-a18e-434f-9802-5cdebd35e650%2Fezgif-3-dc1bc985b8b9.gif?v=1616550473916

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

For this project, I used the courses.codepath.org website, as well as basic online research such as google searches,
which led me to websites like stackoverflow, and youtube tutorials.
One interesting search was on the frequencies of music notes,
which allowed me to recreate the NBC chime for the sound of my first three buttons.
Being new to JavaScript, HTML, and CSS,
I took extensive, handwritten notes on the references and steps needed to complete the project.
This is how I allocated a lot of the time I spent on the project,
and gave me a sense of familiarity with each language.
I take handwritten notes on new concepts because it helps me recall information,
and it gives me two sources to simultaneously pull information from, and make connections.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

Understanding the guess function was a challenge for me. My initial idea on building the function was to create an array that the user would add to,
and compare that array with the pattern array. I realized that this wouldn't be efficient since each guess would have to be checked as soon as it was made,
which meant comparing the two arrays would take many lines of code.
I ended up checking my work with the guess(btn) function provided in the tutorial, and I still felt confused on how the variables were being utilized within the function.
In order to overcome this challenge, I looked at the code from the user perspective, and "connected the dots" from the onclick attributes in HTML, to the functions in Javascript.
When analyzing the guess(btn) function, I didn't completely understand how the function utilized the guessCounter and progress variables within its scope.
In order to better understand the actions carried out by the function, I went through each step of the function and recreated the notes.
By using terms that referenced the variables used in the function, such as "progressed", "guess", and "sequence",
I was able to better understand how the variables were utilized in the scope of the function, and add additional features.
In conclusion, to learn Javascript for the first time, and build an interactive function that utilizes variables with incrementing values within it,
was certainly a new challenge for me. Learning how a function can manipulate and reuse variables in Javascript was a fun experience,
and I'm glad to have gone through the time it took to fully process and understand how it can be done.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

I'm interested in the dynamics of data structures within web development.
More specifically, how to take data, and visualize it for the user.
I ask this because I've recently taken on a project that would organize public opinion,
as well as streamline the communication of public opinion to government officials. This project began before I had written in my initial application,
so I'd like to mention how it's definitely something I'd be using my experiences from this internship for.
I have questions about building a website as well, specifically in regards to connecting it to a server.
I also want to better understand how APIs work.
Another topic of interest for me is how to implement great design with CSS.
I've always found creative websites with an interactive design approach to how they display their content so captivating,
and I would love to learn more about how to implement motion of assets into the design of a website.
My final question would be where can I learn more? This project has been a truly eye-opening experience,
and I feel that there's so much I could do with this kind of information.
Overall, I'd like to thank codePath for inspiring to learn more.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

If I could work on this project for a few more hours, I would make the pattern array have infinite indices. And when you lose,
I would have the loseGame() alert function tell you the progress (number of indices) you've completed on the infinite pattern array.
Additionally, I would create more articulate notes to better explain the purposes of each function. While working on the guess(btn)
function, I found that adding notes that articulated each current and possible event in my game, The Sound of Memory,
resulted in much clearer, and more readable code.
I would also use the time to complete the final optional task of allowing a limited amount of time for the user to enter each guess.
When I initially attempted this, I was able to implement a time limit for the user to make the first guess within the scope of the startGame() function.
But when I tried to use the similar instructions within the guess(btn) and playClueSequence() functions,
it only seemed to be creating bugs in my code. I feel that if I was to restart the project with this new rule of the game in mind,
I could code a working timer.

## License

    Copyright Devin Minnihan

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

Cory Paringer, 51

[Function Sketch](https://github.com/corypari/120-work/tree/master/hw-7)

This week I decided to create an original function sketch because I figured diving in would be a better way to understand it. That, and I initially ran into hours worth of problems by trying to nest my mousePressed or mouseMoved functions. I could not seem to get my ball from the previous sketch that bouces to continually update when I converted it to a function- and I also could not get it to decrease in size or color when clicked / moved. I instead created completely new functions that would essentially act as the body for various letters. I could then assign a common X variable in them to be able to control the placement of the dots / letters more accurately. I bound the functions to be drawn within another function, then called for the outside function in draw- this allowed my letters to all be drawn from one function expression. I could then also even more fine tune its position by updating it's translate position.

Each function recieved its own version of the fill(random()), so that each letter would be a different color, but each dot within the letters would be the same random value.

I am currently struggling most with remembering when to and when not to declare variables outside of the setup for new functions. I also am confused as how to get my mousePressed to still work when a function is drawn in the draw section.

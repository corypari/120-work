Cory Paringer, 51

[Live Sketch Link](https://github.com/corypari/120-work/tree/master/hw-7)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing


Why is it working the way it is?

The operation declares various variables that will represent the x and y coordinates of an ellipse that is drawn continuously. It creates a variable through ball.x and ball.y that continually adds itself plus the ball.delta x or y * ball.scale_x or y. This means that it will continually decrease or increase by ball.delta_x * ball.scale_x or y. Two if statements make it so that the ball.x and y variables from earlier are either -1 or +1 * scale_x or y depending on whether the ball crosses the boundaries of the window. This both makes it so the ball will start the animation by decreasing by 1 in the X and Y axis as well as makes it do the opposite when it touches the edge of the window. It then appears to bounce.
The ball.scale_x and y are then remapped to a value between 0.5 and 10 depending on where the mouse is placed when it clicks. This executes only once since it is a function of mousePressed(). After clicking, the ball will increase or decrease in slope and intensity of how far it moves depending on the mouse.

What does each line do?

Line 3 declares a variable object ball. Line 4-10 declare object variables for x and y values, scale, and 'delta' which will be called upon later to draw an ellipse- and also will be updated with an if or statement. Line 12 sets up the function allowing 13 through 15 to create a canvas that is 400xWindowwidth and a white background. Line 19 declares our draw loop. In line 21 and 22 ball.x and ball.y are redefined as the delta variables, meaning our X and Y values for our ellipse later will continually be added to it's if statement * the ball.scale_x or y (1). This makes it continually decrease or increase by 1 depending on the lines below. Lines 25 through 29 set up two if statements that make it so if our X or Y values (ball.x and ball.y) exceed the documents width or height, it will execute a redefinition of the X or Y value (whichever exceeds first) that multiplies itself times -1 to invert the value. This sends it backwards and keeps it within the window- bouncing. Line 32-34 draws the ellipse and places ball.x, ball.y, ball.width as the values to make it continually draw and call upon the new X and Y values. Lines 35-38 create a mousePressed() function that will make the ball.scalex and y be multiplied by the mouseX and mouseY position, mapped to a value of 0.5 to 10. This makes the ball appear to steepen or ease in slope.

How can you make the ball change direction?

I think to change the direction of the ball so is drawn and first bounces to the left from the right would be to change the ball.x value to be -= ball.delta_x * ball*scale_x. This would have the value decrease from its start instead of increase.




## How did you alter the sketch?


First I confirmed my theory that the ball would change direction by changing ball.x by making it be ball.x -= ball.delta_x*ball.scale_x instead of +. After changing the direction of the ball I moved it to start from 1, 1. Next I changed the intensity of the movement by increasing the X and Y variables to 5. I added a noStroke(); to the circles and also made it so that they decreased in size initially. I made an if statement that made it so when the ball grew larger than 1/4 the window size it would modulo and reset to a value of 2. This allowed for some cool animations, when combined with clicking the mouse. I then made the mouse click also change the color fill randomly, and also the opacity and the speed. The ball also now grows with the movement of my mouse.

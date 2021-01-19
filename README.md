# Analog-Digital-clock

Create the face of the clock using SVG file.
Create the three arms of clock
calculate the time and degrees needed 
use the getdate() function to get the exact date and time

1. Divide the clock face into the correct number of sections. Because the second arm splits the clock face into 60 components.
   There are 60 seconds in one minute, so it takes 60 steps to go around the circle. 
2. That means we have to take 360 degrees, divide it by 60, and then add up how many seconds, or how many segments, we want to move. 
3. The same goes for the minute hand. There are 60 minutes in an hour, and for the hour hand, we divide the clock face up into 12, 
    because there are 12 hours on the clock face. 
4. What I know right now is the number of seconds in the current minutes. So sec. Then I'd need to take the 60 seconds that could be on the clock,
    and divide those by 360 degrees so we get how many degrees are covered by one second, and then we time those degrees by second. So we say if there 
    are five seconds, we have five segments. That means multiply by 360 over 60. We can test this right away by simply saving, and you should see here, 
    right now the second is 31 and this arm is positioned at the 31st second. If I reload the browser, arm has moved 43 seconds, here's at 45 seconds, 
    and you can see it's in the correct position.
5. Next up, minutes. Now here we have to do two things.grab the minute element, that's the current number of minutes in an hour. Then multiply by 360,
    divided by 60. This gives us the minute position. So right now, it's the 54th minute, so it's at 54 minutes. However, I want this clock to be super fancy. 
    Meaning, this arm, the minute arm, moves along with the second arm. So for every full minute, this arm should incrementally move the length of one minute 
   up here. So we don't get some weird, kind of popping action between the minutes. That means we need to take the current minute degrees and add to them the
   number of seconds that are added to the clock, but instead of just dividing it by 60, which is the complete clock face, I have to divide this one piece here
   into 60 increments. So I say, sec multiplied by 360 degrees divided by 60. And then, divide all of that by 60 because I want just this little component over 
   here. Save that and the arm should move so we get the correct position again, and here we get 55 minutes and 40 seconds. So if it was just 55 minutes, the arm 
   would be on this mark over here. But because we have 55 minutes plus 40 seconds, so not a full extra minute, the minute arm has moved a little bit over. Finally,
   we have the hour position. So here we grab the hour, multiply it by 360, divided by 12, because we're dividing the clock face into 12 segments for the hour. 
   And save. 
6. Now, my hour hand is placed at the ninth hour. However the time right now is 9:56, so technically this hour hand, just like the minute hand, 
   should move up based on what the minutes currently are. So again we'll take the hour position, and add to it the position of the minute hand this time. So then 
   min times 360 over 60, so that gives us the relative minute position, and then we divide that information by 12 so that we only get this little segment here, 
   and we divide that little segment into 60 components. Save one more time. And now the hour hand is almost at the 10 o'clock mark but not quite, because we're 
   still at 57 minutes, meaning the minute arm still has a little ways to go, and that means the hour hand also has a little ways to go before it gets all the way
   to 10.

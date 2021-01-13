# Corona-screensaver

A covid-19 animated screensaver that will brighten up any website!

You can use it by adding the css link and the JS script link to your website.
That easy..!

After you add it, if the user won't move the mouse for 90 sec - the screen will start to be filled with coronavirus animated cartoons (till he moves the mouse again).  

# Changing interval
You can change the screensaver activation time by using the setTime() function, and setting the amount of time in seconds.
By default the activation time is set to 90 seconds.

# Example:

In the \<head> tag on your website add the css link:  
```
<link rel="stylesheet" href="coronaScreen.css" />
```
Also add the JS script: 
```
<script src="coronaScreen.js"></script>
```
  
In case you want to change the activation time, you need to add the setTime() function in the bottom of the \<body> and send a time parameter (50 sec for example): 
```
<body>
 ///your things..
  
  <script>
      setTime(50);
  </script>
</body>
```
#### DEMO: https://yossimal95.github.io/corona-screensaver.yossimal95.github.io/ (wait 10 seconds after page load..).
![alt text](https://github.com/yossimal95/corona-screensaver/blob/main/coronaScreensaver.png?raw=true)

### Credit: the coronavirus cartoons are based on:
https://medium.com/cssclass-com/learning-how-to-create-css-creatures-8318d85d8924

# Data Visualization D3: Why our flights get cancelled?
### HalehDolati

## Project Overview

For this project, I used the U.S. Department of Transportation's (DOT) data to show the causes of flight cancelation.  The data is provided for different years but I chose the most recent one, the 2008 data. I focused only on cancelled flights although the data has information on delayed flights as well.

## Summary

In flight cancellations, regardless of the airline or the airport, we mostly hear and blame the weather.  My questions are:
* Is weather responsible for most flight cancellations? 
	* The results show weather in fact is the main reason for cancellations
* What about the other causes?
	* Carrier cancellations are the next causes of cancellation followed by national air system. Security reasons were responsible for a very few cancellations.  

*Is the causes of cancellations different based on airlines and airports? 
** It is different for different airports or airlines. But it looks both of them are mostly affected by weather and carrier compared to other two causes.

### Design

First Draft:  I started with a map, which represents the geographic distribution of the airports with the number of cancelled flights. I chose the map because it communicates well with viewers who are not familiar with the airport names. However, for the ones who like to see what actually cause the cancelation, I provided the stacked bar to first show different causes for each airport and second to make it easier for viewers to see the difference. However, for the final draft I limited the airports to the 25 with the highest number of cancelations to make it easier for viewer to get the information. Finally, the bubble chart shows the number of cancelled flight based on 4 reasons for each airline. The size and color of the bubbles along with the tooltip makes it easier for the audiences to et the message of the chart. 

## Feedback on the First Draft

### First Feedback, from a colleague:
* The sizes of circles on the map are too big and they cover each other. I would suggest making the circles smaller and adding transparency to them.
* For the bar chart, since there're many airports to show, the chart get quite crowded, and also it's not clear to judge by color how many cancellations there are.  
* For the bubble chart, I would say add a label to the circles that shows which airline they belong to. Also add a legend to it so we can get a message even before reading the tooltip. 

### Second Feedback, from a friend:
* The first page map is a good idea. Bu it is too crowded, doesn’t tell us a good story. 
* On the second chart, please consider limiting the number of airports. It is so crowded and the color pallet is not helping
* A little bit of text that explains or gives an overall idea would be nice. 

## Changes:
Based on the feedbacks for the map, I decided to change the size and the color to show the cancelation for airports.  This way the effect of geography on cancellation became clearer.
The next change that I made was for the bar chart. Both reviewers suggested using a different color pallet and limiting the number of airport showing. 
One reviewer suggested to add more narrative to support the story.  This recommendation was a very good one since initially I just had a couple of sentences at the beginning. 
Finally, adding more details to the bubble chart made it more understandable. 
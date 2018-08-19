# Prototype
There will be 2 main sections:

A Google Maps map loaded with the Google Maps API

A list of restaurants on the right side of the page that are within the area displayed on the map

The Google Maps map will focus immediately on the position of the user. You'll use the JavaScript geolocation API. A specific color marker should be shown at the user's current location.
Show restaurants on the map based on their GPS coordinates. Restaurants that are currently visible on the map should be displayed in list form on the side of the map as mentioned above. You will see the average reviews of each restaurant (ranging from 1 to 5 stars). These ratings come from your JSON file (not real reviews).
A user can:

1.Add a review about an existing restaurant

2.Add a restaurant by clicking on a specific place on the map

Once a review or restaurant has been added, it should appear immediately on the map. A new marker will show the position of the new restaurant.

The information will not be saved if they leave the page (it will just be saved in memory for the duration of the visit).

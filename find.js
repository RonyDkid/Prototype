var restUl = document.getElementById("restUl");
var map = new google.maps.Map(document.getElementById("autoMap"));

function initMap() {
  navigator.geolocation.getCurrentPosition(
    function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var pyrmont = pos;
      map = new google.maps.Map(document.getElementById("autoMap"), {
        center: pyrmont,
        zoom: 15
      });

      infowindow = new google.maps.InfoWindow();
      var service = new google.maps.places.PlacesService(map);
      // GET DETAILS /////////////////////////////////////////////////////////////

      // NERBY SEARCH ////////////////////////////////////////////////////////////
      service.nearbySearch(
        {
          location: pyrmont,
          radius: 1500,
          type: ["restaurant"]
        },
        callback,
        selfDefined
      );
    },
    function() {
      handleLocationError(true, infoWindow, map.getCenter());
    }
  );
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
      defPlace(results[i]);
      var place = results[i].place_id;
      var placeID = { placeId: place };
      console.log(place);
      var rename = new google.maps.places.PlacesService(map);
      rename.getDetails(placeID, function(place, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          console.log(place.reviews);
        }
      });
    }
  }
}

function selfDefined(results, status) {
  console.log(status);
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      console.log(results[i]);
    }
  }
}

function createMarker(place) {
  var listItem = document.createElement("li");
  var star = document.createElement("i");
  var value = document.createElement("p");
  value.className = "float-right mr-2";
  value.innerText = place.rating;
  star.className = "fas fa-star float-right";
  listItem.className = "list-group-item";
  listItem.innerText = place.name + " ";
  for (var i = 0; i < place.rating; i++) {
    listItem.appendChild(star);
  }
  listItem.appendChild(value);
  restUl.appendChild(listItem);

  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, "click", function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

function defPlace(place) {
  // SET THE DROPDOWN LIST INSTEAD OF UL'S AND LI'S
}

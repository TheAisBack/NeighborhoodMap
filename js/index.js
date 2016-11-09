//Main function of the website.
$.ajax({
    url: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDGRHrAy1xjAmI2r31H7MohFOpW8zUB9Yg&libraries=geometry&v=3&callback=initMap',
    dataType: 'script',
    timeout: 1000, 
    success: function () {
        console.log('Please wait map is loading.');
    },
    error: function(burgerStatus){
        alert('Request Status: ' + burgerStatus.status + ' Status Text: ' + burgerStatus.statusText + ' ' + burgerStatus.responseText);
    }
});
$("#menu-toggle").click(function(e) {
	e.preventDefault();
	$("#wrapper").toggleClass("toggled");
});
$("body").click(function(e) {
	e.preventDefault();
    $("wrapper").removeClass("toggled");
});
$('.menu-ui a').on('click', function() {
	var filter = $(this).data('filter');
	$(this).addClass('active').siblings().removeClass('active');
	markers.setFilter(function(f) {
		return (filter === 'all') ? true : f.properties[filter] === true;
	});
	return false;
});
var map, infoWindow;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 49.8998, lng: -97.1375},
		zoom: 11,
		styles: styles,
		mapTypeControl: false
	});
	infowindow = new google.maps.InfoWindow();
	ko.applyBindings(new ViewModel());
}
var ViewModel = function() {
	
	var client_id = '543FJUN43UC44OHCLW2RCGQZOIRBZCHF3JET5UJZSIM5CYH0';
	var client_secret = 'MZXDLWK1PA4H2UIVJLAP4YGIX1I5VLWKJNWBYMKOY0J04IGL';
	var self = this; // useful for knockout for subfunctions or closures.
	var defaultIcon = 'img/Hamburger.png';
	self.mapList = [];

	//setting the mapList
	locations.forEach(function(marker) {
		self.mapList.push(new google.maps.Marker({
				position: {lat: marker.lat, lng: marker.lng},
				street: marker.street,
				city: marker.city,
				url: marker.url,
				fourSquareId: marker.fourSquareId,
				map: map,
				name: marker.title,
				icon: defaultIcon,
				show: ko.observable(marker.show),
				selected: ko.observable(marker.selected),
				animation: google.maps.Animation.DROP
			})
		)}
	);
	self.mapListLength = self.mapList.length;
	self.burgermap = self.mapList[0];
	//Makes the icon jump and down
	self.toggleBounce = function(marker) {
		marker.setAnimation(google.maps.Animation.BOUNCE);
    	setTimeout(function() { 
    		marker.setAnimation(null); 
    	}, 750);
	}
	//Letting all the product to be shown
	self.show = function(showburger) {
		for (var i = 0; i < self.mapListLength; i++) {
			self.mapList[i].show(showburger);
			self.mapList[i].setVisible(showburger);
		}
	};
	//set all mapList items to unselected
	self.unselect = function() {
		for (var i = 0; i < self.mapListLength; i++) {
			self.mapList[i].selected(false);
		}
	}
	//getting the application to run.
	self.foursquare = function(burgerMarker){
			$.ajax({
	            url: 'https://api.foursquare.com/v2/venues/' + burgerMarker.fourSquareId + '?client_id=' + client_id + '&client_secret=' + client_secret + '&v=20151110',
	            dataType: 'json',
	            success: function (data) {
	                var result = data.response.venue;
	                burgerMarker.rating = result.hasOwnProperty('rating') ? result.rating : '';
	            },
	            error: function(e) {
	            	alert('No Data Available');
	            }//, 100);

	            /*
	            error: function (e) {
	            	alert('No Data Available');
	            }*/
        });
	};
	var rating = function() {
        	if (self.burgermap.rating === '' || self.burgermap.rating === undefined) {
        		return 'No rating';
        	} else {
        		return self.burgermap.rating;
        	}
    }
	for (var i = 0; i < self.mapListLength; i++) {
		(function(burgerMarker){
			self.foursquare(burgerMarker);
			burgerMarker.addListener('click', function(){
				self.setSelected(burgerMarker);
			});
		})(self.mapList[i])
	}
	self.filterText = ko.observable('');

	//Checking the marker that is selected, when you click on the marker.
	self.info = function() {
		if ((self.burgermap.show() === false) && (self.burgermap.selected() === true)) {
			infowindow.close();
		} else {
			infowindow.open(map, self.burgermap);
		}
	}	
	//filtering out all the ones you don't want.
	self.filter = function() {
		var currentFilter = self.filterText();
		if (currentFilter.length === 0) {
			self.show(true);
		} else {
			for (var i = 0; i < self.mapListLength; i++) {
				if (currentFilter.slice(0, currentFilter.length).toLowerCase() === self.mapList[i].name.slice(0, currentFilter.length).toLowerCase()) {
					self.mapList[i].show(true);
					self.mapList[i].setVisible(true);
				} else {
					self.mapList[i].show(false);
					self.mapList[i].setVisible(false);
				}
			}
		}
		self.info();
	};
	//shows the user of infowindow
	self.setSelected = function(location) {
        self.unselect();
        location.selected(true);
		self.burgermap = location;
        var burgerwindow = 
        '<h4 id="infowind">' + self.burgermap.name + '</h4>' 
        + '<div id="infowind"> FourSquare Rating ' + rating() + '</div>'
        + '<div id="infowind">' + self.burgermap.street + '</div>' 
        + '<div id="infowind">' + self.burgermap.city + '</div>' 
        + '<div id="infowind"><a href=' + self.burgermap.url + '>' 
        + self.burgermap.url + '</div>'
		infowindow.setContent(burgerwindow);
        infowindow.open(map, location);
        self.toggleBounce(location);
	};
}

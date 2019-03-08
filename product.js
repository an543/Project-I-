(function () {
// An array of Objects, similar to database records we will eventually be dealing with.
	var mockDatabase = [
		{ name: 'Cone Hat', type: 'Traditional', Continent: 'Asia', Source: 'images/Asia_hat/Asian_conehat.jpg', Price: 16.99 },
		{ name: 'Organic Hats', type: 'Luxury', Continent: 'Asia', Source: 'images/Asia_hat/Organic_Raffia_Straw Panama Hats.jpg', Price: 25.99 },
		{ name: 'Chinese K-Hat', type: 'Traditional', Continent: 'Asia', Source: 'images/Asia_hat/Traditional_Chinese_knithats.jpg', Price: 19.99 },
		{ name: 'Couture Hat', type: 'Luxury', Continent: 'Europe', Source: 'images/Europe_hat/Couture_hat.jpg', Price: 18.99 },
		{ name: 'Magic Hat',  type: 'Luxury', Continent: 'Europe', Source: 'images/Europe_hat/MagicWool_hat.jpg', Price: 28.99 },
		{ name: 'Tradi Hat',  type: 'Traditional', Continent: 'Europe', Source: 'images/Europe_hat/Traditional_hat.jpg', Price: 21.99 },
		{ name: 'Football Hat', type: 'Sporty', Continent: 'North America', Source: 'images/NorthAmerica_hat/football_hat.jpg', Price: 23.99 },
		{ name: 'Leather Hat', type: 'Luxury', Continent: 'North America', Source: 'images/NorthAmerica_hat/Mesh Leather Hat.jpg', Price: 32.99 },
		{ name: 'Straw Hat', type: 'Luxury', Continent: 'North America', Source: 'images/NorthAmerica_hat/Straw_hat.png', Price: 28.99 },
	];
	
	
	function renderList (results) {
		var body1 = document.querySelector('#content-product-replace');
		var body2 = document.getElementById("content-product").style.display = "none";
		
		// clear out inner HTML to get rid of any older results
		body1.innerHTML = '';
		var images = results.map(function (result) {
			return '<div class="hat"><img src="'+result.Source+'" alt=""><figcaption>'+result.name+' $'+result.Price.toString()+'</figcaption>';
		});
		
		images.forEach(function (image) {
			body1.innerHTML += image;
		});
		
		var foo = 'renderList';
		console.log(images);
	}
	
	function filtContinent (showContinent) {
		
		var filteredResults = mockDatabase.filter(function (result) {
			if (showContinent === '*') {
				return mockDatabase;
			}
			
			return result.Continent === showContinent;
		});
		
		renderList(filteredResults);
	}

	function filtType(showType) {
		var filteredResults = mockDatabase.filter(function (result) {
			if (showType === '*') {
				return mockDatabase;
			}
			
			return result.type === showType;
		});
		
		renderList(filteredResults);
	}
	
	function sortBy (sval) { 
		var sortedResults = (sval === 'title') ?
			mockDatabase.sort(function (a, b) { // Strings need to be sorted in a slightly more compldex way
				var nameA = a.name.toLowerCase(); // ignore upper and lowercase
				var nameB = b.name.toLowerCase(); // ignore upper and lowercase
				// Sorts alphabetically.  -1 puts it before. 1 puts it after
				if (nameA < nameB) {
				    return -1;
				}
				if (nameA > nameB) {
				    return 1;
				}
			}) :
			mockDatabase.sort(function (a, b) {
				return a.Price - b.Price;
			});
		renderList(sortedResults);
	}
	
	document.querySelector('#sortby').addEventListener('change', function(event){
		// Event is the JavaScript event that transpired, in our change a CHANGE event.
		// Target is the element it was performed on, useful for when the event targets 
		// multiple elements.
		// Value has the name implies is the current value of the input element, if there is one
		sortBy(event.target.value);
	});
	
	document.querySelector('#Types').addEventListener('change', function(event){ 
		var val = event.target.value;
		
		filtType(val);
	});
	
	document.querySelector('#Continents').addEventListener('change', function(event){ 
		var val = event.target.value;
		
		filtContinent(val);
	});

})(); // Wrap entire file in self executing function. 
      // Keeping all variables declared in this file inside a local scope.
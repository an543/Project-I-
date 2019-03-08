	var images = [];		//image array
	var mstime = 1000;		//time in millisecond
	var i = 0;				//starting index

	//store image urls in an array of strings
	images[0] = "images/Asia_hat/Asian_conehat.jpg"
	images[1] = "images/Europe_hat/Couture_hat.jpg";
	images[2] = "images/NorthAmerica_hat/Mesh Leather Hat.jpg";
	

	// Change Image
	function whatever(){
		//set src to image url stored in image array
		document.hatSlides.src = images[i];

		// Check If index is less than image array size minus 1
		if(i < images.length - 1){
			// Add 1 to Index
			i++; 
		} else { 
			// Reset Back To O
			i = 0;
		}

		// Run function every mstime seconds
		setTimeout("whatever()", mstime);
	}
	
	// Run function when page loads
	window.onload=whatever;

/*function whatever() {*/
	var images = [];
	var mstime = 1000;
	var i = 0;

	images[0] = "images/Asia_hat/Asian_conehat.jpg"
	images[1] = "images/Europe_hat/Couture_hat.jpg";
	images[2] = "images/NorthAmerica_hat/Mesh Leather Hat.jpg";
	

	// Change Image
	function whatever(){
		document.active.src = images[i];

		// Check If Index Is Under Max
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

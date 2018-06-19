
//Get user input
var imgSearch = document.getElementById("search");

//Get items that will be searched through
var imgDataTitle = document.querySelectorAll("a[data-caption]");


//Function that takes user input and filters out each image that is related
imgSearch.addEventListener("keyup", function(filtering){

	let filtered = imgSearch.value.toUpperCase();

	for (var i = 0; i < imgDataTitle.length; i++){

		var title = imgDataTitle[i].getAttribute("data-caption");

		if (title.toUpperCase().includes(filtered)) {
			imgDataTitle[i].style.display = "inline";
		} else {
			imgDataTitle[i].style.display = "none";
		}
	}
});

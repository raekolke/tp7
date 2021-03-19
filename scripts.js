window.onload = function() {
  document.getElementById('title').style.fontSize = '65px'
}

titleClick = document.querySelector("#titleBanner h1");
titleClick.onclick = function() {
  titleClick.classList.toggle("clicked");
}

listClick1 = document.querySelector("div#ingredients");
listClick1.onclick = function() {
  listClick1.classList.toggle("ingredientsClicked");
}

listClick2 = document.querySelector("div#equipment");
listClick2.onclick = function() {
  listClick2.classList.toggle("equipmentClicked");
}

listClick3 = document.querySelector("div#directions");
listClick3.onclick = function() {
  listClick3.classList.toggle("directionsClicked");
}

x = document.getElementById("enjoy");
x.innerHTML = "Enjoy!";
x.style.fontSize = '40px';
x.style.fontFamily = 'Noto Sans JP';
x.style.textAlign = 'center';

// generic AJAX function to load fromFile into object with ID whereTo
function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// prepares code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
		
			if ((this.readyState == 4) && (this.status == 200)) {
				document.getElementById(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
				
			}
		
	} // end ajax.onreadystatechange

	// now that everything is set, initiate request
	ajax.send();

}

// object constructor for recipe
function Recipe(recipeName, imageURL, contributorName, ingredientsFilename, equipmentFilename, directionsFilename) {
  this.name = recipeName;
  this.imgsrc = imageURL;
  this.contributor = contributorName;
  this.ingFile = ingredientsFilename;
  this.equipFile = equipmentFilename;
  this.dirFile = directionsFilename;
  
  // update screen with objects information
  this.displayRecipe = function() {
    document.querySelector("#titleBanner h1").innerHTML = this.name;
    document.querySelector("#titleBanner h2").innerHTML = "Contributed by: " + this.contributor;
    document.querySelector("#picture").style.backgroundImage = "url(" + this.imgsrc + ")";
    loadFileInto(this.ingFile, "ingredients");
    loadFileInto(this.equipFile, "equipment");
    loadFileInto(this.dirFile, "directions");
  }
}

SpicedTofu = new Recipe(
  "Breaded, Fried, Softly Spiced Tofu",
  "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Rae Kolke",
  "ingredients.html",
  "equipment.html",
  "directions.html"
);







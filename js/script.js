var moviesData = JSON.parse(movies);

//creating cards with movies
for (var i in moviesData) {
	$("#row").append(`
			<div class="col-lg-5 col-md-5 col-xs-12 bg-black d-flex flex-column 
			flex-lg-row p-2 mb-4 ">
					<img class="border border-light rounded mx-auto mb-sm-2 poster"src="${moviesData[i].img}" alt="">
					<div class="px-2 filmInfo">
						<p class="h4 text-center text-lg-left">${moviesData[i].title}</p>
						<p>${moviesData[i].description}</p>
						<span class="float-right"><button onclick="circleWrite(${i})" id="likey${i}" class="text-success">Like <i class="fa fa-thumbs-up"></i></button><input id="circly${i}" type="text" class="ball" value="10"></span>
						
					</div>
			</div>
		`);

}

$('#row > div:nth-child(even)').addClass("offset-lg-2 offset-md-2");

//editing the circly input with pressing the button
function circleWrite(x) {
	var currentLikesNumber = $('#circly' + x).val();
		var newLikesNumber = String(Number(currentLikesNumber) + 1);
		$('#circly' + x).val(newLikesNumber);
}

//sorting the most popular

//1)creating movie js objects

function CardConstructor (title, description, img, likes){
	this.title = title;
	this.description = description;
	this.img = img;
	this.likes = likes;
}

$('#sort').click(function(){
	var ObjectsArray = [];
	
	for (let i = 0; i<6; i++) {

		let Likes = Number($('#circly' + i).val());
		let MovieCard = new CardConstructor(moviesData[i].title, moviesData[i].description, moviesData[i].img, Likes);
		//	creating array of objects
		ObjectsArray.push(MovieCard);
	}

//2)sorting the objects via likes number
// ---------------------------------------------------------------------------------		
	ObjectsArray.sort((a,b,c,d,e,f) => (a.likes > b.likes) ? 1 : -1).reverse();
	console.log(ObjectsArray);
// 									/\	
// 									||
// 	This piece of code is my question. I`ve pasted it from 
//  https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
//  altering the part I understand and everything works. Now I`m curious why.
//  More precisely I do not understand, why he is keeping comparing other arguments
//  too without stopping just on the first two.
//  Could you help me, please?
// ------------------------------------------------------------------------------------		

//3) cleaning the .row-div
	$("#row > div").remove();

//4)inserting the div-cards with movie info from sorted Object-Array
	for (var i in ObjectsArray){
			
		$("#row").append(`
				<div class="col-lg-5 col-md-5 col-xs-12 bg-black d-flex flex-column 
			flex-lg-row p-2 mb-4 ">
					<img class="border border-light rounded mx-auto mb-sm-2 poster"src="${ObjectsArray[i].img}" alt="">
					<div class="px-2 filmInfo">
						<p class="h4 text-center text-lg-left">${ObjectsArray[i].title}</p>
							<p>${ObjectsArray[i].description}</p>
							<span class="float-right"><button onclick="circleWrite(${i})" id="likey${i}" class="text-success">Like <i class="fa fa-thumbs-up"></i></button><input id="circly${i}" type="text" class="ball" value="${ObjectsArray[i].likes}"></span>
							
						</div>
				</div>
			`);

		$('#row > div:nth-child(even)').addClass("offset-lg-2 offset-md-2");
	}
		
});


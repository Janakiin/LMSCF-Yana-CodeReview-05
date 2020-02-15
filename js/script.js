var moviesData = JSON.parse(movies);

for (var i in moviesData) {
	$("#row").append(`
			<div class="col-lg-5 col-md-5 col-xs-12 bg-black d-flex p-2 mb-4 ">
					<img class="border border-light rounded" width=30% src="${moviesData[i].img}" alt="">
					<div class="px-2 filmInfo">
						<p class="h4">${moviesData[i].title}</p>
						<p>${moviesData[i].description}</p>
						<button onclick="circleWrite(${i})" id="likey${i}" class="float-right"><span class="green">Like <span><i class="fa fa-thumbs-up"></i><input id="circly${i}"class="ball" value="10"></button></span>
						
					</div>
			</div>
		`);

}

$('#row > div:nth-child(even)').addClass("offset-lg-2");

function circleWrite(x) {
	var currentLikesNumber = $('#circly' + x).val();
		var newLikesNumber = String(Number(currentLikesNumber) + 1);
		$('#circly' + x).val(newLikesNumber);
		console.log(newLikesNumber);
		console.log(typeof newLikesNumber);
		console.log(currentLikesNumber);
}

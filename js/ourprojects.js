$(".image1").click(function(){
	setModalInfo(".imagenp1","Fotografia: 1");
})
$(".image2").click(function(){
	setModalInfo(".imagenp2","Fotografia: 2");
})
$(".image3").click(function(){
	setModalInfo(".imagenp3","Fotografia: 3");
})
$(".image4").click(function(){
	setModalInfo(".imagenp4","Fotografia: 4");
})
$(".image5").click(function(){
	setModalInfo(".imagenp5","Fotografia: 5");
})
$(".image6").click(function(){
	setModalInfo(".imagenp6","Fotografia: 6");
})

var setModalInfo = function(image,text)
{
	var img = $(image).css('background-image');
	img = img.replace('url(','').replace(')','').replace(/\"/gi, "");   
	$(".image-modal-proyectos").attr("src", img);
	$(".text-modal").text(text);
}
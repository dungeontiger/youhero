
function initRotateImage()
{
	switchImage();
}

function switchImage()
{
	var images = [
		"http://farm6.staticflickr.com/5010/5352563855_ddc9e1e403.jpg",
		"http://farm6.staticflickr.com/5126/5353173092_3ca8173833.jpg",
		"http://farm6.staticflickr.com/5247/5310143345_b045d1a3ed.jpg",
		"http://farm5.staticflickr.com/4075/4905250439_4233ea517b.jpg",
		"http://farm5.staticflickr.com/4134/4905250209_8300847104.jpg",
		"http://farm5.staticflickr.com/4095/4905249883_f4d25a6abb.jpg",
		"http://farm6.staticflickr.com/5141/5732058874_d7c9429e3a.jpg",
		"http://farm4.staticflickr.com/3562/5732070070_da0fa95ab2.jpg",
		"http://farm8.staticflickr.com/7032/6758094503_f091b01c10.jpg"
		];
	var mainImage = document.getElementById("mainImage");
	var img = mainImage.style.backgroundImage;
	while (mainImage.style.backgroundImage == img)
	{
		var index = Math.floor(Math.random() * images.length);
		img = "url(" + images[index] + ")";
	}
	mainImage.style.backgroundImage = img;
	setTimeout(function() {switchImage()}, 2000);
}

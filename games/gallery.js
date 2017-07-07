// Set these to the images
var imgtop = protocol + "//lorempixel.com/640/480/cats/"
var img1 = imgtop + 1,
    img2 = imgtop + 2, 
    img3 = imgtop + 3,
    img4 = imgtop + 4;

// Initially set images
function loaded() {
    document.getElementById('currentimg').src = imgtop + 1;
    document.getElementById('img1').src = img1;
    document.getElementById('img2').src = img2;
    document.getElementById('img3').src = img3;
    document.getElementById('img4').src = img4;
}

// Set current image on click
function setimg(imgno) {
    document.getElementById('currentimg').src = imgtop + imgno;
}
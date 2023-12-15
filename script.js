//your JS code here. If required.

var landscapeImage = "https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg";
var portraitImage = "https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg";


window.addEventListener("resize", changeBackgroundImage);

changeBackgroundImage()

function changeBackgroundImage() {
    if (window.innerHeight > window.innerWidth) {
       
        document.body.style.backgroundImage = "url('" + portraitImage + "')";
    } else {
       
        document.body.style.backgroundImage = "url('" + landscapeImage + "')";
    }
}


// Get Current Year
$(document).ready(
    function getCurrentYear() {
        var d = new Date();
        var year = d.getFullYear();
        document.querySelector("#displayDateYear").innerText = year;
    }
)

//client section owl carousel

$(document).ready(function(){
        $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: [
            '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
            '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
        ],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })
})

/** google_map js **/
window.onload = myMap

async function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(50.495530, 13.031320),
        zoom: 18,
    };
    await new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

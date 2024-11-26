
let slide = document.querySelectorAll(".slide")
let index = 0

function img(index){
        for(let i=0; i<slide.length; i++){
            slide[i].style.display = "none"
        }
        slide[index].style.display = "block"
    }


function show(){
    setInterval(() => {
        img(index)
        index++

        if(index === slide.length){
            index = 0
        }
    },2000)
}
show()


//slick slider

$(".slick-slider").slick({
    slidesToShow: 4,
    infinite:true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
});
 
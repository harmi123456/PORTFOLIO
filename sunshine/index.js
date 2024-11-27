$(document).ready(function() {

    var counters = $(".b3");
    var countersQuantity = counters.length;
    var counter = [];
  
    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, 80);
    }
  
    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }
  });

$(document).ready(function(){
    $(".c9").mouseenter(function(){
        $(".c9").css("background-color","rgb(242, 195, 138)")
        $(".c9").css("color","white")
    })
    $(".c9").mouseleave(function(){
        $(".c9").css("background-color","whitesmoke")
        $(".c9").css("color","rgb(242, 195, 138)")
    })

    $(".c10").mouseenter(function(){
        $(".c10").css("background-color","rgb(242, 195, 138)")
        $(".c10").css("color","white")
    })
    $(".c10").mouseleave(function(){
        $(".c10").css("background-color","whitesmoke")
        $(".c10").css("color","rgb(242, 195, 138)")
    })

    $(".c11").mouseenter(function(){
        $(".c11").css("background-color","rgb(242, 195, 138)")
        $(".c11").css("color","white")
    })
    $(".c11").mouseleave(function(){
        $(".c11").css("background-color","whitesmoke")
        $(".c11").css("color","rgb(242, 195, 138)")
    })
})
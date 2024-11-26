$(document).ready(function(){
    $(document).ready(function() {

        var counters = $(".d3");
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
          }, 10);
        }
      
        for (j = 0; j < countersQuantity; j++) {
          count(0, counter[j], j);
        }
      });
  
      $(document).ready(function() {
  
        var counters = $(".d4");
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
          }, 10);
        }
      
        for (j = 0; j < countersQuantity; j++) {
          count(0, counter[j], j);
        }
      });
  
      $(document).ready(function() {
  
        var counters = $(".d5");
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
          }, 10);
        }
      
        for (j = 0; j < countersQuantity; j++) {
          count(0, counter[j], j);
        }
      });
  
      $(document).ready(function() {
  
        var counters = $(".d6");
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
          }, 10);
        }
      
        for (j = 0; j < countersQuantity; j++) {
          count(0, counter[j], j);
        }
      });

      $(window).scroll(function(){
        if($(document).scrollTop() > 50) {
            $("header").css("background-color","rgba(250, 235, 215, 0.7)")
        }  else{
            $("header").css("background-color","transparent")
        }
    });


    // icon

    const icons = document.querySelectorAll('.icon');
    icons.forEach (icon => {  
    icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});
})



$(document).ready(function(){
  $('.bars').click(function(){
      $(".bars1").toggle();
  })

  $('.bars').click(function(){
      $(".menu").toggle();
    })

  $(".i5").mouseenter(function(){
    $(".i5").css("background-color","bisque")
    $("#z").css("color","black")
  })
  $(".i5").mouseleave(function(){
    $(".i5").css("background-color","transparent")
    $("#z").css("color","antiquewhite")
  })

  $(".i6").mouseenter(function(){
    $(".i6").css("background-color","bisque")
    $("#z1").css("color","black")
  })
  $(".i6").mouseleave(function(){
    $(".i6").css("background-color","transparent")
    $("#z1").css("color","antiquewhite")
  })

  $(".i7").mouseenter(function(){
    $(".i7").css("background-color","bisque")
    $("#z2").css("color","black")
  })
  $(".i7").mouseleave(function(){
    $(".i7").css("background-color","transparent")
    $("#z2").css("color","antiquewhite")
  })

  $(".i8").mouseenter(function(){
    $(".i8").css("background-color","bisque")
    $("#z3").css("color","black")
  })
  $(".i8").mouseleave(function(){
    $(".i8").css("background-color","transparent")
    $("#z3").css("color","antiquewhite")
  })
})
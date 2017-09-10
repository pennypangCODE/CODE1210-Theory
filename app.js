console.log('loaded');
// STUDENT CLICK EVENT
$( function() {
    $( "#slider" ).slider();
  } );


$("#students").click(function() {
    console.log('clicked');
    let a = $('.f1').css('fill');
    let color =  (a === 'rgb(182, 229, 158)') ? '#CD5C5C' : '#B6E59E';
    console.log(a);
    $('.f1').css({"fill":  color});
    console.log(a);
  });

$("#fountain").click(function() {
    let a = $('.f2').css('fill');
    let color =  (a === 'rgb(117, 207, 240)') ? '#E0FFFF' : '#75CFF0';
    console.log(a);
    $('.f2').css({"fill":  color});
    console.log(a);
  });



  $("#family").click(function() {
    let a = $('.f3').css('fill');
    let color =  (a === 'rgb(182, 229, 158)') ? '#FFA07A' : '#B6E59E';
    console.log(a);
    $('.f3').css({"fill":  color});
    console.log(a);
  });


  $("#skate").click(function() {
    let a = $('.f4').css('fill');
     let color =  (a === 'rgb(182, 229, 158)') ? '#778899' : '#B6E59E';
    console.log(a);
    $('.f4').css({"fill":  color});
    console.log(a);
  });


  $("#wedding").click(function() {
    let a = $('.f5').css('fill');
     let color =  (a === 'rgb(182, 229, 158)') ? '#2E8B57' : '#B6E59E';
    console.log(a);
    $('.f5').css({"fill":  color});
    console.log(a);
  });


  $("#buskers").click(function() {
    let a = $('.f6').css('fill');
     let color =  (a === 'rgb(182, 229, 158)') ? '#4B0082' : '#B6E59E';
    console.log(a);
    $('.f6').css({"fill":  color});
    console.log(a);
  });


  $("#chess").click(function() {
    let a = $('.f7').css('fill');
     let color =  (a === 'rgb(182, 229, 158)') ? '#FFD700' : '#B6E59E';
    console.log(a);
    $('.f7').css({"fill":  color});
    console.log(a);
  });


  $("#dancing").click(function() {
    let a = $('.f8').css('fill');
    let color =  (a === 'rgb(182, 229, 158)') ? '#FF69B4' : '#B6E59E';
    console.log(a);
    $('.f8').css({"fill":  color});
    console.log(a);
  });


$("#homeless").click(function() {
    let a = $('.f9').css('fill');
     let color =  (a === 'rgb(182, 229, 158)') ? '#8FBC8F' : '#B6E59E';
    console.log(a);
    $('.f9').css({"fill":  color});
    console.log(a);
  });

  $("#tourist").click(function() {
    let a = $('.f10').css('fill');
     let color =  (a === 'rgb(182, 229, 158)') ? '#66CDAA' : '#B6E59E';
    console.log(a);
    $('.f10').css({"fill":  color});
    console.log(a);
  });

const slide = (e) => {
    console.log(e);
   let o = e/100;
    if( e > 90){
        $('#fountain').css({"opacity":  1});

    }if(e > 80){
            $('#skate').css({"opacity":  1});
             $('#family').css({"opacity":  1});
    }if(e > 70){
          $('#wedding').css({"opacity":  1});
    }if(e > 60){
          $('#buskers').css({"opacity":  1});
    }if(e > 50){
          $('#chess').css({"opacity":  1});
    }if(e > 40){
          $('#dancing').css({"opacity":  1});
    }if(e > 30){
          $('#tourist').css({"opacity":  1});
    }if(e > 20){
          $('#homeless').css({"opacity":  1});
    }if(e > 10){
          $('#students').css({"opacity":  1});
    }if(e > 4){
          $('.st1').css({"opacity":  1});
    }if(e < 4){
$('.st1').css({"opacity":  0});
$('#fountain').css({"opacity":  0});
$('#skate').css({"opacity":  0});
$('#family').css({"opacity":  0});
$('#wedding').css({"opacity":  0});
$('#buskers').css({"opacity":  0});
$('#chess').css({"opacity":  0});
$('#dancing').css({"opacity":  0});
$('#tourist').css({"opacity":  0});
$('#homeless').css({"opacity":  0});
$('#students').css({"opacity":  0});

    }

}

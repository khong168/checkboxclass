$(document).ready(function() {
  $("form#transportation_survey").submit(function(event) {
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
    });
    $("#fun-responses").show();
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#fun-responses').append(funTransportationMode + "<br>");
    });

  //   $("#fun-responses").show();
  //   $("input:checkbox[name=work-transportation]:checked").each(function(){
  //    var workTransportationMode = $(this).val();
  //    var capitalWorkTransportationMode = workTransportationMode.toUpperCase();
  //    $('#fun-responses').append(capitalWorkTransportationMode + "<br>");
  //  });
  // });
  //   $('transportation_survey').hide();
  //
  // });
    $('transportation_survey').hide();
  });
});

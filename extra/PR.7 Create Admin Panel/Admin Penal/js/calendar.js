
$(document).ready(function() {
  
    $(".date__number").click(function() {
      $(".date__number").removeClass("date__number--true");
      $(this).addClass("date__number--true");
    });
    
    
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1; // Monate beginnen bei 0, daher +1
    var day = date.getDate();
    
    $(".yer").each(function() {
      if ( Number($(this).text()) === (year) ) {
        $(this).prop("selected", true);
      }
    });
    
    $(".mon").each(function() {
      if ( $(this).attr("name") === String(month) ) {
        $(this).prop("selected", true);
      }
    });
    
    $(".date__number").each(function() {
      if ( Number($(this).text()) === day ) { // Number verwandelt den Text in eine Zahl --> Computer kann 123 als Zahl erkennen, aber 123 als Text nicht
        $(this).addClass("date__number--true");
      }
    });
    
    
    $(".choosen").text(day + '.' + month + '.' + year);
    
    
    $(".date").click(function() {
      
      day = $(".date__number--true").text();
      month = $(".month option:selected").attr("name");
      year = $(".year option:selected").text();
      
      $(".choosen").text(day + '.' + month + '.' + year);
      
    });
    
  
  });
  
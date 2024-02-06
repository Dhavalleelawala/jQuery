var options = {
  series: [{
  name: 'USA',
  data: [15, 55, 57, 56, 61, 58, 63]
}, {
  name: 'UK',
  data: [8, 85, 101, 98, 87, 105, 91]
}, {
  name: 'AU',
  data: [10, 41, 36, 26, 45, 48, 52]
}],
  chart: {
  type: 'bar',
  height: 350
},
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '55%',
    endingShape: 'rounded'
  },
},
dataLabels: {
  enabled: false
},
stroke: {
  show: true,
  width: 2,
  colors: ['transparent']
},
xaxis: {
  categories: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
},
yaxis: {
  title: {
    text: '$ (thousands)'
  }
},
fill: {
  opacity: 1
},
tooltip: {
  y: {
    formatter: function (val) {
      return "$ " + val + " thousands"
    }
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();

var options = {
  series: [{
  name: 'series1',
  data: [31, 40, 28, 51, 42, 109, 100]
}, {
  name: 'series2',
  data: [11, 32, 45, 32, 34, 52, 41]
}],
  chart: {
  height: 350,
  type: 'area'
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
xaxis: {
  type: 'datetime',
  categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
},
tooltip: {
  x: {
    format: 'dd/MM/yy HH:mm'
  },
},
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();

// calendar

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
  
  
  //$(".choosen").text(day + '.' + month + '.' + year);
  
  
  $(".date").click(function() {
    
    day = $(".date__number--true").text();
    month = $(".month option:selected").attr("name");
    year = $(".year option:selected").text();
    
    $(".choosen").text(day + '.' + month + '.' + year);
    
  });
  

});

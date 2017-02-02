var sec = 1000; // 1sec
var min = sec * 60 // 1min

setTimeout(function(){
   window.location.reload(3);
}, min);

var highchartsOptions = Highcharts.setOptions(Highcharts.theme = {
   colors: ['#058DC7', '#eaab1d']
});

//Make it to Market
Highcharts.setOptions({
  chart: {
    defaultSeriesType: 'column',
    backgroundColor: '#fff',
    shadow: true
  }
});

//IMRS
$.get('csv/imrsguidedaily.csv', function(csv) {
    $('#container5').highcharts({
        chart: {
            type: 'column',
              backgroundColor: '#fff',
              borderColor: '#4572A7',  
              borderWidth: 5,
              shadow: true
        },
        data: {
            csv: csv
        },
        title: {
        text: 'IMRS Guide - Daily'
        },
        yAxis: {
            title: {
                text: ''
            }
        }
    });
});

//$('#container5').highcharts({
//    data: {
//        googleSpreadsheetKey: '1ubSNv8pexZVXnJHSW8QEF-z_8MjVJe7ci3wA-1mrZvk',
//        googleSpreadsheetWorksheet: 1
//    },
//    title: {
//      text: 'IMRS Guide - Daily'
//    },
//   chart: {
//    defaultSeriesType: 'column',
//    backgroundColor: '#fff',
//    borderColor: '#000099',  
//     borderWidth: 5,
//    shadow: true
//  },
//    yAxis: {
//      min: 0.0,
//      title: {
//        text: 'Visitors'
//      }
//    }
//});

$.get('csv/imrsguide.csv', function(csv) {
    $('#container6').highcharts({
        chart: {
            type: 'column',
              backgroundColor: '#fff',
              borderColor: '#4572A7',  
              borderWidth: 5,
              shadow: true
        },
        data: {
            csv: csv
        },
        title: {
            text: 'IMRS Guide - Total'
        },
        yAxis: {
            title: {
                text: ''
            }
        }
    });
});


//$('#container6').highcharts({
//    data: {
//        googleSpreadsheetKey: '1ubSNv8pexZVXnJHSW8QEF-z_8MjVJe7ci3wA-1mrZvk',
//        googleSpreadsheetWorksheet: 2
//    },
//    title: {
//      text: 'IMRS Guide - Total'
//    },
//  chart: {
//    defaultSeriesType: 'column',
//    backgroundColor: '#fff',
//    borderColor: '#000099',  
//     borderWidth: 5,
//    shadow: true
//  },
//    yAxis: {
//      min: 0.0,
//      title: {
//       text: 'Visitors'
//      }
//    }
//});


$("#container5").click(function() {
    window.location = "index.html";
});

$("#container6").click(function() {
    window.location = "index.html";
});


//1MgXE7bjr6PDDRubxmizGOl-PfYA6clbYsEGcEjoS0r8
//1pVgUoNfuj__EL2HfNOAPFTm0UM9_wbzuGaE2PvUUMTw
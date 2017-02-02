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

//By Design

$.get('csv/exportdiagnosticdaily.csv', function(csv) {
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
            text: 'Export Diagnostic - Total'
        },
        yAxis: {
            title: {
                text: 'Got Report'
            }
        }
    });
});
//$('#container5').highcharts({
//    data: {
//        googleSpreadsheetKey: '1x4bdzgkfcbKFDCaDCF-lnZTrqu8pSvBYWzA9gtWld7c',
//        googleSpreadsheetWorksheet: 1
//    },
//    title: {
//      text: 'Export Diagnostic - Daily'
//    },
//   chart: {
//    defaultSeriesType: 'spline',
//    backgroundColor: '#fff',
//    borderColor: '#ff3366',  
//    borderWidth: 5,
//    shadow: true
//  },
//    yAxis: {
//      min: 0.0,
//      title: {
//        text: 'Visits & Completions'
//      }
//    }
//});

$.get('csv/exportdiagnostic.csv', function(csv) {
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
            text: 'Export Diagnostic - Total'
        },
        yAxis: {
            title: {
                text: 'Got Report'
            }
        }
    });
});
//$('#container6').highcharts({
//    data: {
//        googleSpreadsheetKey: '1x4bdzgkfcbKFDCaDCF-lnZTrqu8pSvBYWzA9gtWld7c',
//        googleSpreadsheetWorksheet: 2
//    },
//    title: {
//      text: 'Export Diagnostic - Total'
//    },
//  chart: {
//    defaultSeriesType: 'spline',
//    backgroundColor: '#fff',
//    borderColor: '#ff3366',  
//     borderWidth: 5,
//    shadow: true,
//     
//  },
//  plotOptions: {
//         area: {
//           lineWidth: 2,
//           marker: {
//                    enabled: false
//                            },
//           visible: true
//         }
//        },
//    yAxis: {
//      min: 0.0,
//      title: {
//        text: 'Visits & Completions'
//      }
//    }
//}); 


$("#container5").click(function(){
         window.location = "index.html";    
});

$("#container6").click(function(){
         window.location = "index.html";    
});

//1MgXE7bjr6PDDRubxmizGOl-PfYA6clbYsEGcEjoS0r8
//1pVgUoNfuj__EL2HfNOAPFTm0UM9_wbzuGaE2PvUUMTw
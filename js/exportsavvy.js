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

//Export Savvy registrations
$.get('csv/exportsavvy.csv', function(csv) {
    $('#container5').highcharts({
        chart: {
            type: 'column',
            backgroundColor: '#fff',
            borderColor: '#660099',  
            borderWidth: 5,
            shadow: true
        },
        data: {
            csv: csv
        },
        title: {
            text: 'Export Savvy - User Registrations'
        },
        xAxis: {
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 10,
            y: 10,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
          plotBands: [{ // visualize the Scottish Export Savvy Period
            from: Date.UTC(2016, 06, 28),
            to: Date.UTC(2016, 11, 15),
            color: 'rgba(0, 170, 0, .3)',
            label: {
                        text: '<em>Scotland: </em> July onwards',
                        style: {
                            color: '#000066'
                        },
                    }
},{ // visualize the Scottish Export Savvy Period
            from: Date.UTC(2015, 10, 20),
            to: Date.UTC(2016, 06, 27),
            color: 'rgba(65, 65, 65, .3)',
            label: {
                        text: '<em>Exporting is Great campaign: </em> Scottish Area',
                        style: {
                            color: '#000066'
                        },
                    }
}]
            },
        yAxis: {
            title: {
                text: 'User Regsitrations'
            }
        }
    });
});

//$('#container5').highcharts({
//    data: {
//        googleSpreadsheetKey: '1MgXE7bjr6PDDRubxmizGOl-PfYA6clbYsEGcEjoS0r8',
//        googleSpreadsheetWorksheet: 1
//    },
//    title: {
//      text: 'MITM - Daily'
//    },
//   chart: {
//    defaultSeriesType: 'column',
//    backgroundColor: '#fff',
//    borderColor: '#009933',  
//     borderWidth: 5,
//    shadow: true
//  },
//    yAxis: {
//      min: 0.0,
//      title: {
//        text: 'Visits & Completions'
//      }
//    }
//});

$.get('csv/exportsavvymodules.csv', function(csv) {
    $('#container6').highcharts({
        chart: {
        type: 'areaspline',
            backgroundColor: '#fff',
            borderColor: '#660099',  
            borderWidth: 5,
            shadow: true
        },
        data: {
            csv: csv
        },
        title: {
        text: 'Export Savvy - Module Usage'
    },
    xAxis: {
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        plotBands: [{ // visualize the Scottish Export Savvy Period
            from: Date.UTC(2016, 06, 28),
            to: Date.UTC(2016, 11, 15),
            color: 'rgba(0, 170, 0, .3)',
            label: {
                        text: '<em>Scotland: </em> July onwards',
                        style: {
                            color: '#000066'
                        },
                    }
},{ // visualize the Scottish Export Savvy Period
            from: Date.UTC(2015, 10, 20),
            to: Date.UTC(2016, 06, 27),
            color: 'rgba(65, 65, 65, .3)',
            label: {
                        text: '<em>Exporting is Great campaign: </em> Scottish Area',
                        style: {
                            color: '#000066'
                        },
                    }
}]
        },
        yAxis: {
            max: 50,
            title: {
                text: 'Module - Starts & Completions'
            }
        }
    });
});

//$('#container6').highcharts({
//    data: {
//        googleSpreadsheetKey: '1MgXE7bjr6PDDRubxmizGOl-PfYA6clbYsEGcEjoS0r8',
//        googleSpreadsheetWorksheet: 2
//    },
//    title: {
//      text: 'MITM - Total'
//    },
//  chart: {
//    defaultSeriesType: 'column',
//    backgroundColor: '#fff',
//    borderColor: '#009933',  
//     borderWidth: 5,
//    shadow: true
//  },
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
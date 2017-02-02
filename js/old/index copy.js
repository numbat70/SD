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

//1----IMRS


$('#container1').highcharts({
    data: {
        googleSpreadsheetKey: '1pVgUoNfuj__EL2HfNOAPFTm0UM9_wbzuGaE2PvUUMTw',
        googleSpreadsheetWorksheet: 2
    },
    title: {
      text: 'IMRS - Total'
    },
  chart: {
    defaultSeriesType: 'column',
    backgroundColor: '#fff',
    borderColor: '#4572A7',  
     borderWidth: 5,
    shadow: true
  },
    yAxis: {
      min: 0.0,
      title: {
        text: 'Visits & Completions'
      }
    }
}); 


//2----IMRS Guide


$('#container2').highcharts({
    data: {
        googleSpreadsheetKey: '1ubSNv8pexZVXnJHSW8QEF-z_8MjVJe7ci3wA-1mrZvk',
        googleSpreadsheetWorksheet: 2
    },
    title: {
      text: 'IMRS - Total'
    },
  chart: {
    defaultSeriesType: 'column',
    backgroundColor: '#fff',
    borderColor: '#000099',  
     borderWidth: 5,
    shadow: true
  },
    yAxis: {
      min: 0.0,
      title: {
        text: 'Visits & Completions'
      }
    }
}); 


//Export Diag

$('#container3').highcharts({
    data: {
        googleSpreadsheetKey: '1x4bdzgkfcbKFDCaDCF-lnZTrqu8pSvBYWzA9gtWld7c',
        googleSpreadsheetWorksheet: 2
    },
    title: {
      text: 'Export Diagnostic - Total'
    },
  chart: {
    defaultSeriesType: 'spline',
    backgroundColor: '#fff',
    borderColor: '#ff3366',  
     borderWidth: 5,
    shadow: true,
     
  },
  plotOptions: {
         area: {
           lineWidth: 2,
           marker: {
                    enabled: false
                            },
           visible: true
         }
        },
    yAxis: {
      min: 0.0,
      title: {
        text: 'Visits & Completions'
      }
    }
}); 


//4--By Design
$('#container4').highcharts({
    data: {
        googleSpreadsheetKey: '1MgXE7bjr6PDDRubxmizGOl-PfYA6clbYsEGcEjoS0r8',
        googleSpreadsheetWorksheet: 4
    },
    title: {
      text: 'By Design Prequals - Total'
    },
       chart: {
    defaultSeriesType: 'column',
    backgroundColor: '#fff',
    borderColor: '#990000',  
     borderWidth: 5,
    shadow: true
  },
    yAxis: {
      min: 1.5,
      title: {
        text: 'Prequals'
      }
    }
});


//5--MiTM
$('#container5').highcharts({
    data: {
        googleSpreadsheetKey: '1MgXE7bjr6PDDRubxmizGOl-PfYA6clbYsEGcEjoS0r8',
        googleSpreadsheetWorksheet: 2
    },
    title: {
      text: 'MiTM Prequals - Total'
    },
     chart: {
    defaultSeriesType: 'column',
    backgroundColor: '#fff',
    borderColor: '#009933',  
     borderWidth: 5,
    shadow: true
  },
    yAxis: {
      min: 1.5,
      title: {
        text: 'Prequals'
      }
    }
});


//1--IMRS
$("#container1").click(function(){window.location = "imrs/index.html";  });

//2--IMRS Guide
$("#container2").click(function(){window.location = "imrsguide/index.html";  });


//3--exportdiagnostic
$("#container3").click(function(){window.location = "exportdiagnostic/index.html";  });


//4--bydesign
$("#container4").click(function(){window.location = "bydesign/index.html";  });

//5--MITM
$("#container5").click(function(){window.location = "mitm/index.html";  });


//1MgXE7bjr6PDDRubxmizGOl-PfYA6clbYsEGcEjoS0r8
//1pVgUoNfuj__EL2HfNOAPFTm0UM9_wbzuGaE2PvUUMTw
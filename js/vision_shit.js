$(function() {
    $('#container').highcharts({

 
        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy'
        },

        legend: {
            enabled: false
        },

        title: {
            text: 'Export Ideas : Value/Effort'
        },

        subtitle: {
            text: 'Size of bubble indicates urgency'
        },

        xAxis: {
            gridLineWidth: 1,
            title: {
                text: 'SE effort to develop'
            },
            labels: {
                format: '{value}'
            },
            plotLines: [{
                color: 'black',
                dashStyle: 'dot',
                width: 2,
                value: 65,
                label: {
                    rotation: 0,
                    y: 20,
                    style: {
                        fontStyle: 'italic'
                    },
                    text: 'Maximum effort to activate idea'
                },
                zIndex: 3
                    }]
            },

            yAxis: {
                startOnTick: false,
                endOnTick: false,
                title: {
                    text: 'Customer Value'
                },
                labels: {
                    format: '{value}'
                },
                maxPadding: 0.2,
                plotLines: [{
                    color: 'black',
                    dashStyle: 'dot',
                    width: 2,
                    value: 50,
                    label: {
                        align: 'right',
                        style: {
                            fontStyle: 'italic'
                        },
                        text: 'Minimum customer value to activate idea',
                        x: -10
                    },
                    zIndex: 3
}]
                },

                tooltip: {
                    useHTML: true,
                    headerFormat: '<table>',
                    pointFormat: '<tr><th colspan="2"><h3>{point.idea}</h3></th></tr>' +
                                 '<tr><th>Effort:</th><td>{point.x}</td></tr>' +
                                 '<tr><th>Value:</th><td>{point.y}</td></tr>' +
                                 '<tr><th>Urgency:</th><td>{point.z}%</td></tr>',
                    footerFormat: '</table>',
                    followPointer: true
                },

                plotOptions: {
                    series: {
                        dataLabels: {
                            enabled: true,
                            format: '{point.name}'
                        }
                    }
                },

                series: [{
                                                data: [
                                                    //x=effort
                });
            });





            $("#container").click(function() {
                window.location = "index.html";
            });
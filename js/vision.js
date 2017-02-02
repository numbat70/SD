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
            text: 'Size of bubble indicates our urgency'
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
                    }],
            
             plotBands: [{ // visualize the weekend
                            from: 65,
                            to: 110,
                             color: 'rgba(0, 124, 224, 0.2)'
                        }]
                    
            },

            yAxis: {
                             plotBands: [{ // visualize the weekend
                            from: 0,
                            to: 50,
                            color: 'rgba(0, 124, 224, 0.2)'
                        }],
                
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
                                 '<tr><th>Urgency (us):</th><td>{point.z}%</td></tr>',
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
                                                    //y=value
                                                    //z=priority
                                                    { x: 5, y: 100, z: 10, name: 'yes', idea: 'tbc' },
                                                    { x: 60, y: 35, z: 100, name: 'Exporter Index', idea: 'Pan Scotland Index showing your Exporter readiness and Activity' },
                                                    { x: 30, y: 45, z: 50, name: 'White Label Export Services', idea: 'Export services are white labelled so that they can be delivered through any brand, channel or website' },
                                                    { x: 60, y: 60, z: 90, name: 'No wrong Door', idea: 'Where ever you land, we will signpost you to where you need to go' },
                                                    { x: 20, y: 80, z: 40, name: 'Customer Stages', idea: 'We will show you available support that is relevant to your exporting stage' },
                                                    { x: 70, y: 90, z: 40, name: 'Customer Tailored', idea: 'Support will be specifically tailred to your needs' },
                                                    { x: 50, y: 30, z: 40, name: 'Measurement', idea: 'Measure stuff and develop insights for continual improvement' },
                                                    { x: 80, y: 80, z: 40, name: 'Now wrong door: Plus', idea: 'No wrong door but more pro-active in highlighting stuff that is relevant to you from across Scotland' },
                                                    { x: 50, y: 90, z: 90, name: 'Fast Track EU', idea: 'Get your Fast Track access to support, tools, info and advice on EU' },
                                                    { x: 80, y: 100, z: 40, name: 'Fast Track', idea: 'Get your Fast Track access to support, tools, info and advice on any urgent requests' },
                                                    { x: 100, y: 90, z: 40, name: 'Whitelabel Plus', idea: 'Co-Create export services with customers and partners to provide white label services' },
                                                    { x: 70, y: 40, z: 50, name: 'My Support', idea: 'Show me what support you have given me' },
                                                    { x: 100, y: 60, z: 40, name: 'My Suport Global', idea: 'Show me what support everyone in Scotland has given me' },
                                                    { x: 30, y: 70, z: 40, name: 'SE Refresh - Language', idea: 'Clean up the language to make it easier for customers to understand and find' },
                                                    { x: 50, y: 45, z: 40, name: 'Gradual Engagement', idea: 'Ask as little info as possible at each stage. Only ask for info once.' },
                                                    { x: 70, y: 70, z: 40, name: 'Export Academy', idea: 'Work with partners to develop customer export skills ' },
                                                    { x: 90, y: 90, z: 20, name: 'Export Incubator', idea: 'Work with partners to enhance digital capability and digital presence of Scottish Companies' },
                                                    { x: 40, y: 100, z: 40, name: 'Networking', idea: 'Identify, provide awareness, access and introductions to all relevant networks'},
                                                    { x: 105, y: 10, z: 10, name: 'noo', idea: 'tbc' }
                                                ]
                        }],
              

                });
            });





            //$("#container").click(function() {
            //    window.location = "index.html";
            //});
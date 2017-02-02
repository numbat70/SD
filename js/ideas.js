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
                    y: 0,
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
                            { x: 90, y: 10, z: 15, name: 'Benefits summary', idea: 'Benefits summary of what having an export plan can do for you and what it enables us to do for you.' },
                            { x: 70, y: 50, z: 20, name: 'Live Chat', idea: 'Live Chat on service pages' },
                            { x: 75, y: 60, z: 20, name: 'Adviser Bookings', idea: 'Export Adviser suregry booking system' },
                            { x: 75, y: 80, z: 20, name: 'Interactive Maps', idea: 'Interactive Maps (Guides, contacts, stats, offices, guides etc...)' },
                            { x: 60, y: 40, z: 20, name: 'Opportunity Matching', idea: 'Opportunity Matching (Enterprise Europe, Business Opportunities Website)' },
                            { x: 75, y: 40, z: 20, name: 'Online trade stats', idea: 'Online access to trade stats. ' },
                            { x: 60, y: 90, z: 50, name: 'Adviser Created Plans', idea: 'Advisers create draft plans and invite customers to take them on as their own' },
                            { x: 50, y: 25, z: 20, name: 'Adviser groups', idea: 'Add adviser provider group to "Adviser" dropdown in SSA' },
                            { x: 50, y: 40, z: 20, name: 'Responsive Content', idea: 'Respond to "reactive Export Triggers"' },
                            { x: 45, y: 55, z: 20, name: 'Standardise Engagement Forms', idea: 'Standardise all  customer engagement forms' },
                            { x: 35, y: 60, z: 20, name: 'Trade Toolkits', idea: 'Trade toolkits for customer facing staff' },
                            { x: 60, y: 55, z: 20, name: 'CRM Integration', idea: 'Form integration with CRM Dynamics' },
                            { x: 20, y: 60, z: 30, name: 'Simplify Service Pages', idea: 'Simplify Service Pages (Fewer Options)' },
                            { x: 10, y: 70, z: 25, name: 'Elearning cross-selling', idea: 'Service promotion & Marketing from within Export Savvy' },
                            { x: 30, y: 75, z: 35, name: 'No Wrong Door', idea: 'Meta Diagnsotic?' },
                            { x: 40, y: 90, z: 50, name: 'Service Bundling', idea: 'Links to relevant support tools' },
                            { x: 90, y: 90, z: 50, name: 'Brexit Support', idea: 'Support for Brexit related issues' },
                            { x: 5, y: 90, z: 20, name: 'Export Guide', idea: 'Quick export help guide. 10 Steps to start exporting etc...' }
                        ]
                }]

                });
            });





            //$("#container").click(function() {
            //    window.location = "index.html";
            //});
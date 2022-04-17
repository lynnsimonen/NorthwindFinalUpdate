
//chart.js - ReportTwo: 
$(function () {
    // $('#reportOne').remove();
    // $('#chart_container').append('<canvas id="reportOne"></canvas>');
    const ctx2 = document.getElementById('reportTwo');
    reportTwo = new Chart(ctx2, {
        // let reportOne = document.getElementById('reportOne').getContext('2d');
        // let NewChart = new Chart(reportOne, {
        type: 'line',
        data: {
            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
            ],

            datasets: [{
                label: 'Products?',
                backgroundColor: ['gray'],
                borderColor: 'black',
                borderWidth: 1,
                hoverBorderWidth: 3,
                hoverBorderColor: 'black',
                data: [55, 2, 25, 35, 55, 70, 1],
                title: {display: true},
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Report Two Title = Category',
                    font: {
                        size: 25
                    },
                    padding: {
                        top: 30,
                        bottom: 30
                    }
                },
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        font: {
                            size: 15
                        },
                        padding: 50
                    },
                    position: 'bottom',
                    fontColor: 'black',
                    label: 'Products???',
                },

            }

        }
    })
});


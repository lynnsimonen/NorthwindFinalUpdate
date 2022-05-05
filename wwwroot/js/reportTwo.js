
$(function () {
    var reportTwoLabels = [];
    var reportTwoRevenue = [];

    getGraph()

    function getGraph() {
        var id = $('#reportTwo').data('id');
        $.getJSON(
            {

                url: '../../api/category/' + id + '/orderdetail',
                success: function (response, textStatus, jqXhr) {
                    reportTwoLabels.length = [];
                    reportTwoRevenue = [];

                    console.log(id);
                    for (var i = 0; i < response.length; i++) {
                        reportTwoLabels.push(response[i].productName);
                    }

                    for (var i = 0; i < response.length; i++) {
                        reportTwoRevenue.push(response[i].revenue.toFixed(2));
                    }

                    // for (var i = 0; i < response.length; i++) {

                    //     const dollars = new Intl.NumberFormat('en-US', {
                    //         style: 'currency',
                    //         currency: 'USD',
                    //         minimumFractionDigits: 2,
                    //     }).format(response[i].revenue);

                    //     reportTwoRevenue.push(dollars);
                    // }

                    generateChartTwo();
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    // log the error to the console
                    console.log("The following error occured: " + textStatus, errorThrown);
                }
            });
    }

    $('#CategoryId').on('change', function () {
        Chart.getChart("reportTwo").destroy();
        $('#reportTwo').data('id', $(this).val());
        getGraph();
    });


    function generateChartTwo() {
        const ctx1 = document.getElementById('reportTwo');
        reportTwo = new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: reportTwoLabels,
                datasets: [{
                    label: 'Revenue',
                    data: reportTwoRevenue,
                    backgroundColor: 'green',
                    borderColor: 'black',
                    borderWidth: 1,
                    hoverBorderWidth: 3,
                    hoverBorderColor: 'black',

                }
                ]
            },
            options: {
                tooltips: {
                    callbacks: {
                        label: function (tooltipItem, data) {
                            tooltipItem = tooltipItem.toString();
                            tooltipItem = tooltipItem.split(/(?=(?:...)*$)/);
                            tooltipItem = tooltipItem.join(',');
                            return ('$' + tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                        }
                    },
                },
                scales: {
                    xAxes: {  
                        //categoryPercentage: .5,                      
                        barPercentage: 0.5,
                        title: {
                            display: true,
                            text: 'Products',
                            padding: 25,
                            font: {
                                size: 15
                            },
                        },
                        align: 'center',
                        color: 'black',
                    },
                    yAxes: {
                        ticks: {
                            beginAtZero: true,
                            callback: function (value, index, values) {
                                value = value.toString();
                                value = value.split(/(?=(?:...)*$)/);
                                value = value.join(',');
                                return '$' + value;
                            }
                        },
                        title: {
                            display: true,
                            text: 'Revenue',
                            padding: 25,
                            font: {
                                size: 15
                            },
                        },
                        align: 'center',
                        color: 'black',
                        padding: 15,
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Time Product Revenue',
                        font: {
                            size: 45
                        },
                        padding: {
                            top: 30,
                            bottom: 70
                        }
                    },
                    legend: {
                        display: true,
                        labels: {
                            fontColor: 'black',
                        }
                    },
                }
            }
        })
    }
});
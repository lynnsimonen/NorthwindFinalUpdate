$(function () {
    var reportOneLabels = [];
    var reportUnitsInStock = [];
    var reportReorderLevel = [];
    //var chosenCategory = $("div select").children("option:selected").val();
    //var chosenCategory = $("div select").children("option:selected").attr("selected", true).val();
    //var chosenCategory = $("div select").children("option:selected").data("id");
    //var chosenCategory = $(".btn btn-secondary btn-lg dropdown-toggle").data("id");
    //var url_product = '../../api/category/' + chosenCategory + '/product/discontinued/false';

    getGraph()

    function getGraph() {
        var id = $('#reportOne').data('id');
        $.getJSON(
        {
        
            url: '../../api/category/' + id + '/product/discontinued/false',
            success: function (response, textStatus, jqXhr) {
                reportOneLabels.length = [];
                reportUnitsInStock = [];
                reportReorderLevel = [];
                
                console.log(id);
                for (var i = 0; i < response.length; i++) {
                    reportOneLabels.push(response[i].productName);
                }
                //console.log(reportOneLabels);
                for (var i = 0; i < response.length; i++) {
                    reportUnitsInStock.push(response[i].unitsInStock);
                }
                for (var i = 0; i < response.length; i++) {
                    reportReorderLevel.push(response[i].reorderLevel);
                }

                generateChartOne();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // log the error to the console
                console.log("The following error occured: " + textStatus, errorThrown);
            }
        });
    }
    $('#CategoryId').on('change', function(){
        Chart.getChart("reportOne").destroy();
        $('#reportOne').data('id', $(this).val());
        getGraph();
    });
    

    function generateChartOne() {
        const ctx1 = document.getElementById('reportOne');
        reportOne = new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: reportOneLabels,
                datasets: [{
                    label: 'Current Stock',
                    data: reportUnitsInStock,
                    backgroundColor: 'transparent',
                    borderColor: 'black',
                    borderWidth: 1,
                    hoverBorderWidth: 3,
                    hoverBorderColor: 'black',
                    
                }, {
                    label: 'Reorder Level',
                    data: reportReorderLevel,
                    type: 'line',
                    backgroundColor: 'red',
                    borderColor: 'red',
                }
                ]
            },
            options: {
                scales: {
                    xAxes: {
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
                        title: {
                            display: true,
                            text: 'Quantity (units as packaged)',
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
                        text: 'Product Inventory',
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
                            fontColor:'black',
                        }
                    },
                }
            }
        })
    }
});

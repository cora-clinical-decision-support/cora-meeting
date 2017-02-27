window.onload = function () {
    var rectAndCircleTestData = [{
        label: "Dx", // row 1
        color: "#1f77b4",
        times: [{
            //"label": "STEMI",
            //"label": "1",
            "starting_time": 1328083200000, // 02/01/2012
            "display": "circle"
            }, {
            //"label": "HFrEF Dx",
            //"label": "2",
            "starting_time": 1330588800000, // 03/01/2012
            "display": "circle"
            }, {
            //"label": "NYHA ClassII",
            //"label": "3",
            "starting_time": 1338537600000, // 06/01/2012
            "display": "circle"
            }, {
            //"label": "CPT Upgrade",
            //"label": "4",
            "starting_time": 1417420800000, // 11/31/2014
            "display": "circle"
            }, {
            //"label": "Initiate PCS",
            //"label": "5",
            "starting_time": 1448956800000, // 11/31/2015
            "display": "circle"
                }, ]
        }, {
        label: "HF Adm",
        times: [{
            "starting_time": 1412150400000, // 10/01/2014
            "ending_time": 1413792000000 // 10/20/2014
            }, {
            "starting_time": 1422777600000, // 02/01/2015
            "ending_time": 1424419200000 // 02/20/2015
            }, {
            "starting_time": 1433145600000, // 06/01/2015
            "ending_time": 1434787200000 // 06/20/2015
            }, {
            "starting_time": 1464768000000, // 06/01/2016
            "ending_time": 1467360000000 // 07/01/2016
            }, {
            // "label": "Referred for MCS",
            "starting_time": 1487145600000, // 02/15/2017
            "ending_time": 1488268800000 // 02/28/2017
            }]

        }, ];


    var width = $('#svgcontainer').width();

    function timelineRectAndCircle() {
        var chart = d3.timeline()
            .stack() // toggles graph stacking
            .margin({
                left: 70,
                right: 30,
                top: 0,
                bottom: 0
            });

        var svg = d3.select("#timeline2_combine").append("svg").attr("width", width)
            .datum(rectAndCircleTestData).call(chart);
    }

    timelineRectAndCircle();
}

Highcharts.chart('charts', {
    chart: {
        type: 'bar'
    },  
    title: {
        text: null
    },
    xAxis: {
        categories: ['C', 'Java', 'Android', 'AngularJS/Angular', 'Ionic/Bootstrap/HTML/CSS', 'NumPy', 'matplotlib', 'NodeJS', 'jQuery/Javascript', 'Tensorflow', 'Git/JIRA/SVN/Jenkins', 'Android Studio/XCode', 'Gulp/PhoneGap', 'MySQL/mongoDB', 'Apache/Tomcat'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: null,
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: '%'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: false
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [ {
        name: 'Technology Stack',
        data: [90, 85, 80, 95, 80, 80, 90, 75, 95, 75, 95, 90, 95, 80, 75]
    }]
});

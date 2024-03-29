Highcharts.theme = {
  colors: ['#F0F0F0', '#C8C8C8', '#8C8C8C', '#787878', '#646464', '#505050'],
  chart: {
    backgroundColor: null,
    style: {
      fontFamily: '"Avenir", sans-serif, "PT Sans"'
    }
  },
  plotOptions: {
    series: {
      animation: false,
      stickyTracking: false
    }
  },
  credits: {
    enabled: false
  },
  exporting: {
    enabled: false
  },
  xAxis: {
    gridLineWidth: 0,
  },
  yAxis: {
    gridLineWidth: 0
  }
};

Highcharts.setOptions(Highcharts.theme);

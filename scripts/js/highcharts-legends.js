var setup = function(chart) {
  // console.log(chart);
  $legend = $('.legend');


  $.each(chart.series, function (j, series) {
    // console.log(series);

    var li = $('<li/>').text('Group '+(j+1)).appendTo($legend);
    var checkbox = $('<input data-index="'+j+'" type="checkbox" checked />').prependTo(li);

    // $legend.append()
      // $legend.append('<div class="item"><div class="symbol" style="background-color:'+data.color+'"></div><div class="serieName" id="">' + data.statement + '</div></div>');
  });

  $('.legend li input[type="checkbox"]').change(function () {
    $index = $(this).data('index');
    series = chart.series[$index];

    series.setVisible(!series.visible);
  });

  $('.legend li').click(function() {

  })
};

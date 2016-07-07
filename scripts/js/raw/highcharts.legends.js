var setup = function(chart) {
  setupGroups(chart);
  setupCategories(chart);
};

var setupGroups = function(chart) {
  $legend = $('.legend.group');

  $.each(chart.series, function (j, series) {
    var li = $('<li/>');
    var checkbox = $('<input id="group-'+j+'" data-index="'+j+'" type="checkbox" checked />').appendTo(li);
    var label = $('<label class="color-'+j+'" for="group-'+j+'"/>').text('Group '+(j+1)).appendTo(li);
    li.appendTo($legend);
  });

  $('.legend.group li input[type="checkbox"]').change(function () {
    $index = $(this).data('index');
    series = chart.series[$index];

    series.setVisible(!series.visible);
  });
};

var setupCategories = function(chart) {
  var categories = ['Community', 'Curriculum', 'Equity', 'Implementation', 'Research & Evaluation', 'Sustainability & Scale', 'Teacher Development'];
  $legend = $('.legend.category');

  $.each(categories, function(i, category) {
    var li = $('<li/>');
    var checkbox = $('<input id="category-'+i+'" data-index="'+i+'" type="checkbox" checked />').appendTo(li);
    var label = $('<label class="gray-'+i+'" for="category-'+i+'"/>').text(categories[i]).appendTo(li);
    li.appendTo($legend);
  });

  $('.legend.category li input[type="checkbox"]').change(function () {
    $index = $(this).data('index');
    var checked = this.checked;

    $.each(chart.series, function(j, series) {
      $.each(series.points, function(k, point) {
        if (point.csnyc_category == categories[$index]) {

          if ($('input[name=color-by]:checked').data('coloring') === 'category') {
            if (checked) {
              point.update({
                marker: {
                  radius: 20,
                  fillColor: colors[point.csnyc_category],
                  states: {
                    hover: {
                        fillColor: colors[point.csnyc_category]
                    }
                  }
                }
              });
            }
            else {
              point.update({
                marker: {
                  radius: 0,
                  fillColor: colors[point.csnyc_category],
                  states: {
                    hover: {
                        fillColor: colors[point.csnyc_category]
                    }
                  }
                }
              });
            }
          }
          else {
            if (checked) {
              point.update({marker: {radius: 20}});
            }
            else {
              point.update({marker: {radius: 0}});
            }
          }
        }
      });
    });
  });
}

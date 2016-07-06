var colors = {
  'Community': '#40A2DA',
  'Curriculum': '#33BEB7',
  'Equity': '#AFC222',
  'Implementation': '#FDCC2E',
  'Research & Evaluation': '#F7A126',
  'Sustainability & Scale': '#F56121',
  'Teacher Development': '#DB3937',
  'category1': '#EE6579',
  'category2': '#A363DA'
};

var groupColor = function(chart) {

  $('input[name=color-by]').change(function() {
    $('input[type="checkbox"]').each(function(i, checkbox) {
      $(checkbox).prop('checked', true);
    });

    if ($(this).data('coloring') === 'group') {
      $('.legend.category li label').each(function(i, item) {
        $(item).addClass('gray-'+i).removeClass('color-'+i);
      });

      $('.legend.group li label').each(function(i, item) {
        $(item).addClass('color-'+i).removeClass('gray-'+i);
      });

      $.each(chart.series, function(i, series) {
        $.each(series.points, function(j, point) {
          point.update({
            marker:{
              fillColor: series.color,
              states: {
                hover: {
                    fillColor: series.color
                }
              }
            }
          });
        });
      });
    }

    if ($(this).data('coloring') === 'category') {
      $('.legend.category li label').each(function(i, item) {
        $(item).removeClass('gray-'+i).addClass('color-'+i);
      });

      $('.legend.group li label').each(function(i, item) {
        $(item).removeClass('color-'+i).addClass('gray-'+i);
      });

      $.each(chart.series, function(i, series) {
        $.each(series.points, function(j, point) {
          point.update({
            marker:{
              fillColor: colors[point.csnyc_category],
              states: {
                hover: {
                    fillColor: colors[point.csnyc_category]
                }
              }
            }
          });
        });
      });
    }
  });
};

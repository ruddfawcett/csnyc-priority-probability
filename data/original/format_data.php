<?php

  function get_raw($path) {
    $csv = file($path);
    $data = [];

    $first = true;

    foreach ($csv as $line) {
      if ($first) {
        $first = false;
        continue;
      }

      $data[] = str_getcsv($line);
    }

    return $data;
  }

  // [0] => Priority
  // [1] => Possibility
  // [2] => Group Number
  // [3] => CSNYC Category
  // [4] => Statement
  // [5] => Attached Questions
  function format_data($data) {
    $pretty_data = [];

    $groups = [];

    // Sort data into groups and format each response
    foreach ($data as $response) {

      $x_jitter = $response[0] + mt_rand(-0.2, mt_getrandmax() - 0.2) / mt_getrandmax();
      $y_jitter = $response[1] + mt_rand(-0.4, mt_getrandmax() - 0.4) / mt_getrandmax();

      if ($x_jitter <= 1) {
        $x_jitter -= mt_rand(0, mt_getrandmax() - 0.3) / mt_getrandmax();
      }
      else if ($x_jitter >= 7.5) {
        $x_jitter -= mt_rand(0, mt_getrandmax() - 0.5) / mt_getrandmax();
      }
      else if ($y_jitter <= 0) {
        $y_jitter = 0 + mt_rand(0, mt_getrandmax() - 0.3) / mt_getrandmax();
      }
      else if ($y_jitter >= 7.5) {
        $y_jitter -= mt_rand(0, mt_getrandmax() - 0.5) / mt_getrandmax();
      }

      $pretty_response = [
        'x' => $x_jitter,
        'y' => $y_jitter,
        'priority' => $response[0],
        'possibility' => $response[1],
        'csnyc_category' => $response[3],
        'statement' => $response[4],
        'question' => $response[5]
      ];

      $groups[$response[2]][] = $pretty_response;
    }

    ksort($groups);

    // make groups prettier
    // https://github.com/voronianski/oceanic-next-color-scheme#color-palette
    $colors = ['#40A2DA', '#33BEB7','#AFC222','#FDCC2E', '#F7A126','#F56121', '#DB3937', '#EE6579', '#A363DA'];
    foreach ($groups as $group => $data) {
      $pretty_group = [
        'name' => 'Group '.$group,
        'color' => $colors[$group-1],
        'data' => $data
      ];

      $pretty_data[] = $pretty_group;
    }

    return $pretty_data;
  }

  $data = get_raw('collection.csv');
  $formatted = format_data($data);

  file_put_contents('output.json', json_encode($formatted, JSON_NUMERIC_CHECK));

?>

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
  // [3] => Statement
  // [4] => Attached Questions
  function format_data($data) {
    $pretty_data = [];

    $groups = [];

    // Sort data into groups and format each response
    foreach ($data as $response) {
      $x_jitter = $response[0] + mt_rand(-0.5, mt_getrandmax() - 0.7) / mt_getrandmax();
      $y_jitter = $response[1] + mt_rand(-0.5, mt_getrandmax() - 0.5) / mt_getrandmax();

      $pretty_response = [
        'x' => $x_jitter,
        'y' => $y_jitter,
        'priority' => $response[0],
        'possibility' => $response[1],
        'statement' => $response[3],
        'question' => $response[4]
      ];

      $groups[$response[2]][] = $pretty_response;
    }

    ksort($groups);

    // make groups prettier
    // https://github.com/voronianski/oceanic-next-color-scheme#color-palette
    $colors = ['#', '#EA0B8C','#f15056','#F79520', '#','#8EC640', '#', '#0E76BC', '#'];
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

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

    // [2] => Description
    // [3] => CSNYC Category
  function format_data($data) {
    $categories = [];

    // Sort data into groups and format each response
    foreach ($data as $response) {
      $categories[$response[3]][] = $response[2];
    }

    ksort($categories);

    return $categories;
  }

  $data = get_raw('brainstorm-data.csv');
  $formatted = format_data($data);

  file_put_contents('output.json', json_encode($formatted, JSON_NUMERIC_CHECK));

?>

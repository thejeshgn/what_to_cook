<?php
// Convert RSS feed to JSON, stripping out all but basic HTML
$output = file_get_contents('https://raw.githubusercontent.com/thejeshgn/what_to_cook/master/data/recipies.json');

//echo json_encode($output);
echo $output;
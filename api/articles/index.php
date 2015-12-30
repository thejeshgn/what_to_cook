<?php

function curl($url){
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL,$url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
    $return = curl_exec($ch);
    curl_close ($ch);
    return $return;
}

$output = curl('https://raw.githubusercontent.com/thejeshgn/what_to_cook/master/data/recipies.json'); 

//echo json_encode($output);
echo $output;
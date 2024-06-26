<?php
include 'common.php';

function to_float($text) { // If it looks like a number, cast it to float
    if (preg_match("~^-?[\d ,.]+$~", $text)) { // looks like a number?
        return (float) str_replace(" ", "", $text); // cast it to float
    }
    return $text;
}

function parse_csv($text) { // Convert CSV text to matrix
    $lines = preg_split('/\R+/', $text, 0, PREG_SPLIT_NO_EMPTY);
    $rows = [];
    foreach ($lines as $line) {
        $rows[] = array_map("to_float", str_getcsv($line));
    }
    return $rows;
}

function to_objects($matrix) { // Matrix to an array of dictionaries
    $keys = array_shift($matrix);
    foreach($matrix as $values) {
        $result[] = array_combine($keys, $values);
    }
    return $result;
}

function convert_from_csv($text) {
    // Interpret as CSV and transpose the resulting matrix
    $matrix = transpose(parse_csv($text));
    // Boundary case
    if (count($matrix) == 0 or count($matrix[0]) == 0) return $matrix;
    // Set the (probably blank) top-left cell
    $matrix[0][0] = "year";
    // Turn the data into the final format
    return to_objects($matrix);
}

// Get the raw HTTP POST data
$text = file_get_contents('php://input'); 
$data = convert_from_csv($text);
persist($data);
?>
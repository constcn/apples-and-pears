<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-type: application/json; charset=utf-8');

const TEMPLATE = [
    "year" => "string",
    "Area (1000 ha)" => "double",
    "Yield (t/ha)" => "double",
    "Total production" => "double",
    "Losses and feed use" => "double",
    "Usable production" => "double",
    "Production (fresh)" => "double",
    "Exports (fresh)" => "double",
    "Imports (fresh)" => "double",
    "Consumption (fresh)" => "double",
    "per capita consumption (kg) - fresh" => "double",
    "Ending stocks (fresh)" => "double",
    "Change in stocks (fresh)" => "double",
    "Self-sufficiency rate (fresh) %" => "double",
    "Production (processed)" => "double",
    "Exports (processed)" => "double",
    "Imports (processed)" => "double",
    "Consumption (processed)" => "double",
    "per capita consumption (kg) - processed" => "double",
    "Self-sufficiency rate (processed) %" => "double"
];

function error($message, $data) {
    exit(json_encode([
        "success" => "NOK",
        "message" => $message,
        "data" => json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) 
    ]));
}

function verify_structure(array $arr) {
    if ($arr === null) {
        if (JSON_ERROR_NONE !== json_last_error()) error("Invalid JSON: " . json_last_error_msg(), "");
        error("JSON is null", $arr);
    }
    if (count($arr) == 0) error("Missing data", $arr);
    $m = count(array_keys(TEMPLATE));
    foreach ($arr as $dict) {
        foreach ($dict as $key => $value) {
            if (!isset(TEMPLATE[$key])) error("Unexpected indicator '$key'", $dict);
            if (TEMPLATE[$key] != gettype($dict[$key])) error("Expected '$key' to be a ${TEMPLATE[$key]}, but got a ${gettype($dict[$key])}", $dict);
        }
        $n = count(array_keys($dict));
        if ($n != $m) error("Expected $m indicators, got $n", $dict);
    }
}

function transpose($matrix) { // Swap rows/columns
    return count($matrix) ? array_map(null, ...$matrix) : $matrix;
}

function to_csv($arr) {
    // Convert array of dicts to matrix of strings
    $result = [array_keys(TEMPLATE)];
    foreach ($arr as $row) {
        $result_row = [];
        foreach (TEMPLATE as $key => $type) {
            $result_row[] = $type == "double" ? number_format($row[$key], 1, ".", "") : $row[$key];
        }
        $result[] = $result_row;
    }
    // Convert matrix to one CSV string
    $rows = [];
    foreach (transpose($result) as $row) {
        $rows[] = implode(",", $row);
    }
    return implode("\n", $rows);
}

function to_json($arr) {
    return json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
}

function persist($data) {
    verify_structure($data);
    // Write the data both as JSON and CSV files
    file_put_contents("outlook.json", to_json($data));
    file_put_contents("outlook.csv", to_csv($data));
    // Report back
    $num_indicators = count(array_keys(TEMPLATE));
    $num_years = count($data);
    exit(json_encode([
        'success' => "OK",
        'message' => "Uploaded data has $num_indicators indicators for $num_years years",
    ]));
}
?>
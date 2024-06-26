<?php
include 'common.php';

// Get the raw HTTP POST data
$text = file_get_contents('php://input'); 
$data = json_decode($text, true);
persist($data);
?>
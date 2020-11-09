<?php
// the $_POST[] array will contain the passed in filename and data
// the directory "data" is writable by the server (chmod 777)
$filename = "data/".$_POST['filename'];
$data = $_POST['filedata'];
$response = array();
// write the file to disk
$success = file_put_contents($filename, $data);
?>

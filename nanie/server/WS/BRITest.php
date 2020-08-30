<?php
print $_SERVER['DOCUMENT_ROOT'];

$titi = $_SERVER['DOCUMENT_ROOT']."/nanie/server";

$files1 = scandir($titi);
print_r($files1);

?>


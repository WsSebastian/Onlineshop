<?php

$server = "db4free.net";
$userName = "testnutzer123";
$password = "mönchengladbach";


$connection = new mysqli($server, $userName, $password);

if($connection->connect_error){
    die("Verbindung fehlgeschlagen.".$connection->connect_error);
    
}
echo "connected";
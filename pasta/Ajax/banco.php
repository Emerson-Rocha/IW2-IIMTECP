<?php

define('server','localhost');
define('db','db_ajax');
define('user','root');
define('pw','');

$mysqli = new mysqli(server,user,pw,db);

if ($mysqli->connect_errno) {
    echo " Mysql Falha na conexão : " . $mysqli -> connect_error;
    exit();
  }

?>
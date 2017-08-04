<?php

$recepient = "nikolaevski59@gmail.com";
$sitename = "Конструктор";

$name = trim($_GET["name"]);
$tel = trim($_GET["tel"]);
$msg = trim($_GET["msg"]);


$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТел: $tel \nСообщение: $msg";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>
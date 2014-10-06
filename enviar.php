<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Raul Sena Ferreira - Envio de mensagem</title>
</head>

<body>
<?php
$ip2=$_SERVER['REMOTE_ADDR'];

$nome=$_POST[nome];

$tel=$_POST[tel];

$email=$_POST[email];

$empresa=$_POST[empresa];

$mensagem=$_POST[mensagem] . " ----****---- ip da maquina que enviou a mensagem: ".$ip2;

mail("raulferreira@raulferreira.com.br","$empresa","

Nome: $nome

Telefone: $tel

Email: $email

Empresa: $empresa

Mensagem: $mensagem","FROM:$nome<$email>");

echo "<h1>Obrigado $nome! Sua mensagem foi enviada com sucesso! Por motivos de segurança o seu ip foi identificado como: $ip2 </h1><br/>";
echo ("<a href='index.html'><h1>Clique aqui para retornar ao site</h1></a>"); 

?>
</body>
</html>
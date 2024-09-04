<?php
  include('banco.php');
  // variaveis vinda na url

  $cep = $_GET['cep'];
  $rua = $_GET['endereco'];
  $numero = $_GET['numero'];
  $comp = $_GET['complemento'];
  $cidade = $_GET['cidade'];
  $bairro = $_GET['bairro'];
  $uf =$_GET['uf'];

   // fazer um string sql 

   $sql = " INSERT INTO TB_CEP ( 
            CEP,
            RUA,
            NUMERO,
            COMP,
            BAIRRO,
            CIDADE,
            UF) 
            VALUES('$cep',
                   '$rua',
                   '$numero',
                   '$comp',
                   '$bairro',
                   '$cidade',
                   '$uf'
                   ) ";
    
    // executa o sql
    
   if(mysqli_query($conn, $sql)){
      echo "Vocês são os caras!!!!";
   }else{
       echo "não escola não é lugar de dormir!!!";
   }

   //
   mysqli_close($conn);


  



?>
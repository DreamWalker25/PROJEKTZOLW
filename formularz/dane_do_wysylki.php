<?php
    $conn = mysqli_connect("localhost", "root", "") or die ("Problem z połączeniem z bazą!");

    $komendaSQL1 = "CREATE DATABASE IF NOT EXISTS danedowysylki
                       DEFAULT CHARACTER SET = 'utf8' 
                       DEFAULT COLLATE = 'utf8_polish_ci'";

    $query = mysqli_query($conn, $komendaSQL1);
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    $conn = mysqli_connect("localhost", "root", "", "danedowysylki") or die ("Problem z połączeniem z bazą!");

    $komendaSQL2 = "CREATE TABLE IF NOT EXISTS daneklientow (
                    idKlientow INT(1) NOT NULL AUTO_INCREMENT,
                    imieNazwisko VARCHAR(200),
                    adresEmail VARCHAR(200),
                    numerTelefonu VARCHAR(200),

                    kodPocztowy VARCHAR(200),
                    miasto VARCHAR(200),
                    ulica VARCHAR(200),
                    numerDomuMieszkania VARCHAR(200),
                    
                    PRIMARY KEY (idKlientow))";

    $query = mysqli_query($conn, $komendaSQL2);

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    $conn = mysqli_connect("localhost", "root", "", "danedowysylki") or die ("Problem z połączeniem z bazą!");

    $imieNazwisko = $_POST['imieNazwisko'];
    $adresEmail = $_POST['adresEmail'];
    $numerTelefonu = $_POST['numerTelefonu'];
    
    $kodPocztowy = $_POST['kodPocztowy'];
    $miasto = $_POST['miasto'];
    $ulica = $_POST['ulica'];
    $numerDomuMieszkania = $_POST['numerDomuMieszkania'];

    $komendaSQL3 = "INSERT INTO `daneklientow`(`idKlientow`, `imieNazwisko`, `adresEmail`, `numerTelefonu`, `kodPocztowy`, `miasto`, `ulica`, `numerDomuMieszkania`) 
                    VALUES (NULL,'$imieNazwisko','$adresEmail','$numerTelefonu','$kodPocztowy','$miasto','$ulica','$numerDomuMieszkania')";

    $query = mysqli_query($conn, $komendaSQL3);

?>
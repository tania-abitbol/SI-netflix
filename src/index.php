<?php
require("controller/controller.php");

    if (isset($_GET['action'])){

        if($_GET["action"] == "signup") {
      
            if(isset($_POST['name']) && isset($_POST['password'])) {
                addUser($_POST['name']);
                

            }
        }
        elseif($_GET['action'] == "login"){
          header('Location: pages/login.php');
            if (isset($_POST['name']) && isset($_POST['password'])){
                getConnexion($_POST['name'], $_POST['password']);
              

            }
        }
        elseif ($_GET['action'] == "home") {
          require('pages/home.php');

         
        }
       
    }
 else{
  header('Location: pages/login.php');

           
        }
?>

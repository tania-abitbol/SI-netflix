<?php
require("controller/controller.php");
var_dump($GET["action"]);
    if (isset($_GET['action'])){

        if($_GET["action"] == "signup") {
          var_dump($_POST['name'],$_POST['pass']);
            if(isset($_POST['name']) && isset($_POST['pass'])) {
                addUser($_POST['name'], $_POST['pass']);
            

            }
        }elseif($_GET['action'] == "login"){
            require("pages/login.php");
            if (isset($_POST['name']) and isset($_POST['pass'])){
                getConnexion($_POST['name'], $_POST['pass']);
            

            }
        }
       
    }
//  else{
//   header('Location: pages/login.php');

           
//         }
?>
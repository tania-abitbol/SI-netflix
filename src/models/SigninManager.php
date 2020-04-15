<?php
class SigninManager extends Model
{
  public function createUser()
  {
    var_dump("f");
    $pass_hash =  password_hash($_POST['password'], PASSWORD_DEFAULT);
    return $this->postOne('users', 'User', $_POST["name"],$_POST["email"], $pass_hash);
  }
  public function checkEmail($email)
{
  var_dump("f");

  $data=$this->getAll("users");
  while($data){
    if($email===$data["email"]){
      return true;
    };
    return $this->createUser();
   
  }
<<<<<<< HEAD
  
<<<<<<< HEAD
=======
>>>>>>> parent of 09bf9da... bug
  return $this->createUser();
=======
>>>>>>> parent of c9326a9... end
}
}

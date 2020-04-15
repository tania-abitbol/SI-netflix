<?php
class SigninManager extends Model
{
  public function createUser()
  {
   
    $pass_hash =  password_hash($_POST['password'], PASSWORD_DEFAULT);
    return $this->postOne('users', 'User', $_POST["name"],$_POST["email"], $pass_hash);
  }
  public function checkEmail($email)
{
 

  $data=$this->getAll("users");
  while($data){
    if($email===$data["email"]){
      return true;
    };
    
   
  }
  return $this->createUser();
}
}

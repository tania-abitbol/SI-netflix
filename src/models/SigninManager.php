<?php
class SigninManager extends Model
{
    public function createUser()
    {
        $pass_hash =  password_hash($_POST['password'], PASSWORD_DEFAULT);
        return $this->postOne('users', $_POST["name"], $pass_hash);
    }
}

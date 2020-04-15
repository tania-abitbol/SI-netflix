<?php
class LoginManager extends Model
{
  public function loginUser()
  {
    return $this->getOne('users', 'User', $_POST["name"], $_POST_["password"]);
  }
}
<?php
class LoginManager extends Model
{
  public function loginUser($name, $password)
  {
    return $this->getOne('users', $name, $password);
  }
}
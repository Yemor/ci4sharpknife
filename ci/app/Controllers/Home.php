<?php

namespace App\Controllers;

class Home extends BaseController
{
	public function index()
	{
		echo view('welcome_message');
	}

	public function hello()
	{
		echo 'Hello';
	}

	public function echophp()
	{
		echo phpinfo();
	}
	//--------------------------------------------------------------------

}

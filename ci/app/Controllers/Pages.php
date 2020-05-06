<?php

namespace App\Controllers;

class Pages extends BaseController
{
    public $ctl_data = [];

	/**
	 * Constructor.
	 */
	public function initController(\CodeIgniter\HTTP\RequestInterface $request, \CodeIgniter\HTTP\ResponseInterface $response, \Psr\Log\LoggerInterface $logger)
	{
		// Do Not Edit This Line
        parent::initController($request, $response, $logger);
		
		
        $this->ctl_data['viewport'] = "idth=device-width, initial-scale=1, shrink-to-fit=no";
        $this->ctl_data['description'] = "This is a Pages for view";
        $this->ctl_data['author'] = "Yemor";

        $this->ctl_data['cssList'] = array(
			//Bootstrap CSS
			array(
				'href'  => 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css',
				'rel'   => 'stylesheet',
				'integrity'  => 'sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh',
				'crossorigin' => 'anonymous'
			)
		);
        $this->ctl_data['jsList'] = array(
			//jQuery JS
			array(
				'src'  => 'https://code.jquery.com/jquery-3.4.1.slim.min.js',
				'integrity'  => 'sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n',
				'crossorigin' => 'anonymous'
			),
			//POPPER JS
			array(
				'src'  => 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
				'integrity'  => 'sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo',
				'crossorigin' => 'anonymous'
			),
			//BOOTSTRAP JS
			array(
				'src'  => 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js',
				'integrity'  => 'sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6',
				'crossorigin' => 'anonymous'
			),
        );
        $this->ctl_data['refreshtime'] = '';
        // echo "<p>initController</p>" ;
        // echo json_encode($this->ctl_data);
	}

    public function view($page = 'Home')
    {
        if (!file_exists(APPPATH . '/Views/Pages/' . $page . '.php')) {
            // Whoops, we don't have a page for that!
            throw new \CodeIgniter\Exceptions\PageNotFoundException($page);
        }

        $data = $this->ctl_data;
        $data['title'] = $page; // Capitalize the first letter
        
        // echo json_encode($data);
        echo view('Templates/Header', $data);
        // echo view('Templates/Bootstrap', $data);
        echo view('Pages/' . $page, $data);
        echo view('Templates/Footer', $data);
    }

    //--------------------------------------------------------------------

}

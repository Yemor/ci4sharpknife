<?php

namespace App\Controllers;

class Sharpknife extends \CodeIgniter\Controller
{
    
    use \CodeIgniter\API\ResponseTrait;

    public function view($page = 'networkData')
    {
        $this->response->setHeader('Access-Control-Allow-Origin', '*');
        $this->response->setHeader('Access-Control-Allow-Headers', 'Content-Type');
        $this->response->setContentType('application/json');
        $db = \Config\Database::connect();
        $query = $db->query('SELECT * FROM net_sharpknife.network_flow ORDER BY flow_timestamp DESC LIMIT 10;');
        $results = $query->getResult();

        return json_encode($results);
        // foreach ($results as $row)
        // {
        //     foreach ($row as $val)
        //     {
        //         echo $val;
        //     }
        // }

        // echo 'Total Results: ' . count($results);
    }
    public function checkphp()
    {
        if (!function_exists('mysqli_init') && !extension_loaded('mysqli')) {
            echo 'We don\'t have mysqli!\n';
        } else {
            echo 'Oh yeah, we have it!';
        }
    }

    //--------------------------------------------------------------------

}

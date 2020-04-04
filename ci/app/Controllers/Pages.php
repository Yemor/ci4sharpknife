<?php
class Pages extends CodeIgniter\Controller {

    public function view($page = 'home')
    {
        if ( ! file_exists(APPPATH.'/Views/Pages/'.$page.'.php'))
        {
            // Whoops, we don't have a page for that!
            throw new \CodeIgniter\PageNotFoundException($page);
        }

        $data['title'] = ucfirst($page); // Capitalize the first letter

        echo view('Templates/Header', $data);
        echo view('Pages/'.$page, $data);
        echo view('Templates/Footer', $data);
    }
}
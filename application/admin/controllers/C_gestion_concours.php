<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 *
 */
class C_gestion_concours extends CI_Controller
{
  public function index()
  {
    $this->load->view('v_gestion_concours');    
  }
}

?>

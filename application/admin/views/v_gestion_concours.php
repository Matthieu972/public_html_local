<head>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/date-container.css">
</head>
<?php include('v_header.php'); $this->load->helper('html'); ?>

    <div id="page-wrapper" class="">
        <div class="container-fluid gainsboro">

            <!-- Page Heading -->
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">
                      Gestion du Concours
                    </h1>
                    <ol class="breadcrumb">
                        <li class="active">
                            <i class="fa fa-dashboard"></i>
                            Gestion du Concours
                        </li>
                    </ol>
                </div>
            </div>  <!-- Row -->
        </div>  <!-- Container-fluid -->
		
        <div class="container breadcrumb">		  
          <div class="row">
			<div class="col-lg-5 col-lg-offset-3">
			<ol>
				<label>Nom du concours</label>				
				<input class="form-control">						
			</ol>
			<ol>
				<label>Lot à gagner</label>				
				<input class="form-control">						
			</ol>
			<ol>
					<label>Date de début</label>
                    <hr/>
                    <div class="date-picker"  data-date="2014-02-03">
                        <div class="date-container">
                            <h4 class="date">
                                <span data-toggle="datepicker" data-method="subtract" data-type="d" class="fa fa-angle-left"></span>
                                <span class="text">17th</span>
                                <span data-toggle="datepicker" data-method="add" data-type="d" class="fa fa-angle-right"></span>
                            </h4>
                            <h4 class="month">
                                <span data-toggle="datepicker" data-method="subtract" data-type="M" class="fa fa-angle-left"></span>
                                <span class="text">December</span>
                                <span data-toggle="datepicker" data-method="add" data-type="M" class="fa fa-angle-right"></span>
                            </h4>
                            <h4 class="year">
                                <span data-toggle="datepicker" data-method="subtract" data-type="y" class="fa fa-angle-left"></span>
                                <span class="text">2014</span>
                                <span data-toggle="datepicker" data-method="add" data-type="y" class="fa fa-angle-right"></span>
                            </h4>
                        </div>
                    </div>                    
					<!--Calendrier	-->					

					<label>Date de fin</label>
                    <hr/>
                    <div class="date-picker"  data-date="2014-02-03">
                        <div class="date-container">
                            <h3 class="date">
                                <span data-toggle="datepicker" data-method="subtract" data-type="d" class="fa fa-angle-left"></span>
                                <span class="text">17th</span>
                                <span data-toggle="datepicker" data-method="add" data-type="d" class="fa fa-angle-right"></span>
                            </h3>
                            <h2 class="month">
                                <span data-toggle="datepicker" data-method="subtract" data-type="M" class="fa fa-angle-left"></span>
                                <span class="text">December</span>
                                <span data-toggle="datepicker" data-method="add" data-type="M" class="fa fa-angle-right"></span>
                            </h2>
                            <h3 class="year">
                                <span data-toggle="datepicker" data-method="subtract" data-type="y" class="fa fa-angle-left"></span>
                                <span class="text">2014</span>
                                <span data-toggle="datepicker" data-method="add" data-type="y" class="fa fa-angle-right"></span>
                            </h3>
                        </div>
                    </div>
                    <!--Calendrier  -->                    					

			</ol>

			</div>
		  </div>
		</div>
        		
    </div>  <!-- Page Wrapper -->
  </div>  <!-- Wrapper -->
  <script type="text/javascript" src="<?php echo base_url(); ?>assets/js/moment.js"></script>
  <script type="text/javascript" src="<?php echo base_url(); ?>assets/js/date-picker.js"></script>
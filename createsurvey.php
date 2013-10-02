<?php include 'layouts/header.php';?>
    <div class="container-fluid padding-top">
      <div class="row-fluid">
      <!-- Side navigation start -->
        <div class="span2">
          <div class="well sidebar-nav">
            <ul class="nav nav-list">
              <li class="nav-header">Sidebar</li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Survey</a></li>
              <li><a href="#">Survey Reports</a></li>
              <li><a href="#">Dummy</a></li>
            </ul>
          </div><!--/.well -->
        </div><!--/span-->
     <!-- Side navigation End -->
        <div class="span10">
          <div class="row-fluid">
            <ul class="breadcrumb">
                <li>
                <a href="index.php">Home</a>
                <span class="divider">/</span>
                </li>
                <li><a href="#">Create Survey</a>
                <span class="divider">/</span></li>
            </ul>
          </div>
          <div class="row-fluid sortable">
          	<div class="box span-12">
                <div class="box-header">
                    <h2><i class="icon-edit"></i>&nbsp;Create Survey</h2>
                    <div class="box-icon"><a class="btn-minimize"><i class="icon-chevron-down"></i></a></div>
                    <div class="clearfix"></div>
                </div>
                <div class="box-content padding-top20" id="box-content">
                	<div class="row-fluid">
                    	<div class="span5">
                            <form action="editsurvey.php" method="post" class="form-horizontal" onSubmit="return validatec();" name="csurvey">
                                <fieldset>
                                    <div class="control-group">
                                        <label class="control-label">Survey Name</label>
                                        <div class="controls">
                                            <input type="text" name="survname">
                                            <span class=""></span>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label class="control-label">Survey Category</label>
                                        <div class="controls">
                                            <select name="category" class="selectpicker bla bla bli">
                                                <option value="select" selected>
                                                    select
                                                </option>
                                                <option value="community">
                                                    Community
                                                </option>
                                                <option value="customer feedback">
                                                    Customer Feedback
                                                </option>
                                                <option value="demographics">
                                                    Demographics
                                                </option>
                                                <option value="education">
                                                    Education
                                                </option>
                                                <option value="events">
                                                    Events
                                                </option>
                                                <option value="healthcare">
                                                    Healthcare
                                                </option>
                                                <option value="hr">
                                                    Human Resources
                                                </option>
                                                <option value="industry">
                                                    Industry Specific
                                                </option>
                                                <option value="justffun">
                                                    Just for fun
                                                </option>
                                                <option value="mktresrch">
                                                    Market Research
                                                </option>
                                                <option value="nprofit">
                                                    Non-profit
                                                </option>
                                                <option value="politician">
                                                    Politician
                                                </option>
                                                <option value="other">
                                                    other
                                                </option>
                                            </select>
                                            <span class=""></span>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="butcont">
                                            <input type='submit' name='submit' value='Create Survey' class="btn btn-primary btn-small"/>
                                            <a href="index.html" class="btn btn-primary btn-small ">Cancel</a>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>       
                    	</div>
                        <div class="span7">
                        	<div class="well-medium">
                            	<h4>Tips to create survey</h4>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div><!--/span-->
      </div><!--/row-->
    </div><!--/.fluid-container-->
<?php include 'layouts/footer.php';?>
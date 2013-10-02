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
                <li><a href="createsurvey.php">Create Survey</a>
                <span class="divider">/</span></li>
                <li><a href="#">Edit Survey</a>
                <span class="divider">/</span></li>
            </ul>
          </div>
          <div class="row-fluid sortable">
          	<div class="box span-12">
                <div class="box-header">
                    <h2><i class="icon-edit"></i>&nbsp;Edit Survey</h2>
                    <div class="box-icon"><a class="btn-minimize"><i class="icon-chevron-down"></i></a></div>
                    <div class="clearfix"></div>
                </div>
                <div class="box-content padding-top20" id="box-content">
                	<div class="row-fluid">
                    	<div class="span12">
                        	<div class="addquestion">
                            	<a href="createsurvey.html" id="addquestion" class="btn btn-primary btn-large" role="button" data-target="#mymodal" data-toggle="modal">Add Question</a>
                            </div> 
                            <div class="addpage">
                            	<a href="createsurvey.html" class="btn btn-primary btn-large">Add page</a>
                        	</div>
                    	</div>
                    </div>
                </div>
            </div>
          </div>
          <hr/>
            <div class="row-fluid">
                <div class="span12 center">
                	<a href="createsurvey.html" class="btn btn-primary btn-large">Preview</a>
                </div>
            </div>
        </div><!--/span-->
      </div><!--/row-->
    </div><!--/.fluid-container-->
    	
     									<!-- Modal Window start -->   
        
    <div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h3 id="myModalLabel">Add Questions</h3>
      </div>
      <div class="modal-body">
        <div class="row-fluid">
        	<div class="span-12">
            	<form method="post" action="">
	                <fieldset>
                    	<div class="questiontext">
                            <label>Question Text</label>
                            <textarea rows="3" cols="40" name='question_body'></textarea>
                        </div>
                        <div class="questiontype">
                            <label>Question Type</label>
                            <select id='questiontype' onchange='return change()' name='question_type' class="selectpicker bla bla bli">
                                <option value='select'>select</option>
                                <option value='multchoice'>Multiple choice answer</option>
                                <option value='comntbox'>Comment/easybox</option>
                                <option value='single'>Single textbox</option>
                            </select>
                        </div>
                        <div class='questiontype' style='display:none' id='answerlabel'>
                            <div class='' id="text" >
                                Type your answer below(For multiple answer. Type in different line)
                            </div>
                            <div class='answerbox' id='answer'>
                                
                            </div>
                        </div> 
                    </fieldset>
                </form>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
        <button class="btn btn-primary">Save changes</button>
      </div>
    </div>
    
    									<!-- Modal Window End -->
    

<?php include 'layouts/footer.php';?>
<div id="push"></div>
	</div>
    <footer id="footer">
        <div class="container">
            <hr>
            <p>&copy; Harsh 2013</p>
        </div>
    </footer>
     
    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="assets/js/jquery.js"></script>
    <script src="assets/js/bootstrap-transition.js"></script>
    <script src="assets/js/bootstrap-alert.js"></script>
    <script src="assets/js/bootstrap-modal.js"></script>
    <script src="assets/js/bootstrap-select.js"></script>
    <script src="assets/js/bootstrap-dropdown.js"></script>
    <script src="assets/js/bootstrap-scrollspy.js"></script>
    <script src="assets/js/bootstrap-tab.js"></script>
    <script src="assets/js/bootstrap-tooltip.js"></script>
    <script src="assets/js/bootstrap-popover.js"></script>
    <script src="assets/js/bootstrap-button.js"></script>
    <script src="assets/js/bootstrap-collapse.js"></script>
    <script src="assets/js/bootstrap-carousel.js"></script>
    <script src="assets/js/bootstrap-typeahead.js"></script>
	<script type="text/javascript" src="assets/js/harsh.js"></script>
    <script type="text/javascript" src="assets/js/jquery.dataTables.js"></script>
    	<!-- data table plugin -->
    <script type="text/javascript">
	$(document).ready(function(){
			$('.dropdown-toggle').dropdown();
			$('.btn-minimize').click(function(e){
				e.preventDefault();
				var $target = $(this).parent().parent().next('.box-content');
				if($target.is(':visible')) $('i',$(this)).removeClass('icon-chevron-up').addClass('icon-chevron-down');
				else 					   $('i',$(this)).removeClass('icon-chevron-down').addClass('icon-chevron-up');
				$target.slideToggle();
			});
			$('#surveytable').dataTable();
			$('.selectpicker').selectpicker({
                'selectedText': 'select'
            });
			$('#addquestion').click(function(){
				$('#myModal').modal();
			});
	})
	</script>

  </body>
</html>

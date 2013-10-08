// JavaScript Document
var page	=	1;
var count	=	0;
var array = new Array;
var parntarray = [];
$(document).ready(function(){
	$('#appnddiv').on('click', 'a.openpopup', function(e){
		e.preventDefault();
		console.log(this.target);
		resetvalue();
		$('#myModal').modal();												  
	});			
				
	/*$("#appnddiv").delegate("a","click",function(){
		$('#myModal').modal();											 
});		*/	
				
	/*$('#appnddiv').on('click', 'a', function(e){
		alert("");
		if($(this).hasClass('opnpopup')){
			e.preventDefault();
			alert($(this).value);
		}										 
	})*/
	
	/*var opnpop	=	function(e){
		e.preventDefault();
		if(e.target.nodeName == "a"){
			console.log(e.target);
		}
	}
	document.getElementById("appnddiv").addEventListener("click",opnpop,false);*/
				/*#########################################*/
				/*###### json of form element script ######*/
				/*#########################################*/
				
});
function datahandling(){
	var data =	{};
	var arr	= $('form').serializeArray();
	$.each(arr, function(){
		data[this.name]=this.value;		 
	});
	//console.log(data);
	array.push(data);
	console.log(array);
	/*for(i=0;i<parntarray.length;i++){
		if(parntarray.length>0){
			parntarray[0] = '';	
		}
	}*/
	parntarray.splice(0, 0, array);
	console.log(parntarray.length);
	/*parntarray = parntarray.concat(array);*/
	console.log(parntarray);	
	return true; 
}




function resetvalue(){
	document.forms['form1']['question_body'].value	= ' ';
	$('.selectpicker').selectpicker('val', 'select');
	document.getElementById("answerlabel").style.display = 'none';
	return true;
}
/*###############################*/
/*###### validation script ######*/
/*###############################*/

function validatec(){
	var surv	=	document.forms['csurvey']['survname'];
	var catg	=	document.forms['csurvey']['category'];
	if(surv.value==''){
		alert('Survey name cannot be blank');
		surv.focus();
		return false;
	}else if(catg.value=='select'){
		alert('please select category');
		catg.focus();
		return false;
	}
}


/*###############################*/
/*### Element Creation script(Pop-up) ###*/
/*###############################*/

function change(){
	var child	=	document.getElementById('questiontype').value;
	var anserlabel	=	document.getElementById('answerlabel');
	var answertext	=	document.getElementById('text');
	anserlabel.style.display	=	'block';
	if(child	==	'single'){
		/*var txt	=	document.createElement('input');
		txt.setAttribute('type','text');
		txt.setAttribute('name','singline');
		var frm	=	document.getElementById('answer');
		var count	=	frm.childElementCount;
		if(count>=1){
			frm.innerHTML	=	'';
		}
		frm.appendChild(txt);*/
		var frm	=	document.getElementById('answer');
		var count	=	frm.childElementCount;
		if(count>=1){
			frm.innerHTML	=	'';
		}
		var text	=	"";
		answertext.innerHTML	=	"You have selected one line option and user can only able to enter text in one line";
		return true;
	}else if(child	==	'comntbox'){
		/*var txtara	=	document.createElement('textarea');
		txtara.setAttribute('rows','3');
		txtara.setAttribute('cols','30');
		if(child	==	'comntbox'){
			txtara.setAttribute('name','comntbox');
		}else{
			txtara.setAttribute('name','multichoice');
		}
		var frm	=	document.getElementById('answer');
		var count	=	frm.childElementCount;
		if(count>=1){
			frm.innerHTML	=	'';
		}
		frm.appendChild(txtara);*/
		var frm	=	document.getElementById('answer');
		var count	=	frm.childElementCount;
		if(count>=1){
			frm.innerHTML	=	'';
		}

		answertext.innerHTML	=	"You have selected one Multi line option";
		return true;
	}else if(child	==	'multchoice'){
		var txtara	=	document.createElement('textarea');
		txtara.setAttribute('rows','3');
		txtara.setAttribute('cols','30');
		if(child	==	'comntbox'){
			txtara.setAttribute('name','comntbox');
		}else{
			txtara.setAttribute('name','multichoice');
		}
		var frm	=	document.getElementById('answer');
		var count	=	frm.childElementCount;
		alert(count);
		if(count>=1){
			frm.innerHTML	=	" ";
		}
		frm.appendChild(txtara);
		answertext.innerHTML	=	"Multi choice option(PLease enter option in new line.)";
		return true;
	}
	
}



/*##########################################*/
/*### Element Creation script for answer ###*/
/*##########################################*/

function questintype(typevalue,idanswr){
	//alert("testing");
	//alert("typevalue in function" + typevalue);
	var idtype	=	'questintype' + idanswr;
	//alert("idtype in function" + idtype);
	//alert(document.getElementById(idtype));
	var spanlabel	=	document.getElementById(idtype);
	spanlabel.style.display	=	'block';
	//alert(typevalue);
	if(typevalue=='single'){
		//alert(typevalue);
		var txt	= document.createElement('input');
		txt.setAttribute('type','text');
		txt.setAttribute('class','txt');
		//alert(txt);
		spanlabel.appendChild(txt);
		return true;
	}else if(typevalue=='comntbox'){
		//alert(typevalue);
		var txtara	=	document.createElement('textarea');
		txtara.setAttribute('rows','3');
		txtara.setAttribute('cols','30');
		txtara.setAttribute('class','txt');
		//alert(txtara);
		spanlabel.appendChild(txtara);
		return true;
	}
}

/*##########################################*/
/*### Element Creation script for answer ###*/
/*##########################################*/
function addpage(){
	page++;
	var parntdiv	=	document.getElementById("appnddiv");
	var newdiv	=	document.createElement('div');
	newdiv.className	=	'page';
	newdiv.innerHTML	=	'Page'+ " " +page;
	parntdiv.appendChild(newdiv);
	var contdiv	=	document.createElement('div');
	contdiv.className	=	'cont';
	var cont	=	"<div class='addquestion'>" +
	"<a href='#' class='btn btn-primary btn-large openpopup' role='button' data-target='#mymodal' data-toggle='modal'>Add Question "+
	"</a></div>";
	contdiv.innerHTML	=	cont;
	parntdiv.appendChild(contdiv);
	return true;
}

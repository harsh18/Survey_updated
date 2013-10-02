// JavaScript Document
/*###############################*/
/*######## Popup script #########*/
/*###############################*/
/*function popup(){
	if(document.getElementById("back").style.display	== "none"){
		document.getElementById("back").style.display	=	'block';
	}
	if(document.getElementById("block").style.display	== "none"){
		document.getElementById("block").style.display	=	'block';;
	}
}
function popclos(){
	if(document.getElementById("back").style.display	=	"block"){
		document.getElementById("back").style.display	=	"none"
	}
	if(document.getElementById("block").style.display	=	"block"){
		document.getElementById("block").style.display	=	"none"
	}
}*/
$(document).ready(function () {
      $("#closebtn").click(function () {
        $("#block").hide('800', "swing", function () { $("#back").fadeOut("500"); });
      });
      $("#opn").click(function () {
        if (document.getElementById('back').style.visibility == 'hidden') {
          document.getElementById('back').style.visibility = '';
          $("#back").hide();
        }
        if (document.getElementById('block').style.visibility == 'hidden') {
          document.getElementById('block').style.visibility = '';
          $("#block").hide();
        }
        $("#back").fadeIn(500, "linear", function () { $("#block").show(800, "swing"); });
      });    
});


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
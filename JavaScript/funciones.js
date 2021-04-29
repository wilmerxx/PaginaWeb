



function desplejar1() {
    var mas1 = document.getElementById("myDIV1");
    if (mas1.style.display === "block") {
        mas1.style.display = "none";
        document.getElementById("mas1").innerHTML = "+";
    } else {
        document.getElementById("mas1").innerHTML = "-";
        mas1.style.display = "block";
    }

}
function desplejar2() {
    var mas1 = document.getElementById("myDIV2");
    if (mas1.style.display === "block") {
        mas1.style.display = "none";
        document.getElementById("mas2").innerHTML = "+";
    } else {
        document.getElementById("mas2").innerHTML = "-";
        mas1.style.display = "block";
    }

}
function desplejar3() {
    var mas1 = document.getElementById("myDIV3");
    if (mas1.style.display === "block") {
        mas1.style.display = "none";
        document.getElementById("mas3").innerHTML = "+";
    } else {
        document.getElementById("mas3").innerHTML = "-";
        mas1.style.display = "block";
    }

}

function desplejar4() {
    var mas1 = document.getElementById("myDIV4");
    if (mas1.style.display === "flex") {
        mas1.style.display = "none";
        document.getElementById("mas4").innerHTML = "+";
    } else {
        document.getElementById("mas4").innerHTML = "-";
        mas1.style.display = "flex";
    }

}

function desplejar5() {
    var mas1 = document.getElementById("myDIV5");
    if (mas1.style.display === "flex") {
        mas1.style.display = "none";
        document.getElementById("mas5").innerHTML = "+";
    } else {
        document.getElementById("mas5").innerHTML = "-";
        mas1.style.display = "flex";
    }

}


function desplejar6() {
    var mas1 = document.getElementById("myDIV6");
    if (mas1.style.display === "flex") {
        mas1.style.display = "none";
        document.getElementById("mas6").innerHTML = "+";
    } else {
        document.getElementById("mas6").innerHTML = "-";
        mas1.style.display = "flex";
    }

}


function desplejar7() {
    var mas1 = document.getElementById("myDIV7");
    if (mas1.style.display === "flex") {
        mas1.style.display = "none";
        document.getElementById("mas7").innerHTML = "+";
    } else {
        document.getElementById("mas7").innerHTML = "-";
        mas1.style.display = "flex";
    }

}

function desplejar8() {
    var mas1 = document.getElementById("myDIV8");
    if (mas1.style.display === "flex") {
        mas1.style.display = "none";
        document.getElementById("mas8").innerHTML = "+";
    } else {
        document.getElementById("mas8").innerHTML = "-";
        mas1.style.display = "flex";
    }

}

$(function(){
	var inputs = $('.input');
	var paras = $('.description-flex-container').find('p');
	inputs.click(function(){
		var t = $(this),
				ind = t.index(),
				matchedPara = paras.eq(ind);
		
		t.add(matchedPara).addClass('active');
		inputs.not(t).add(paras.not(matchedPara)).removeClass('active');
	});
});





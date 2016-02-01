console.log('hello world');


//Get HTML elements

var iceberg_img = document.getElementById("iceberg_img");
var EW = document.getElementById("EW")
var EW_text = document.getElementById("EW_text")
var OPW = document.getElementById("OPW")
var OPW_text = document.getElementById("OPW_text")
var TW = document.getElementById("TW")
var TW_text = document.getElementById("TW_text")
var LCW = document.getElementById("LCW")
var LCW_text = document.getElementById("LCW_text")
var translucent  = 0.3
var normal = 0.6
var opaque = 1.0
//Add event listeners

console.log(EW)

EW.setAttribute('fill-opacity', normal);
EW.setAttribute('stroke-opacity', normal);
OPW.setAttribute('fill-opacity', normal);
OPW.setAttribute('stroke-opacity', normal);
TW.setAttribute('fill-opacity', normal);
TW.setAttribute('stroke-opacity', normal);
LCW.setAttribute('fill-opacity', normal);
LCW.setAttribute('stroke-opacity', normal);


EW.addEventListener("mouseover",function(){replace_text(EW_text, [EW,OPW,TW,LCW]);})
EW_text.addEventListener("mouseover",function(){replace_text(EW_text, [EW,OPW,TW,LCW]);})
EW.addEventListener("mouseout",function(){change_transparency(EW_text, [EW,OPW,TW,LCW]);})
EW_text.addEventListener("mouseout",function(){change_transparency(EW_text, [EW,OPW,TW,LCW]);})
OPW.addEventListener("mouseover",function(){replace_text(OPW_text, [OPW,EW,TW,LCW]);})
OPW_text.addEventListener("mouseover",function(){replace_text(OPW_text, [OPW,EW,TW,LCW]);})
OPW.addEventListener("mouseout",function(){change_transparency(OPW_text, [OPW,EW,TW,LCW]);})
OPW_text.addEventListener("mouseout",function(){change_transparency(OPW_text, [OPW,EW,TW,LCW]);})
TW.addEventListener("mouseover",function(){replace_text(TW_text, [TW,EW,OPW,LCW]);})
TW_text.addEventListener("mouseover",function(){replace_text(TW_text, [TW,EW,OPW,LCW]);})
TW.addEventListener("mouseout",function(){change_transparency(TW_text, [TW,EW,OPW,LCW]);})
TW_text.addEventListener("mouseout",function(){change_transparency(TW_text, [TW,EW,OPW,LCW]);})
LCW.addEventListener("mouseover",function(){replace_text(LCW_text, [LCW,TW,EW,OPW]);})
LCW_text.addEventListener("mouseover",function(){replace_text(LCW_text, [LCW,TW,EW,OPW]);})
LCW.addEventListener("mouseout",function(){change_transparency(LCW_text, [LCW,TW,EW,OPW]);})
LCW_text.addEventListener("mouseout",function(){change_transparency(LCW_text, [LCW,TW,EW,OPW]);})


//Manipulate HTML element



function replace_text(target, target_array){
	console.log('mouse_over',target);
	target.innerHTML = properties[target.id];
	target.style.fontSize =  40;
	target_array[0].setAttribute('fill-opacity', opaque);
	target_array[0].setAttribute('stroke-opacity', opaque);
	target_array[1].setAttribute('fill-opacity', translucent);
	target_array[1].setAttribute('stroke-opacity', translucent);
	target_array[2].setAttribute('fill-opacity', translucent);
	target_array[2].setAttribute('stroke-opacity', translucent);
	target_array[3].setAttribute('fill-opacity', translucent);
	target_array[3].setAttribute('stroke-opacity', translucent);
};

function change_transparency(target, target_array){
	console.log('mouse_out',target_array);
	target.innerHTML = properties[target.id+'_original'];
	target.style.fontSize =  20;
	target_array[0].setAttribute('fill-opacity', normal);
	target_array[0].setAttribute('stroke-opacity', normal);
	target_array[1].setAttribute('fill-opacity', normal)
	target_array[1].setAttribute('stroke-opacity', normal)
	target_array[2].setAttribute('fill-opacity', normal)
	target_array[2].setAttribute('stroke-opacity', normal)
	target_array[3].setAttribute('fill-opacity', normal)
	target_array[3].setAttribute('stroke-opacity', normal)
};

//Containers

//Arrays

var array=[1,2,3]
//Objects



var properties = {
	address:'328 Avenue Brugmann',
	volume: 720,
	EW_text: "13 673 kL",
	EW_text_original: "Embodied Water",
	OPW_text: "11 856 kL",
	OPW_text_original: "Operational Water",
	TW_text: "10 282 kL",
	TW_text_original: "Transport Water",
	LCW_text: "35 811 kL",
	LCW_text_original: "Life Cycle Water"
};

//Copy an array by invoking map NOT object which is a dictionary

array_2 = array.map(function(old_array_element){return old_array_element;})

//filert an array by invoking filer

array_3 = array.filter(function(old_array_element){return old_array_element>1;})
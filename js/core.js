/* Core*/
  function spacebg(obj) {
  var bg=document.getElementById('choose_bg').getElementsByTagName('span');
  for(var i=0;i<bg.length;i++)
  {

    bg[i].className="space_choose";
  }
  obj.getElementsByTagName('span')[0].className="space_choose_selected";
}
function tick(){
	document.getElementById('tick1').src="img/gb_confrim.png";
}
function tickq(){
	document.getElementById('tick2').src="img/sm_confrim.png";
}
function tickw(){
	document.getElementById('tick3').src="img/sm_confrim.png";
}
function ticke(){
	document.getElementById('tick4').src="img/sm_confrim.png";
}
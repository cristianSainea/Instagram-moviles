var win = Ti.UI.createWindow({
  backgroundColor: 'white'
});
function registrar(e) {
	var re = $.vRegistrar;
	re.setVisible(true);
	$.selRegis.setVisible(true);
	$.selIniciar.setVisible(false);
	var ini =$.horizontal;
	ini.setVisible(false);
	$.user.setValue("");
	$.pass.setValue("");
}
function inicio(e) {
	var re = $.vRegistrar;
	re.setVisible(false);
	var ini =$.horizontal;
	ini.setVisible(true);
	$.selRegis.setVisible(false);
	$.selIniciar.setVisible(true);	
	$.mail.setValue("");
	
	
} 
function verificar(e){
	var txt = $.user;
	var pass = $.pass;
	
	if(txt.getValue( ) =="cris" && pass.getValue( ) =="123" ){
		//alert("hola");
		$.index.close();
		//$.home.open();
		win.open();
	}else{
		alert("contraseña invalida");
	}
}
function sesionFace(e){
	//alert("hola");
	win.open();
	
}

function seOlvidada(e){
	alert("recordar");
}

$.index.open();

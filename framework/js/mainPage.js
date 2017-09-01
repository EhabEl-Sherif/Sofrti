
function refreshTime(){
	var date =new Date();
	document.writeln(date.getHours() + ' : '+date.getMinutes()+ ' : '+date.getSeconds());
}
//setInterval(refreshTime,1000);
function formvalid()
{
	var name=document.getElementById("name").value
	var id=document.getElementById("id").value

	var text3=name+" "+id;
	document.getElementById("text").innerHTML=text3
}
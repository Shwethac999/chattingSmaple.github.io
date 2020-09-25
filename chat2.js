
var date=new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var ampm = hours >= 12 ? 'pm' : 'am';
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'
minutes = minutes < 10 ? '0'+minutes : minutes;
var strTime = hours + ':' + minutes + ' ' + ampm;

document.getElementById("lastseen").innerHTML="Last Seen : " + strTime
document.getElementById("lastseen1").innerHTML="Last Seen : " + strTime

document.getElementById("btn").addEventListener("click", chart1);
function chart1()
{
    var message=document.getElementById("message")
var child=document.createElement("li")
var break1=document.createElement("br");
var break2=document.createElement("br");
var message1=document.getElementById("message1")
var child1=document.createElement("li")
    var text=document.getElementById("textbox").value
    
    console.log(text)
    var ss=message.appendChild(child)
     ss.innerHTML= text
    message.appendChild(break2)
    ss.style.backgroundColor="rgb(25, 21, 47)";
    ss.style.color="white"
    ss.style.padding="8px"
    ss.style.borderRadius="4px"
    ss.style.marginLeft="250px"
    ss.style.marginRight="12px"
    var ss1=message1.appendChild(child1)
     ss1.innerHTML=text
     message1.appendChild(break1)
    ss1.style.backgroundColor="rgb(87, 87, 87)"
    ss1.style.color="white"
    ss1.style.padding="8px"
    ss1.style.borderRadius="4px"
    ss1.style.marginRight="250px"
    ss1.style.marginLeft="12px"
    
    document.getElementById("textbox").value=""
}

document.getElementById("btn1").addEventListener("click",chart2);
function chart2()
{
    var message=document.getElementById("message")
var child=document.createElement("li")




var break1=document.createElement("br");
var break2=document.createElement("br");
var message1=document.getElementById("message1")
var child1=document.createElement("li")
    var text=document.getElementById("textbox1").value
    console.log(text)
    var ss1=message1.appendChild(child1)
    ss1.innerHTML=text
    message1.appendChild(break2)
    ss1.style.backgroundColor="rgb(25, 21, 47)"
    ss1.style.color="white"
    ss1.style.padding="8px"
    ss1.style.borderRadius="4px"
    ss1.style.marginLeft="250px"
    ss1.style.marginRight="12px"
    var ss=message.appendChild(child)
    ss.innerHTML=text
    message.appendChild(break1)
    ss.style.backgroundColor="rgb(87, 87, 87)"
    ss.style.color="white"
    ss.style.padding="8px"
    ss.style.borderRadius="4px"
    ss.style.marginRight="250px"
    ss.style.marginLeft="12px"
    document.getElementById("textbox1").value=""
}

// var p=document.createElement("p")
// var paret=document.getElementById("message")
//      paret.appendChild(p);
//      var nose=document.createTextNode(text);
//      p.appendChild(nose)
// var sp=document.createElement("span")
// var sp1=document.createElement("span")
// p.appendChild(sp); it is text
// p.appendChild(sp1);it is time
// p.scrollIntoView(focus)

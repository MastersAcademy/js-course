  
  var c = [];
  var el = document.getElementsByTagName("button");
  var l;
  var k;
  var w;

  function sendLength(li){
    c = li;
    console.log(c.length);

    if(c.length>1){

      el[2].removeAttribute("onclick");
      el[2].setAttribute("class","disabled");
      el[1].setAttribute("onclick","myMoveLeft()");
      el[1].removeAttribute("class","disabled");

    }
    else
    {
      el[2].removeAttribute("onclick");
      el[1].removeAttribute("onclick");
      el[2].setAttribute("class","disabled");
      el[1].setAttribute("class","disabled");
    }
    l=0;
    k=0;
    w = "";
  }

  
  el[1].onclick = function(){myMoveLeft()};
  el[2].onclick = function(){myMoveRight()};
  var l=0;
  var k=0;
  var w = "";

 

  function myMoveLeft() {
    
    var pos = 10;
    var id = setInterval(frame, 20);
    function frame() {

      if (pos == 150) {
        clearInterval(id);
      } 
      else {
        k=l;
        pos=pos+10;      
        k=k-pos;
        for (i = 0,j=k; i < c.length; i++) {
             c[i].style.left = j+"px";
             j=j+150;
         }          
      }
     }
     l=k;
     w = c[1].style.left;
     if (w == "-"+(c.length*150-1500)+"px")
     {
       el[1].removeAttribute("onclick"); 
       el[1].setAttribute("class","disabled");
     }
     else
     {
        el[2].setAttribute("onclick","myMoveRight()");
        el[1].setAttribute("onclick","myMoveLeft()");
        el[2].removeAttribute("class");
        el[1].removeAttribute("class");
     }
     console.log(c.length);
     console.log(w);
  }

  function myMoveRight() {
    var pos = 0;
    var id = setInterval(frame, 20);
    function frame() {

      if (pos == 150) {
        clearInterval(id);
      } 
      else {
        k=l;
        pos=pos+10;      
        k=k+pos;
        for (i = 0,j = k; i < c.length; i++) {
             c[i].style.left = j+"px";
             j=j+150;
        } 
      }           
     }
     l=k;
     w = c[1].style.left;
     if(w == "0px"){
       el[2].removeAttribute("onclick");
       el[2].setAttribute("class","disabled");
     }
     else
     {
        el[2].setAttribute("onclick","myMoveRight()");
        el[1].setAttribute("onclick","myMoveLeft()");
        el[2].removeAttribute("class");
        el[1].removeAttribute("class");
     }
     
     console.log(w);
  }




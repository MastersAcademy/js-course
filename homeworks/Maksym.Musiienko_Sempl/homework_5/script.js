  var c = document.getElementById("list").children;

  for (i = 1, j = 0; i < c.length; i++) {
  	  j=j+100;
      c[i].style.left = j+"px";      
  }

  var l=0;
  var k=0;
  var w = "";

  document.getElementsByTagName("button")[1].removeAttribute("onclick");
  document.getElementsByTagName("button")[1].setAttribute("class","disabled");

  function myMoveLeft() {
    
    var pos = 10;
    var id = setInterval(frame, 5);
    function frame() {

      if (pos == 100) {
        clearInterval(id);
      } 
      else {
        k=l;
        pos=pos+10;      
        k=k-pos;
        for (i = 0,j=k; i < c.length; i++) {
             c[i].style.left = j+"px";
             j=j+100;
         }          
      }
     }
     l=k;
     w = c[1].style.left;
     if (w == "-"+(c.length*100-500)+"px")
     {
       document.getElementsByTagName("button")[0].removeAttribute("onclick"); 
       document.getElementsByTagName("button")[0].setAttribute("class","disabled");
     }
     else
     {
        document.getElementsByTagName("button")[1].setAttribute("onclick","myMoveRight()");
        document.getElementsByTagName("button")[0].setAttribute("onclick","myMoveLeft()");
        document.getElementsByTagName("button")[1].removeAttribute("class");
        document.getElementsByTagName("button")[0].removeAttribute("class");
     }
     console.log(w);
  }

  function myMoveRight() {
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {

      if (pos == 100) {
        clearInterval(id);
      } 
      else {
        k=l;
        pos=pos+10;      
        k=k+pos;
        for (i = 0,j = k; i < c.length; i++) {
             c[i].style.left = j+"px";
             j=j+100;
        } 
      }           
     }
     l=k;
     w = c[1].style.left;
     if(w == "0px"){
       document.getElementsByTagName("button")[1].removeAttribute("onclick");
       document.getElementsByTagName("button")[1].setAttribute("class","disabled");
     }
     else
     {
        document.getElementsByTagName("button")[1].setAttribute("onclick","myMoveRight()");
        document.getElementsByTagName("button")[0].setAttribute("onclick","myMoveLeft()");
        document.getElementsByTagName("button")[1].removeAttribute("class");
        document.getElementsByTagName("button")[0].removeAttribute("class");
     }
     
     console.log(w);
  }

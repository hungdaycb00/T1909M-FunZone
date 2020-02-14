var index=0;
show();
function show() {
  var i;
  var slide=document.getElementsByClassName("fade");
  var dots=document.getElementsByClassName("dot");
   for(i=0;i<slide.length;i++) {
     slide[i].style.display="none";
   }
   index=index+1;
   if(index>slide.length){
     index=1;
   }
   for(i=0;i<dots.length;i++){
     dots[i].className=dots[i].className.replace(" active","");
   }
   slide[index-1].style.display="block";
   dots[index-1].className+=" active";
   setTimeout(show,3000);

}

// var demo=document.getElementById("demo");
// console.log(demo);
// var img=document.getElementsByClassName("img-fluid");
// console.log(img.length);
// for(var i=0;i<img.length;i++){
//     console.log(img[i]);
// 


// var test=document.getElementById("test");
// test.addEventListener("click",function(){
//     alert("Hello");
// })
// var img=document.getElementsByClassName("img-fluid");
// for(var i=0;i<img.length;i++){
//     img[i].addEventListener("click",function(e){
//       console.log(e.target);
//     })
// }
// document.addEventListener("click",function(){
//     console.log("hello");
// })

// var img=document.querySelector("img")
// document.addEventListener("mousemove",function(e){
//     img.style.left=e.pageX;
//     img.style.top=e.pageY;
//     console.log(e.pageX);
//     console.log(e.pageY);
// })


var imgs= Array.from(document.querySelectorAll(".img-fluid"));
var lightBoxContainer=document.getElementById("lightBoxContainer");
var closeIcon=document.getElementById("close");
var lightBoxItem=document.getElementById("lightBoxItem");
var nextIcon=document.getElementById("next");
var prevIcon=document.getElementById("prev");
var currentIndex=0;

for(var i=0;i<imgs.length;i++){

    imgs[i].addEventListener("click",showSlider)
    function showSlider(e){
    lightBoxContainer.style.display="flex";
     console.log(imgs.indexOf(e.target))
  var imgSrc=e.target.src;
  lightBoxItem.style.backgroundImage=`url(${imgSrc})`;
}
}
closeIcon.addEventListener("click",closeSlider)
function closeSlider(){
    lightBoxContainer.style.display="none";
}

nextIcon.addEventListener("click",nextSlider)
function nextSlider(e){
  currentIndex++;
  if(currentIndex==imgs.length){
      currentIndex=0;
  }
  else{
     var imgg=imgs[currentIndex].src;
     lightBoxItem.style.backgroundImage=`url(${imgg})`
  }
    

}



prevIcon.addEventListener("click",prevSlider)
function prevSlider(e){
   currentIndex--;
   if(currentIndex<0){
    currentIndex=imgs.length-1;
}
else{
 
    var imgg=imgs[currentIndex].src;
    
lightBoxItem.style.backgroundImage=`url(${imgg})`;
}
}


document.addEventListener("keydown",function(e){
    if(e.key=="Escape"){
        closeSlider()
    }
    else if
        (e.key=="ArrowLeft"){
            prevSlider()
    }
    else if  (e.key=="ArrowRight"){
     nextSlider()
    }
})
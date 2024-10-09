var arr=new Array("img1.jpg", "img2.jpg", "img3.jpg","img4.jpg", "img5.jpg", "img6.jpg");
var i=1;
var ref;
 
function picLibrary()
 {
    document.images[0].src=arr[i];
    i++
    if(i>5)
    i=0;
    
}

function start()
 {
    ref=setInterval("picLibrary()", 1000);  
}

function stop(){
    clearInterval(ref);

}
var arr= new Array(6,2,4,5,1,3,2);
var i,j,tempt;
document.write("<br/> <br/> before sorting...<br/>")
for(i=0; i<6; i++){
  document.write(arr[i] +"<br/>");
}



for(i=0; i<6; i++){
  for(j=0;j<5; j++){
    if(arr[j]>arr[j+1]){
      tempt=arr[j];
      arr[j]=arr[j+1];
      arr[j+1]=tempt;
    }
  }
}
document.write("<br/><br/> After sorting... </br/>");
for(i=0; i<6; i++){
  document.write(arr[i] +"<br/>");
}

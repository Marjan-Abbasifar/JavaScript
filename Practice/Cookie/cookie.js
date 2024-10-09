function writeCookie()
 {
   if(document.myForm.customer.value=="") {
    alert("Enter some value");
    return;
   }
   var cookieValue = escape(document.myForm.customer.value) + ";" ;
   document.cookie= "name="+ cookieValue;
   document.write("Setting cookie:"+ " name = "+ cookieValue);
    
}
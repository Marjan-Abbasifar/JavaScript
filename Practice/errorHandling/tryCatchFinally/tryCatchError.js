function myFunc()
 {
    var a= "marjan"
    try{
        
        
        var b=a.toUpperCase();
        alert ("value of b variable is "+b);
   
    }
    catch
    {
    alert ("Error");
    }

    finally{
        alert ("Finally  will always be executed");
    }
}
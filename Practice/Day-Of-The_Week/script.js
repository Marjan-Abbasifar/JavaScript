document.addEventListener("DOMContentLoaded",()=>{

    const weekdays = [
        { name: 'Monday', quote: 'Monday morning blues!'},
        { name: 'Tuesday', quote: 'Taco Time!'},
        { name: 'Wednesday', quote: 'Two more days to the weekend.'},
        { name: 'Thursday', quote: 'The weekend is almost here...'},
        { name: 'Friday', quote: 'Weekend is here!'},
        { name: 'Saturday',quote: 'Time to party!'},
        { name: 'Sunday', quote: 'Time to chillax!'}
    
    ];

    const today = weekdays[new Date().getDay()];
    console.log(today);

    document.getElementById("weekday").textContent = today.name;
    document.getElementById("phrase").textContent = today.quote;

});
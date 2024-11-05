function calculateAge(){
    const today = new Date();
    const birthdateInput =  document.getElementById("birthdate").value;
    const birthdateParts = birthdateInput.split("-");

    const birthDay = birthdateParts[0];
    const birthMonth = birthdateParts[1]-1;
    const birthYear = birthdateParts[2];
    const birthDate = new Date(birthYear, birthMonth, birthDay );

    const isValidDate = (date)=>{
        return(
          Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)

        );

    };

    if(!isValidDate(birthDate)){
        alert("Invalid Date Format: Please Enter a Date in a DD-MM-YYYY format.");
        return;
    }

    const ageInMilliSecond = today - birthDate;
    const ageInSecond = Math.floor(ageInMilliSecond/1000);
    const ageInMinute = Math.floor(ageInSecond/60);
    const ageInHour = Math.floor(ageInMinute/60);
    const ageInDay = Math.floor(ageInHour/24);
    const ageInWeek = Math.floor(ageInDay/7);
    const AgeInMonth = Math.floor(ageInDay/30.436875);
    const AgeInYear = Math.floor(ageInDay/365.25);

    const resultContainer = document.getElementById("resultContainer");
    const result = document.getElementById("result");
    result.innerHTML = `

         <div class="result-items">
         <h3>Age</h3>
         <p>${AgeInYear} Years ${AgeInMonth % 12}Months ${ageInDay % 30} Days</p>
         </div>

           <div class="result-items">
         <h3>Months passed:</h3>
         <p>${AgeInMonth}</p>
         </div>

          <h3>Weeks passed:</h3>
         <p>${ageInWeek}</p>
         </div>

          <h3>Days passed:</h3>
         <p>${ageInDay}</p>
         </div>

          <h3>Hours passed:</h3>
         <p>${ageInHour}</p>
         </div>

          <h3>Minutes passed:</h3>
         <p>${ageInMinute}</p>
         </div>

          <h3>Seconds passed:</h3>
         <p>${ageInSecond}</p>
         </div>
         

          <h3>Milli Seconds passed:</h3>
          <p>${ageInMilliSecond}</p>
          </div>

    `;
    resultContainer.style.display= "block";


    
};

const ageCalculatorForm = document.getElementById("ageCalculator");

ageCalculatorForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    calculateAge();
});
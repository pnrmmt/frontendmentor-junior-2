
// inputs
let isValid=false;
const input_day =document.getElementById("day");
const input_month =document.getElementById("month");
const input_year =document.getElementById("year");

//outputs
const output_day= document.getElementById("DD");
const output_month= document.getElementById("MM");
const output_year= document.getElementById("YY");

// labels
const label_day=document.getElementById("labday")
const label_month=document.getElementById("labmonth")
const label_year=document.getElementById("labyear")

//errors
const error_day =document.querySelector(".error-day")
const error_month =document.querySelector(".error-month")
const error_year =document.querySelector(".error-year")

// submit buton
const submit_btn = document.querySelector(".submit-btn")
submit_btn.addEventListener("click", CalculateDate)

input_day.addEventListener("input", e=>{
    if(+input_day.value>31){
        error_day.innerHTML="Must be a valid date";
        input_day.style.border="1px solid hsl(0, 100%, 67%)";
        label_day.style.color="hsl(0, 100%, 67%)"
        isValid=false; 
        return;
    }else {
        error_day.textContent=""
        label_day.style.color="hsl(0, 1%, 44%)"
        isValid=true;
    }

    if(+input_day.value<=0){
        error_day.textContent="Must be a valid date";
        input_day.style.border="1px solid hsl(0, 100%, 67%)";
        isValid=false;
        return;
    }else {
        error_day.textContent=""
        label_day.style.color="hsl(0, 1%, 44%)"
        input_day.style.border="1px solid hsl(0, 0%, 86%)";
       
    }

    

})
input_month.addEventListener("input", e=>{
    if(+input_month.value > 12){
        error_month.textContent="Must be a valid date";
        label_month.style.color="hsl(0, 100%, 67%)"
        input_month.style.border="1px solid hsl(0, 100%, 67%)";
        isValid=false; 
        return;
    }else {
        error_month.textContent=""
        label_month.style.color="hsl(0, 1%, 44%)"
        input_year.style.border="1px solid hsl(0, 0%, 86%)";
        isValid=true;
    }

    if(+input_month.value <=0){
        error_month.textContent="Must be a valid date";
        input_month.style.border="1px solid hsl(0, 100%, 67%)";
        isValid=false;
        return;
    }else {
        error_month.textContent=""
        label_month.style.color="hsl(0, 1%, 44%)"
        input_month.style.border="1px solid hsl(0, 0%, 86%)";
       
    }

    

})
input_year.addEventListener("input", e=>{
    if(+input_year.value>2023){
        error_year.textContent="Must be a valid date";
        input_year.style.border="1px solid hsl(0, 100%, 67%)";
        label_year.style.color="hsl(0, 100%, 67%)"
        isValid=false; 
        return;
    }else {
        error_year.textContent=""
        label_year.style.color="hsl(0, 1%, 44%)"
        input_year.style.border="1px solid hsl(0, 0%, 86%)";
        isValid=true;
    }

    if(+input_year.value<=0){
        error_year.textContent="Must be a valid date";
        input_year.style.border="1px solid hsl(0, 100%, 67%)";
        isValid=false;
        return;
    }else {
        error_year.textContent=""
        label_year.style.color="hsl(0, 1%, 44%)"
       
    }

})

function CalculateDate(){
    if(isValid){
        let birthday = `${input_month.value}/${input_day.value}/  ${input_year.value}`;
        console.log(birthday);
       
        let birthdayObj = new Date(birthday);
        let ageMil = Date.now()-birthdayObj;
        // ageMil burada iki tarih arasındaki milisaniye farkını ifade ediyor
        // ageDate ile milisaniye olan kısmı tarih objesine dönüştürdük
        let ageDate = new Date(ageMil);
        let ageYears = ageDate.getUTCFullYear() -1970;
        let ageMonth = ageDate.getUTCMonth()
        let ageDay = ageDate.getUTCDate()-1
        output_day.textContent= ageDay;
        output_month.textContent=ageMonth;
        output_year.textContent=ageYears;
        label_day.style.color="hsl(0, 1%, 44%)"
        label_month.style.color="hsl(0, 1%, 44%)"
        label_year.style.color="hsl(0, 1%, 44%)"

    }else{
        label_day.style.color="hsl(0, 100%, 67%)"
        label_month.style.color="hsl(0, 100%, 67%)"
        label_year.style.color="hsl(0, 100%, 67%)"
        error_year.textContent="This field is required";
        error_day.textContent="This field is required";
        error_month.textContent="This field is required";
        input_day.style.border="1px solid hsl(0, 100%, 67%)";
        input_month.style.border="1px solid hsl(0, 100%, 67%)";
        input_year.style.border="1px solid hsl(0, 100%, 67%)";
  
    }
}

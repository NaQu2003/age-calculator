const dayInput = document.getElementById('days-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');
const form = document.querySelector('.form-js');
const errorDay = document.querySelector('.error-day');
const errorMonth = document.querySelector('.error-month');
const errorYear = document.querySelector('.error-year');
const arrow = document.querySelector('.arrow-js')
let days;
let months;
let years;
const yearsCalculation = document.querySelector('.years-number-js')
const monthsCalculation = document.querySelector('.months-number-js')
const daysCalculation = document.querySelector('.days-number-js')

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let actualDate = new Date();
    let day = dayInput.value;
    let month = monthInput.value;
    let year = yearInput.value;
    let dateFromUser = new Date(`${year}/${month}/${day}`);
    if (year ===''){
        errorYear.style.display = "block";
        errorYear.innerHTML ="This field is required"
    }
    else if(year>actualDate.getFullYear()){
        errorYear.style.display = "block";
        errorYear.innerHTML ="This year is in future"
    }
    else if(year<1970){
        errorYear.style.display = "block";
        errorYear.innerHTML ="Try something higher than 1969..."
    }else{
        errorYear.style.display = "none";
        errorYear.innerHTML =""
    }
    if(month ===''){
        errorMonth.style.display="block";
        errorMonth.innerHTML = "This field is required"
    }
    else if(month > 12 || month <0){
        errorMonth.style.display="block";
        errorMonth.innerHTML = "Must be a valid month"
    }
    else{
        errorMonth.style.display="none";
    }if(day ===''){
        errorDay.style.display="block";
        errorDay.innerHTML = "This field is required"
    }
    else if(day>31 || day<0){
        errorDay.style.display="block";
        errorDay.innerHTML = "Must be a valid day"
    }
    else if(Number(month) ===2 && Number(day)>29 && Number(year%4)===0){
        errorDay.style.display="block";
        errorDay.innerHTML = "Must be a valid day"
    }else if((Number(month) ===2 && Number(day)>28 && Number(year%4)!==0)){
        errorDay.style.display="block";
        errorDay.innerHTML = "Must be a valid day"
    }else if(Number(month) ===4 && day > 30 || day < 0){
        errorDay.style.display="block";
        errorDay.innerHTML = "Must be a valid day"
    }else if(Number(month) ===6 && day > 30 || day < 0){
        errorDay.style.display="block";
        errorDay.innerHTML = "Must be a valid day"
    }else if(Number(month) ===9 && day > 30 || day < 0){
        errorDay.style.display="block";
        errorDay.innerHTML = "Must be a valid day"
    }else if(Number(month) ===11 && day > 30 || day < 0){
        errorDay.style.display="block";
        errorDay.innerHTML = "Must be a valid day"
    }else{
        errorDay.style.display="none";
    }
    
    if(errorYear.style.display ==="none" && errorDay.style.display ==="none" && errorMonth.style.display ==="none"){
        days = Math.floor((actualDate-dateFromUser)/86400000);
        months = Math.floor((actualDate-dateFromUser)/2629746000);
        years =  Math.floor((actualDate-dateFromUser)/31556952000);
        daysCalculation.innerHTML =`${days}`;
        monthsCalculation.innerHTML =`${months}`;
        yearsCalculation.innerHTML =`${years}`;
    }
    

  
    
})

const month=document.querySelector('.month');
const weekday=document.querySelector('.weekday');
const day=document.querySelector('.day');
const year=document.querySelector('.year');

window.addEventListener("DOMContentLoaded",()=>{
    const date= new Date();
    day.textContent=date.getDate();
    year.textContent=date.getFullYear();
    month.textContent=date.toLocaleDateString"en-US",(month:"lo")
})
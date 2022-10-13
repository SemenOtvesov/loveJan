'use strict'
const inputName = document.querySelector('[name = nameInput]');
const inputTell = document.querySelector('[name = telInput]');
const inputDatum = document.querySelector('.forms__data');
const hidenWindow = document.querySelector('.hidenWindow')

const voterValidator = { 
    set: function(obj, prop, value) {
        if (prop === "valueName") { 
            if ((!value.match('^[а-яА-ЯёЁ0-9]+$'))&&(!!value)) {
            	obj.input.parentElement.classList.add('active')
            } else {
            	obj.input.parentElement.classList.remove('active')
            }
        };
        if(prop === "valueTell"){
            if(value.match('^\\+\\w+\\s')){
                inputTell.value = ++obj[prop]
            }
            if((!value.match('^[0-9\\s\\+\\-]+$'))&&(!!value)){
                obj.tell.parentElement.classList.add('active')
            }else{
                obj.tell.parentElement.classList.remove('active')
            }
            if((!value.match('[\\s+\-]'))&&(value.length >= 12)){
                obj.tell.parentElement.classList.add('active')
            }else if(value.length >= 16){obj.tell.parentElement.classList.add('active')}
        }
        
        // The default behavior to store the value 
        obj[prop] = value; 
        // Indicate success 
        return true; 
    } 
}; 
let proxy = new Proxy({}, voterValidator);
proxy.input = inputName;
proxy.tell = inputTell;

inputName.addEventListener('input', e => {
	proxy.valueName = e.target.value;
})
inputDatum.addEventListener('input', e =>{
    proxy.valueDatum = e.target.value
})
inputTell.addEventListener('input', e => {
	proxy.valueTell = e.target.value;
})

inputDatum.addEventListener('input', (event)=>{
    if(event.target.value === '2021-08-27'){
        hidenWindow.classList.add('active')
        
    }
})

const hidenWindowButton = document.querySelector('.hidenWindow__button');

hidenWindowButton.addEventListener('click', ()=>{
    document.querySelector('.hidenWindow').classList.add('active')
    setTimeout(()=>{
        document.querySelector('.hidenWindow').classList.add('remove')
    }, 500)
})
function getNumberOfDays(start, end) {
    const date1 = new Date(start);
    const date2 = new Date(end);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}


const text = document.querySelector('.hidenWindow__text');
text.innerHTML = `Котёночек я давненько не делав сайтики для тебя, так цто дя. сегодня узе ${getNumberOfDays("8/27/2021", new Date())} дней как мы вместе, и я тесно отень сина пресина рад тому что ты у меня есть. тяк тито дя довай и дальше будем идти по жизни вместе, ведь я просто не представляю ёё без тебя ♡♡♡♡♡♡♡♡♡♡` 

let scrollWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth
);
if(scrollWidth < 1025){
    document.querySelector('.hidenWindow__background').innerHTML = '<img src="img/фон-средний.png" alt="">'
}
if(scrollWidth < 769){
    document.querySelector('.hidenWindow__background').innerHTML = '<img src="img/фон_малый.png" alt="">'
}
if(scrollWidth < 426){
    document.querySelector('.hidenWindow__background').innerHTML = '<img src="img/фон-малый.png" alt="">'
}
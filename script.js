let secund = document.querySelector('.central-dot');
let minute = document.querySelector('.minute-line');
let hour = document.querySelector('.hour-line');
let testElement = document.querySelector('.pragraph');

let secundCounter = 0;
let minuteCounter = 0;
let hourCounter = 0;

const sekundLine = setInterval(() => {
    const date = new Date();
    const hourTest = date.getHours().toString();
    const minuteTest = date.getMinutes().toString();
    const secondTest = date.getSeconds().toString();
    const timeTest = `${hourTest.padStart(2, '0')}:${minuteTest.padStart(2, '0')}:${secondTest.padStart(2, '0')}`;
    
    let allSeconds = ((hourTest-3) * 3600 + (minuteTest-15) * 60 + (secondTest-915)) - 10800;
    let allMinutes = ((hourTest-3) * 3600 + (minuteTest-15) * 60);
    let allHours = ((hourTest-3) * 3600 + ((minuteTest-15) * 60) );

    testElement.textContent = timeTest;

    secundCounter = allSeconds * 6;
    minuteCounter = allMinutes * 0.1;
    hourCounter = (allHours * 0.0083);

    secund.style.rotate = `${secundCounter}deg`;
    minute.style.rotate = `${minuteCounter}deg`;
    hour.style.rotate = `${hourCounter}deg`;
}, 1000);

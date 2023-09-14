// console.log('hello');


const Festivals = [
    {
        id: "1",
        name: "New Year",
        date: "01-01-2024"
    },
    {
        id: "2",
        name: "Maha Shiva Ratri",
        date: "02-12-2024"
    },
    {
        id: "3",
        name: "Ugadi",
        date: "03-14-2024"
    },
    {
        id: "4",
        name: "Sri Rama Navami",
        date: "04-10-2024"
    },
    {
        id: "5",
        name: "Labour Day",
        date: "05-01-2024"
    },
    {
        id: "6",
        name: "Eid-Ul-Fitr",
        date: "06-15-2024"
    },
    {
        id: "7",
        name: "Independence Day",
        date: "07-15-2024"
    },
    {
        id: "8",
        name: "Ganesh Chathurthi",
        date: "09-10-2024"
    },
    {
        id: "9",
        name: "Dusshera",
        date: "10-15-2024"
    },
    {
        id: "10",
        name: "Kannada Rajyotsava",
        date: "11-01-2024"
    },
    {
        id: "11",
        name: "Deepawali",
        date: "11-21-2024"
    },
    {
        id: "12",
        name: "Christmas",
        date: "12-25-2024"
    },

]
const cat = localStorage.getItem("Festival");
// console.log(cat)
const fest = (id) => Festivals.filter(x => x.id === id);
const festival = fest(cat);

// console.log('festival', festival[0])
const newYear = festival[0].date;
const newName = festival[0].name;



function countdown() {
    const newDate = new Date(newYear);
    const curDate = new Date();
    // console.log(newYear, newDate, curDate);

    const remaining = (newDate.getTime() - curDate.getTime())/1000;
    
    const remSeconds = Math.ceil(remaining % 60);

    const remMinutes = Math.ceil(remaining/ 60)% 60;
    const remHours = Math.ceil(remaining /3600) % 24;
    const remDays = Math.ceil(remaining/ 3600 / 24);

    // console.log(remDays, remHours, remMinutes, remSeconds);
    document.getElementById('countdown-days').innerHTML = remDays;
    document.getElementById('countdown-heading').innerHTML = `Happy ${newName}`;
    document.getElementById('countdown-hours').innerHTML = remHours;
    document.getElementById('countdown-minutes').innerHTML = remMinutes;
    document.getElementById('countdown-seconds').innerHTML = remSeconds;

    
}




 setInterval(countdown, 1000);
//  timedRefresh(10);
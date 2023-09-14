const currYear = new Date().toString().split(' ')[3];
console.log(currYear)

document.getElementById('year-id').innerHTML = currYear;



function clicked(item) {
    console.log('clicked')
    localStorage.clear();

    localStorage.setItem("Festival", `${item}`);

}


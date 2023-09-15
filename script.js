const val = document.querySelector('form'); 
const result = document.querySelector('h3');
val.addEventListener('submit', (e) =>{
    e.preventDefault();
    let height = parseInt(document.querySelector("#Height").value);
    let weight = parseInt(document.querySelector("#Weight").value);
    if(height === '' || isNaN(height) || height <= 0){
        result.textContent = "Please Enter Correct Height"
    }
    else if(weight === '' || isNaN(weight) || weight <= 0){
        result.textContent = "Please Enter Correct Weight"
    }
    else {
        const re = (weight / ((height*height)/10000)).toFixed(2)
        result.textContent = `Your BMI is ${re} kg/m2`;
    }
})
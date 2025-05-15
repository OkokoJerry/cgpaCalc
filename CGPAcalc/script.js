//ARRAYS AND VARIABLES THAT WILL BE UPDATED TO GET TOTAL GRADE UNITS AND GRADE POINTS.
let sum = 0;
let results = [];
let unitSum = 0;
let gradeUnits = [];

//VARIABLES USED TO RETURN THE CALCULATED RESULT IN HTML

let comment = document.getElementById('comment');
let myComment = document.getElementById('myComment');

//FUNCTION THAT WILL BE CALLED TO DISPLAY THE G.P.A.

const display = (finalResult) => {
    document.getElementById('res').innerHTML = `Your G.P.A is ${finalResult}`;
}
//FUNCTION CALLED WHEN THE BUTTON IS CLICKED.

const doMath = () => {
    // ITERATION TO GET THE VALUES FOR EACH VALID INPUT FIELD.
    for (let i = 0; i < 10; i++) {
        let unit = document.getElementById('unit' + i).value;
        let grade = document.getElementById('grade' + i).value;
        let y = grade.toUpperCase();

// THE SCHOOL'S GRADING SYSTEM.

        if(y == "A") {
            y = 5;
        } else if(y == "B") {
            y = 4;
        } else if(y == "C") {
            y = 3;
        } else if(y == "D") {
            y = 2;
        } else if(y == "E") {
            y = 1;
        } else if(y == "F") {
            y = 0;
        }
        else if(y == "") {
            
        } else{
            alert("Invalid Grade Input.");
            return 0;
        }


// CONDITIONAL FOR HANDLING FIELDS CONTAINING NULL OR NEGATIVE VALUES.

        if(unit >= 0){
            let z = unit * y;
            gradeUnits.push(unit);
            if(!unit && !grade){
                z = null;
            }
            document.getElementById('result' + i).value = z;
            results.push(z);
        } else if(unit < 0){
            alert('Negative values are invalid.');
            return 0;
        }
    }

//UPDATING EARLIER DECLARED VARIABLES AS THEIR RESULTS WILL BE USED.

    for (let g = 0; g < gradeUnits.length; g++) {
        let val = 0;
        val = gradeUnits[g] * 1;
        unitSum = val + unitSum;
    }
    for (let j = 0; j < results.length; j++) {
        sum = sum + results[j];
    }
    let totalSum = sum;
    let totalUnits = unitSum;
    let cgpa = parseFloat(totalSum / totalUnits).toFixed(2);

// DIFFERENT INNTER-HTMLs DISPLAYED BASED ON THE SCHOOL'S GRADING SYSTEM.

    if(cgpa){
        if (cgpa >= 4.5) {
            display(cgpa);
            comment.innerHTML = 'Whoa. A first class student? Keep it up buddie. Bravo.';
        } else if(cgpa <= 4.49 && cgpa >= 3.5){
            display(cgpa);
            comment.innerHTML = `A second class upper is very amazing. Not alot of people get ${cgpa} C.G.P.A. Congratulations, buddie.`
        }else if(cgpa <= 3.49 && cgpa >= 2.40){
            display(cgpa);
            comment.innerHTML = `A second class lower isn't bad. ${cgpa} is a good start. You can always get back up.`
        }else if(cgpa <= 2.39 && cgpa >= 1.5){
            display(cgpa);
            comment.innerHTML = `A third class is a fair start. You can do this, my guy!!!`
        }else if(isNaN(cgpa)){
            alert('All fields can not be empty.');
            return 0;
        }
        else{
            display(cgpa);
            comment.innerHTML = `It's never too late to get back on your feet, bruhh.`
        }
        document.getElementById('button').style.display = 'none';
    }else{
        alert('All fields can not be empty.');
    }
}
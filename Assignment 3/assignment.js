const randomNumber1 = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumber2 = Math.random();

function ControlStructures(){
    //Task 1 - Show alert when randomNumber is > 0.7
    if(randomNumber1 > 0.7){
        alert(`Random Number is greater than 0.7. The Number is - ${randomNumber1}`);
        console.log(`Random Number is greater than 0.7. The Number is - ${randomNumber1}`);
    }

    //Task 4 - show an alert in two different scenarios: Both are greater 0.7 OR 
    //at least one of the two is NOT greater than 0.2.
    if(randomNumber1 > 0.7 && randomNumber2 > 0.7 || (randomNumber1 < 0.2 || randomNumber2 < 0.2)){
        if(randomNumber1 > 0.7 && randomNumber2 > 0.7){
            alert(`Both random numbers are greater than 0.7. The Numbers are - ${randomNumber1}, ${randomNumber2}`);
            console.log(`Both random numbers are greater than 0.7. The Numbers are - ${randomNumber1}, ${randomNumber2}`);
        }
        else if(randomNumber1 < 0.2 || randomNumber2 < 0.2){
            alert(`One of the random numbers is less than 0.2. The Numbers are - ${randomNumber1}, ${randomNumber2}`);
            console.log(`One of the random numbers is less than 0.2. The Numbers are - ${randomNumber1}, ${randomNumber2}`);
        }

    }
    console.log (randomNumber1 + " " + randomNumber2);
}

function IterateArrayOfNumbers(){
    const arrayNumber = [2,4,6,8,10];

    console.log("for Loop");
    //for(let i = 0 ; i < arrayNumber.length ; i++){
    //    console.log(arrayNumber[i]);
    //}
    for(let i = (arrayNumber.length - 1) ; i >= 0 ; i--){
        console.log(arrayNumber[i]);
    }

    console.log("for-of Loop");
    for (const number of arrayNumber)
    {
        console.log(number);
    }
}

//Task 2 - Create 2 types of for iterations
//Task 3 - Update 1 for loop to display max index to 0 index
IterateArrayOfNumbers();
//Task 1
ControlStructures();
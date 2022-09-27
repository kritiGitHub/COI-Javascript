const task3Element = document.getElementById('task-3');

function ShowRandomText(){
    alert("Hi Default function");
}

function ShowTextWithParameter(name){
    alert("Hi function with Parameter - " + name);
}

function Input3StringsOutputString(name1, name2, name3){
    alert(`Hi function with 3 Parameter - ${name1} ${name2} ${name3}`);
}

ShowRandomText();
ShowTextWithParameter("Kriti");
Input3StringsOutputString("Javascript", "TypeScript", "Angular");

task3Element.addEventListener("click", ShowRandomText);
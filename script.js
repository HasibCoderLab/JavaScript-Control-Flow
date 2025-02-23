// ========================
//      ***** Practice Problem 1 *****
// ======================== 

const chekeLength = (name) =>{
    if(name.length > 6){
        return "Accept your idea"
    }
    else{
        return"Please change your idea"
    }
}
console.log(chekeLength("JavaScript"))
// Output:Accept your idea
console.log(chekeLength("HTML")) 
// Output: Please change your idea


// -----------------------------------------------------------------

// ========================
//      ***** Practice Problem 2 *****
// ======================== 

const whatLove = (love) =>{
    if(love === "Rose"){
       return "He/She  loves flowers.";
    }

    else if (love==="Coding"){
        return "He/She loves technology.";
    }

    else if(love === "Mother" || love === "Father"){
        return "He/She loves parents.";
    }
    else{
       return "He/She is not human.";
    }

}

console.log(whatLove("Rose"))
// Output: He/She  loves flowers.

console.log(whatLove(""))
// Output: He/She is not human.

console.log(whatLove("Coding"))
// Output: He/She loves technology.


// ----------------------------------------------------------------


// ========================
//      ***** Practice Problem 3 *****
// ======================== 


const checkNumber = (num) => num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero"
console.log(checkNumber(10));
// Output: Positive
console.log(checkNumber(-10));
// Output: Negative



// -------------------- Or   -------------------------------

const checkNum  = (num) =>{
if(num > 0){
    return "Positive"
}
else if(num < 0){
    return "Negative"
}
else{
    return "Zero"
}
}

console.log(checkNum(4));
// Output: Positive
console.log(checkNum(-1))
// Output: Negative



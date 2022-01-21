// Iteration 1: Names and Input

const hacker1 = `Stefan`
console.log(`The driver's name is ${hacker1}`)

const hacker2 = `Kamila`
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
 }
  else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }
  else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

  let newHacker1 = "";
for(let i=0; i < hacker1.lenght; i++){
  newHacker1 += hacker1[i] + " "
  
}
console.log(newHacker1.toUpperCase().trim())


let reversedHacker2 = "";
for(let i = hacker2.length -1, i >= 0; i--){
  reversedHacker2 += hacker2[i]
}
console.log(reversedHacker2[i])

// Iteration 3: Loops

let lowerCaseHacker1 = hacker1.toLowerCase()
let lowerCaseHacker2 = hacker2.toLowerCase()

if(lowercaseHacker1.localCompare(lowerCaseHacker2) === -1) {
  console.log(`The driver's name goes first.`)
} else if (lowercaseHacker1.localCompare(lowerCaseHacker2) === 1) {
  console.log(`Yo, the navigator goes first definitely.`)
} else {
  console.log(`What?! You both have the same name?`)
}


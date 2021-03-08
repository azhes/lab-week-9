let firstvariable = "hello"

let secondvariable = 9

const firstconstant = 25

const secondconstant = true

if (secondvariable === firstconstant) {
  console.log('they match')
} else {
  console.log('no luck')
}

secondvariable = 25

if (secondvariable === firstconstant) {
  console.log('they match')
} else {
  console.log('no luck')
}

for (let character of firstvariable) {
  console.log(character)
}

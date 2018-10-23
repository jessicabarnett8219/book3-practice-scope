// C IF FOR COOKIE

const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

for (let x = 0; x < cookies.length; x++) {
  let currentCookie = cookies[x]
  console.log(`Mmmmmmm.... that's a good ${currentCookie} cookie`)
}

// CONJUNCTION FUNCTION

const conjunction = function (firstWord, secondWord) {
  let conjoinedWord = `${firstWord} ${secondWord}`
  return conjoinedWord
}

let conjoinedWord = conjunction("Master", "Card")
console.log(conjoinedWord)

// MOD SQUAD

  const ModSquad = {
      "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
      "series": {
          "start": "1968",
          "end": "1973"
      }
  }

  let HTMLRepresentation = `<h1>The Mod Squad</h1>`

  ModSquad.members.forEach(member => {
      HTMLRepresentation += `<div>${member}</div>`
  })

  let container = document.querySelector(".show-info")
  container.innerHTML = HTMLRepresentation

  // SIMON SAYS
  // There are two separate scoping issues in this code. Remember, for and if are their own block scopes and if something is declared with let or const then that variable only exists in that scope.
  // TODO See about refactoring with total invalid declared inside loop
  
  const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]
  let totalInvalid = 0
  
  for (let k = 0; k < locations.length; k++) {
    let currentLocation = locations[k]
    if (currentLocation[0] > 2) {
      console.log("That location is invalid")
      totalInvalid += 1
    } 
}
console.log(`There were ${totalInvalid} invalid locations`)



// The llamaNamer function defines an internal function and your job is to rewrite this code so that the internal function gets returned.



const llamaNamer = () => {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)

    const namer = () => {
        let suffix = " the Llama"
        let name = possibleNames[randomizer]
        return name + suffix
    }
    return namer
}

const nameMaker = llamaNamer()
console.log(nameMaker)


  








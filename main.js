// Some software developers were contracted to build some code, but there weren't quite clear yet on how scope works. Your job to fix their code to stop all the error from being thrown.

const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

for (let x = 0; x < cookies.length; x++) {
  let currentCookie = cookies[x]
  console.log(`Mmmmmmm.... that's a good ${currentCookie} cookie`)
}

// 

const conjunction = function (firstWord, secondWord) {
  let conjoinedWord = `${firstWord} ${secondWord}`
  return conjoinedWord
}

let conjoinedWord = conjunction("Master", "Card")
console.log(conjoinedWord)

// 


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

  



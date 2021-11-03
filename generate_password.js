function sample(arr) {
  const index = Math.floor(Math.random()*arr.length)
  return arr[index]
}
function generatePassword(options) {
  //Define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // Create a collection to store things user picked up
  let collection = []
  if(options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }
  if(options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }
  if(options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }
  if(options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

  if(collection.length === 0) {
    return 'There is no valid character in your selection.'
  }
  //Remove things user doesn't need
  if(options.excludeCharacters) {
    collection = collection.filter(
      character => !options.excludeCharacters.includes(character)
      )
  }

  //Start generating password
  let password = ''
  for(let i = 0; i < Number(options.length); i++) {
    password += sample(collection)
  }
  return password

  //return pwd
  console.log('This function will generate password.')
}
// export generatePassword function for other files to use
module.exports = generatePassword
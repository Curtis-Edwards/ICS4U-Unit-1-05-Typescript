/*
 * will then calculate the length, so that the result
 * is exactly 1 board foot and return that value. 
 *
 * @author  Curtis Edwards
 * @version 1.0
 * @since   2024-02-27
 */

import { createPrompt } from 'bun-promptx'


function main(boardWidth, boardHeight) {
  let validInput = true 
  const boardWidthInt = parseInt(boardWidth.value || "-1")
  const boardHeightInt = parseInt(boardHeight.value || "-1")
  if (isNaN(boardWidthInt) == true || boardWidthInt < 0) {
    validInput = false
    console.log("Invalid input.")
  } else if (isNaN(boardWidthInt) == true || boardWidthInt < 0) {
    validInput = false
    console.log("Invalid input.")
  }
  return validInput
}

function boardFoot(, ) {
  
}

// input
const boardWidth = createPrompt("Enter the width(inches): ")
const boardHeight = createPrompt("Enter the height(inches):")

// Process
main(someNumber)
boardFoot(someNumber)

// constants & variables

while (1) {
  // input
  const userGuess = createPrompt("Guess a number between 1 - 6: ")
  const userGuessInt = parseInt(userGuess.value || "-1")
  // error check
  if (isNaN(userGuessInt) == true || userGuessInt < 1 || userGuessInt > 6) {
    console.log("Invalid input. (This won’t count as a guess)\n")
  } else {
    // process
    totalGuesses += 1
    if (userGuessInt > randomNumber) {
      console.log(`You guessed too high, try again!\n`)
    } else if (userGuessInt < randomNumber) {
      console.log(`You guessed too low, try again!\n`)
    } else {
      // output
      console.log(`Correct!\nTotal guesses: ${totalGuesses}`)
      break
    }
  }
}

console.log("\nDone.")

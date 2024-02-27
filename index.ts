/*
 * will then calculate the length, so that the result
 * is exactly 1 board foot and return that value. 
 *
 * @author  Curtis Edwards
 * @version 1.0
 * @since   2024-02-27
 */

import { createPrompt } from 'bun-promptx'


function main(boardWidthInt, boardHeightInt) {
  // error check
  let validInput = true 
  if (isNaN(boardWidthInt) == true || boardWidthInt < 0) {
    validInput = false
    console.log("Invalid input.")
  } else if (isNaN(boardWidthInt) == true || boardWidthInt < 0) {
    validInput = false
    console.log("Invalid input.")
  }
  return validInput
}


function boardFoot(boardWidthInt, boardHeightInt, validInput) {
  const boardLength = 144 / (boardWidthInt * boardHeightInt)
  console.log('The wood should be ${boardLength} inch(es) long.')
}


// input
const boardWidth = createPrompt("Enter the width(inches): ")
const boardWidthInt = parseInt(boardWidth.value || "-1")
const boardHeight = createPrompt("Enter the height(inches):")
const boardHeightInt = parseInt(boardHeight.value || "-1")

// Process
main(boardWidthInt, boardHeightInt)
if (validInput) {
  boardFoot(boardWidthInt, boardHeightInt)
}

console.log("\nDone.")

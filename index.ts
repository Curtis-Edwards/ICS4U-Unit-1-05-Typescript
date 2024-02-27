/*
 * will then calculate the length, so that the result
 * is exactly 1 board foot and return that value. 
 *
 * @author  Curtis Edwards
 * @version 1.0
 * @since   2024-02-27
 */

import { createPrompt } from 'bun-promptx'


function main(boardWidthFloat, boardHeightFloat) {
  // error check
  let validInput = true 
  if (isNaN(boardWidthFloat) == true || boardWidthFloat < 0) {
    validInput = false
  } else if (isNaN(boardHeightFloat) == true || boardHeightFloat < 0) {
    validInput = false
  }
  return validInput
}


function boardFoot(boardWidthFloat, boardHeightFloat) {
  const boardLength = 144 / (boardWidthFloat * boardHeightFloat)
  return boardLength
}


// input
const boardWidth = createPrompt("Enter the width(inches): ")
const boardWidthFloat = parseFloat(boardWidth.value || "-1")
const boardHeight = createPrompt("Enter the height(inches):")
const boardHeightFloat = parseFloat(boardHeight.value || "-1")

// Process
const validInput = main(boardWidthFloat, boardHeightFloat)
if (!validInput) {
  console.log("Invalid input.")
} else {
  const boardLength = boardFoot(boardWidthFloat, boardHeightFloat)
  // output
  console.log('The wood should be ${boardLength} inch(es) long.')
}

console.log("\nDone.")

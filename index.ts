/*
 * will then calculate the length, so that the result
 * is exactly 1 board foot and return that value. 
 *
 * @author  Curtis Edwards
 * @version 1.0
 * @since   2024-02-27
 */

import { createPrompt } from 'bun-promptx'


function main() {
  // input
  const boardWidth = createPrompt("Enter the width(inches): ")
  const boardWidthFloat = parseFloat(boardWidth.value || "-1")
  const boardHeight = createPrompt("Enter the height(inches): ")
  const boardHeightFloat = parseFloat(boardHeight.value || "-1")

  // error check
  let validInput = true 
  if (isNaN(boardWidthFloat) == true || boardWidthFloat < 0) {
    console.log("Invalid input.")
    validInput = false
  } else if (isNaN(boardHeightFloat) == true || boardHeightFloat < 0) {
    console.log("Invalid input.")
    validInput = false
  } else {
    let boardLength = boardFoot(boardWidthFloat, boardHeightFloat)
    console.log(`The wood should be ${boardLength} inch(es) long.`)
  }
}


function boardFoot(boardWidthFloat, boardHeightFloat) {
  const boardLength = 144 / (boardWidthFloat * boardHeightFloat)
  return boardLength
}


console.log("\nDone.")

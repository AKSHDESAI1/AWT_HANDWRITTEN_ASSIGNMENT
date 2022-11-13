const fs = require('fs')

// check if directory exists
const dir = './uploads'
if (fs.existsSync(dir)) {
  console.log('Directory exists!')
} else {
  console.log('Directory not found.')
}

// ---------------------------------------------------------------

// check if File exists
const path = "./package.json"
if (fs.existsSync(path)) {
    console.log('File exists!')
  } else {
    console.log('File not found.')
  }
// Node.js program to demonstrate the
// fs.access() method

// Import the filesystem module
const fs = require('fs');

// Allowing only read permission
console.log("Giving only read permission to the user");
fs.chmodSync("example_file.txt", fs.constants.S_IRUSR);

// Test the read permission
fs.access('example_file.txt', fs.constants.R_OK, (err) => {
    console.log('\n> Checking Permission for reading the file');
    if (err)
        console.error('No Read access');
    else
        console.log('File can be read');
});

// Test both the read and write permissions
fs.access('example_file.txt', fs.constants.R_OK
    | fs.constants.W_OK, (err) => {
        console.log('\n> Checking Permission for reading and writing to file');
        if (err)
            console.error('No Read and Write access');
        else
            console.log('File can be read and written');
    });

var user = {
    first_name: "AKSH",
    last_name: "DESAI",
    age: "19",
    department: 'CE'
};

// Display Object Properties 
console.log(Object.entries(user));

// Delete Second Property 
delete user.last_name

// Print Length of Objects 
console.log(Object.keys(user).length);

// 2. 
var arr = ['NodeJs', 'ReactJs', 'DenoJs', 'NestJs'];

arr.forEach(element => {
    console.log(element);
});
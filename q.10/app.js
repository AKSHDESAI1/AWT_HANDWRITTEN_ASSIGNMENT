// Created Database:- 
use emp

// Create Collection
db.createCollection("empl")

// 3. Insert Commands 
db.empl.insert([
    {no:1,name:"ST",salary:2000,role:"OB"},
    {no:2,name:"MSD",salary:1500,role:"WK"},
    {no:3,name:"YS",salary:1000,role:"ALR"},
    {no:4,name:"RD",salary:1000,role:"MOB"},
    {no:5,name:"RS",salary:500,role:"OB"},
    {no:6,name:"BK",salary:500,role:"MOB"},
    {no:7,name:"VK",salary:300,role:"BW"},
    {no:8,name:"JB",salary:400,role:"BW"},
    {no:9,name:"HP",salary:400,role:"ALR"},
    {no:10,name:"VS",salary:300,role:"OB"}])
    
// 4. Display Data in Proper Format
db.empl.find().pretty()

// 5. Update Salary Of Employee where Name is "ST" by +8000
db.empl.updateMany({"name":"ST"}, {$inc: {salary: 8000}})

// 6. Update Salary Of All Employee by giving an increment of +4000 each
db.empl.updateMany({}, {$inc: {salary: 4000}})

// 7. update role of "MSD" as "C and WK"
db.empl.updateOne({name: "MSD"}, {$set: {"role": "C and WK"}})

// 8. Add a New Field remark to document with name "RS" set Remark as WC
db.empl.updateMany({name: "RS"}, {$set: {remark: "WC"}})

// 9. Add a New Field As Number 11,name AK,Salary 10000,role coch without
// using insert statement. But for Doing So You should have a Record Added woth
// number 11.
db.empl.insertOne({no: 11})
db.empl.updateOne({no:11}, {$set: {"name": "AK", "salary": 10000, "role": "coch"}})

// 10. remove added New Field
db.empl.deleteOne({no: 11})

// 11. Update the Field "RD" by multiplying with salary by 2. 
db.empl.updateMany({name: "RD"}, {$mul: {salary: 2}})

// 12. To Find Document From the empl collection where name begins with S
db.empl.find({name: /^S/})

// 13. To Find Document From the empl collection where name begins with R
db.empl.find({name: /^R/})

// 14. To Find Document From the empl collection where name ends with K
db.empl.find({name: /K$/})

// 15. To Find Document From the empl collection where name ends with D
db.empl.find({name: /D$/})

// 16. To Find Document From the empl collection where name has S in any position
db.empl.find({name: /S/})

// 17. Display Documents where in empl collection Field have OB,MOB
db.empl.find({role: {$in: ["OB", "MOB"]}})

// 18. Display Documents where in empl collection Field not have OB,MOB
db.empl.find({role: {$nin: ["OB", "MOB"]}})

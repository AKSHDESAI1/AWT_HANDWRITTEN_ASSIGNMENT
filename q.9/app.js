[
    {
        "item": "journal", "qty": 25, "size": { "h": 14, "w": 21, "uom": "cm" }, "status":
            "A"
    },
    {
        "item": "notebook", "qty": 50, "size": { "h": 8.5, "w": 11, "uom": "in" },
        "status": "A"
    },
    {
        "item": "paper", "qty": 100, "size": { "h": 8.5, "w": 11, "uom": "in" }, "status":
            "D"
    },
    {
        "item": "planner", "qty": 75, "size": { "h": 22.85, "w": 30, "uom": "cm" },
        "status": "D"
    },
    {
        "item": "postcard", "qty": 45, "size": { "h": 10, "w": 15.25, "uom": "cm" },
        "status": "A"
    }
]

// 1. Insert following records into Inventory collection
db.inventory.insertMany([
    {
        "item": "journal", "qty": 25, "size": { "h": 14, "w": 21, "uom": "cm" }, "status":
            "A"
    },
    {
        "item": "notebook", "qty": 50, "size": { "h": 8.5, "w": 11, "uom": "in" },
        "status": "A"
    },
    {
        "item": "paper", "qty": 100, "size": { "h": 8.5, "w": 11, "uom": "in" }, "status":
            "D"
    },
    {
        "item": "planner", "qty": 75, "size": { "h": 22.85, "w": 30, "uom": "cm" },
        "status": "D"
    },
    {
        "item": "postcard", "qty": 45, "size": { "h": 10, "w": 15.25, "uom": "cm" },
        "status": "A"
    }
])

// 2. Find records from Inventory collections whose status is "D".
db.inventory.find({"status": "D"})

// 3. Retrieve records whose status either A or D
db.inventory.find( { status: { $in: [ "A", "D" ] } } )

// 4. Increment quantity by 5 if status value is A
db.inventory.updateMany({ status : "A"}, { $inc: {"qty": 5}})

// 5. Delete records if quantity is less than 50
db.inventory.deleteMany({qty: {$lt : 50}})
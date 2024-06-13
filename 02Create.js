// syntax : db.collectionName.insertOne()

// ? to insert one record
db.Managers.insertOne(
    { name: "Pratham", location: "Lucknow" }
)

// ? to insert many records
db.Managers.insertMany(
    [
        { name: "Ansh", location: "Kanpur" },
        { name: "Aryan", location: "Ambedkar Nagar" }
    ]
)

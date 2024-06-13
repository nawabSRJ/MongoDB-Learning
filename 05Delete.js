// ? deleting a single document
db.Managers.deleteOne(
    {name:"Aryan" , job:"Media Manager"}
)

// ? deleting multiple documents

db.Managers.deleteMany(
    {job : "Architect"},
)

// ? deletion based on existence of an attribute in documents
db.Managers.deleteMany(
    {job:{$exists:false}}
)
// * 👆 This will delete documents with no 'job' attribute


db.Managers.deleteMany(
    {job:{$exists:true}}
)
// * 👆 This will delete documents with 'job' attribute



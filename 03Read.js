// db.Managers.find() - fetches all records/documents in the collection

// db.Managers.find(name : "Srajan")
db.Managers.find({role : "Developer"})  // fetches all records with {role : Developer} key-value pair

db.Managers.find({role:"Developer"}).limit(2)   // fetches only 2 records - starting from the first entered to last entered

// .find({query} , {projection})
// query is like where clause of SQL and Projection is used to get specific attributes like 'SELECT' statement 
// Empty projection {} will give all attributes 

db.Managers.find({} , {name:true})  // this will return names from all the documents in the Managers collection


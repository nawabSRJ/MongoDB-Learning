// as of now , 'Aryan'(name) has not been assigned a role , so now let's do it
db.Managers.updateOne({name:"Aryan"} , {$set:{role:"Developer"}})
// Syntax :
// updateOne({filter} , {update})
// * Tip : It is safe to update by Object id , since two people can have the same name , or you should create your own distinct attribute like emp_id , unique_id something like that ~ SQL Primary key


// ? to remove a field : $unset
db.Managers.updateOne({name : "Aryan"} , {$unset:{location:""}})

// ? to increment a value : $inc
db.Managers.updateOne(
    {name : "Srajan"},
    {$inc:{age:1}}            // * increase the age by 1
)   
// ! when incrementing make sure the value is of int type , else error : "Cannot apply $inc to a value of non-numeric type." will be thrown


// ? to rename a field : $rename
// ! this will not update the value , it will update the field 
db.Managers.updateOne(
    {} , 
    {$rename:{"role":"job"}}
)

// ? to set the value to current date : $currentDate
db.Managers.updateOne(
    {name:"Priyanshu"},
    {$currentDate:{date_join:true}}
)


// ? if you want to insert a document given the condition it is not present when you update it , then you can use : "upsert" ~ upsert option allows the update operation to insert a new document if no document matches the filter. 
db.Managers.updateOne(
    {name:"Rohit"},
    {$set:{age : 32 , role : "HR"}},
    {upsert:true}
)

// * some trick testing 
db.Managers.updateOne(
    {name:"Rahul"},
    {$set:{name:"Virat",age : 28 , role : "HR"}},
    {upsert:true}
)   // here the name in the record finally is 'Virat'


// * --------------------- Updating Multiple Documents

// ? keep the filter parameter empty to update all
db.Managers.updateMany(
    {},
    {$set:{location:"Lucknow"}}
)
// * Note : this will set (or add if not present) the 'location' field in every document

// ? Many but selective
db.Managers.updateMany(
    {role:"HR"},
    {$set:{location:"WFH"}}
)

// ? renaming a field
db.Managers.updateMany(
    {},
    {$rename : {"role" : "job"}}
)

// ? to check if a field exists or not : $exists and then perform updation
db.Managers.updateMany(
    {location:{$exists : false}},
    {$set:{location:"Lucknow"}}
)

import mysql from 'mysql';


let db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'test'
});

db.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Database connection is a SUCCESS.......")
        
    }
})

export default db ;

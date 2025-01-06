import Database from 'better-sqlite3';
import bcrypt from 'bcrypt'
const db = new Database('../studietid.db', {verbose: console.log})

let saltRounds = 15



function getCurrentDate(){
    let date = new Date().toLocaleString('sv-SE', {timeZone: 'Europe/Oslo'})
    let startTime = date.toString().slice(0, 19).replace('T', ' ')
    console.log(startTime)
    startTime = startTime.replace(startTime.split(" ").pop(), "")

    return startTime
}



function checkDupes(selection, from, where, what){
    let sql = db.prepare(`SELECT ${selection} FROM ${from} WHERE ${where} = ?`)
    const info = sql.all(what)

    if (info.length > 0){ return true }
    return false

    //dupes exist if it returns true
}


function emailVerif(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailRegex.test(email) == true){
        if(checkDupes('email', 'user', 'email', email)){ return 1 } 
        return 0
    }
    return 2
    // if func returns true it means email is valid
}

async function logIn (email, password) {
    if(!checkDupes('email', 'user', 'email', email)){
        return false
    }

    let sql = db.prepare(`SELECT password FROM user WHERE email = ?`)
    const info = sql.all(email)

    const result = await bcrypt.compare(password, info[0].password)    
    return result
}

async function addUser(firstName, lastName, idRole, isAdmin, email, password){
    //hash password
    const hashed = await bcrypt.hash(password, saltRounds)

    let sql = db.prepare("INSERT INTO user (firstName, lastName, idRole, isAdmin, email, password) VALUES (?, ?, ?, ?, ?, ?)")
    const info = sql.run(firstName, lastName, idRole, isAdmin, email, hashed)
    
    return info.changes
}

function getUsers(){
    let sql = db.prepare("SELECT * FROM user")
    return sql.all()
}

function getUserByEmail(email){
    let sql = db.prepare("SELECT * FROM user WHERE email = ?")

    return sql.get(email)
}

function deleteUser(userId){
    //add verif
    let sql = db.prepare("DELETE FROM activity WHERE id = ?")
    sql.run(userId)

    sql = db.prepare("DELETE FROM user WHERE id = ?")
    sql.run(userId)
}

function regActivity(idUser, idSubject, idRoom){
    console.log(idUser)
    let date = new Date().toLocaleString('sv-SE', {timeZone: 'Europe/Oslo'})
    let startTime = date.toString().slice(0, 19).replace('T', ' ')
    startTime = startTime.slice(0, 19).replace('T', ' ');

    let sql = db.prepare("INSERT INTO activity (idUser, startTime, idSubject, idRoom) VALUES (?, ?, ?, ?)")
    const info = sql.run(idUser, startTime, idSubject, idRoom)

    return info.changes
}

function getDailyActivity(){    
    let sql = db.prepare(`SELECT idUser, startTime, idSubject, idRoom, idVerifiedby, room.name AS roomName, subject.name AS subjectName, user.firstName as firstName, user.lastName as lastName FROM activity 
        INNER JOIN room ON activity.idRoom = room.id 
        INNER JOIN subject ON activity.idSubject = subject.id
        INNER JOIN user ON activity.idUser = user.id
        WHERE startTime LIKE '%${getCurrentDate()}%'`)
    return sql.all()
}

function getAllActivity(){    
    let sql = db.prepare(`select * from activity`)
    return sql.all()
}

function getPersonalActivity(userId){
    let sql = db.prepare(`
        SELECT startTime, endTime, idSubject, idRoom, idVerifiedby, room.name AS roomName, subject.name AS subjectName FROM activity 
        INNER JOIN room ON activity.idRoom = room.id 
        INNER JOIN subject ON activity.idSubject = subject.id 
        WHERE idUser = ?`)
    let result = sql.all(userId)

    for (let i = 0; i < result.length; i++){
        if(!result[i].idVerifiedby){
            result[i].idVerifiedby = "Unverified"
        } else{
            result[i].idVerifiedby = "Verified"
        }

        if(!result[i].endTime){
            result[i].endTime = "none"
        }
    }
    return result
}

function verifyActivity(id){
    //change verified by in the future
    let sql = db.prepare(`UPDATE activity SET idVerifiedby = 4 WHERE startTime LIKE '%${getCurrentDate()}%' AND idUser = ?`)
    const info = sql.run(id)

    return info.changes
}

function addValidRoom(roomNumber){
    if(checkDupes('name', 'room', 'name', roomNumber)){ return 1 }

    let sql = db.prepare("SELECT email FROM user WHERE email = ?")
    sql.all(roomNumber)

    sql = db.prepare("INSERT INTO room (name) VALUES (?)")
    sql.run(roomNumber)
}

function getSubjects(){
    let sql = db.prepare("SELECT * FROM subject")
    return sql.all()
}

export default function getRooms(){
    let sql = db.prepare("SELECT * FROM room")
    return sql.all()
}


//module.exports = {
//    addUser,
//    logIn,
//    deleteUser,
//    emailVerif,
//    addValidRoom,
//    verifyActivity,
//    regActivity,
//    checkDupes,
//    getUsers,
//    getSubjects,
//    getRooms,
//    getDailyActivity,
//    getAllActivity,
//    getPersonalActivity,
//    getUserByEmail
//}
<script setup>
/*     const usersList = document.getElementById('userList')
const verifiedActivitiesList = document.getElementById('verifiedActivitiesList')
const unverifiedActivitiesList = document.getElementById('unverifiedActivitiesList')

const activityToggleBtn = document.getElementById('activityToggle')
// 0 == todays activity
// 1 == all activity
let activityToggle = 0 

function clearActivity(){
    unverifiedActivitiesList.innerHTML = `
    <tr>
        <th>Name</th>
        <th>Subject</th>
        <th>Room</th>
        <th>Activity Start</th>
        <th>Verify Activity</th>
    </tr>
    `

    verifiedActivitiesList.innerHTML = `
    <tr>
        <th>Name</th>
        <th>Subject</th>
        <th>Room</th>
        <th>Activity Start</th>
        <th>Verified By </th>
    </tr>
    `
}


async function verifyActivity(id){
    const info = {id: id}

    try{
        const res = await fetch('/api/verifyActivity', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(info)
        })
        
        const data = await res.json()

        if(data.error) {
            alert("Error: " + data.error)
            return
        }
        alert("Great success! " + data.success)
        loadDailyActivities()
        
    }
    catch(error){
        alert('error: a problem has occured please try again.')
        console.error('error: ', error)
    }
}


async function loadDailyActivities(e) {
    const res = await fetch('/api/getDailyActivity')

    const data = await res.json()

    renderDailyActivity(data)   
}

function renderDailyActivity(data){
    clearActivity()
    let verifiedActivity = ""
    let unverifiedActivity = ""
    for(const activityInfo of data){
        if(activityInfo.idVerifiedby){
            verifiedActivity += `
            <tr>
                <td><p class="firstName">${activityInfo.firstName}</p> <p class="lastName">${activityInfo.lastName}</p></td>
                <td>${activityInfo.subjectName}</td>
                <td>${Math.trunc(activityInfo.roomName)}</td>
                <td>${activityInfo.startTime}</td>
                <td>${activityInfo.idVerifiedby}</td>
            </tr>
            `
        } else{
            unverifiedActivity += `
            <tr>
            <td><p class="firstName">${activityInfo.firstName}</p> <p class="lastName">${activityInfo.lastName}</p></td>
            <td>${activityInfo.subjectName}</td>
            <td>${Math.trunc(activityInfo.roomName)}</td>
            <td>${activityInfo.startTime}</td>
            <td><button class="verificationBtn" onclick="verifyActivity(${activityInfo.idUser})">Verify</button></td>
            </tr>
            `
        }
    }

    verifiedActivitiesList.innerHTML += verifiedActivity
    verifiedActivitiesList.innerHTML += `<tr id="noResult"><td colspan="6">no verified activity</td></tr>`

    unverifiedActivitiesList.innerHTML += unverifiedActivity
    unverifiedActivitiesList.innerHTML += `<tr id="noResult"><td colspan="7">no registered activity</td></tr>`

    searchFilter(verifiedActivitiesList)
    searchFilter(unverifiedActivitiesList)
}


function searchFilter(list, searchBarId){
    console.log(searchBarId)
    const searchBar = document.getElementById(searchBarId)
    filter = searchBar.value.toUpperCase();
    var target = {
        firstName: list.getElementsByClassName("firstName"), 
        lastName: list.getElementsByClassName("lastName") 
    }
    var targetParent = list.getElementsByTagName("tr")

    for(let i = 0; i < target.firstName.length; i++){
        const result = {
            firstName: target.firstName[i].innerText, 
            lastName: target.lastName[i].innerText 
        }

        if(result.firstName.toUpperCase().indexOf(filter.toUpperCase()) > -1 || result.lastName.toUpperCase().indexOf(filter.toUpperCase())  > -1 ){
            targetParent[i+1].classList.remove("hidden")
            targetParent[i+1].classList.add("shown")
        } else { 
            targetParent[i+1].classList.remove("shown")
            targetParent[i+1].classList.add("hidden")
        }
    }

    var cssFix = list.getElementsByClassName("shown")
    const noResult = document.getElementById("noResult")

    noResult.classList.add("hidden")
    noResult.classList.remove("shown")
    
    if(cssFix.length > 0){
        for(let i = 0; i < cssFix.length; i++){
            cssFix[i].classList.remove('tableBgColor', 'lastRow')
            if(i % 2 === 1){
                cssFix[i].classList.add('tableBgColor')
            }
        }
        cssFix[cssFix.length-1].classList.add('lastRow')
    } else{
        noResult.classList.remove("hidden")
        noResult.classList.add("shown")
    }
}


//function renderAllActivity(data){
//    let activity = ""
//    for(let i = 0; data.length > i; i++){
//        activity += `
//        <tr>
//            <td>${data[i].idUser}</td>
//            <td>${data[i].idSubject}</td>
//            <td>${data[i].idRoom}</td>
//            <td>${data[i].startTime}</td>
//            <td>${data[i].endTime}</td>
//            <td>${data[i].idVerifiedby}</td>
//            <td></td>
//        </tr>
//        `
//    }
//    activitiesList.innerHTML += activity
//}

loadDailyActivities() */
</script>

<template>
<h1>Admin dashboard</h1>
    <div class="main-container">
        <div class="secondary-container container-1">
            <div class="container container-1">
                <h1>Pending Activity</h1>
                <input type="text" id="searchBar1" placeholder="Search by name" onkeyup="searchFilter(unverifiedActivitiesList, 'searchBar2')">
            </div>

            <div class="container container-2">
                <table id="unverifiedActivitiesList">
                </table>
            </div>
        </div>    

        <div class="secondary-container container-2">
            <div class="container container-1">
                <h1>Verified Activity</h1>
                <input type="text" id="searchBar2" placeholder="Search by name" onkeyup="searchFilter(verifiedActivitiesList, 'searchBar1')">
            </div>

            <div class="container container-2">
                <table id="verifiedActivitiesList">
                </table>
            </div>
        </div>    
    </div>
</template>

<style scoped>
body {
    background-color: whitesmoke;
    font-family:Arial, Helvetica, sans-serif;
}

button{
    font-size: 2vh;

    background-color: #0071c5;
    color: white;

    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.288);
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.144) inset;

    border: none;
    border-radius: 0.75vh;
    padding: 0.75vh 1vh;
    width: 100%;
    

    position: relative;
    padding: 0;
}

button:hover{
    cursor: pointer;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.425) inset;
    
}

table{
    text-align: left;
    box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.123);
    border-spacing: 0;
    background-color: white;
    border-radius: 1vh;
    width: 100%;
}

th {
    background-color: rgba(0, 0, 0, 0.158);
}

th, td{
    border: 0.125vh rgba(170, 170, 170, 0.575) solid;
    padding: 5px 8px;
}

table tr:first-child th:first-child {
    border-top-left-radius: 1vh;
}

table tr:first-child th:last-child {
    border-top-right-radius: 1vh;
}

.lastRow td:first-child {
    border-bottom-left-radius: 1vh;
}
    
.lastRow td:last-child {
    border-bottom-right-radius: 1vh;
}

.tableBgColor td {
    background-color: rgba(211, 211, 211, 0.432);
}

.hidden{
    display: none;
}

#noResult{
    text-align: center;
}

#noResult td:first-child {
    border-bottom-left-radius: 1vh;
}

#noResult td:last-child {
    border-bottom-right-radius: 1vh;
}

.warn{
    text-align: center;
}

.main-container{
    display: grid;
    grid-template-areas: "1 2";
    gap: 5vh;
    margin: 10vh 5vh 5vh 5vh;
}

.secondary-container{
    display: grid;
    grid-template-areas: "1", "2";
    grid-template-columns: 100%;
    grid-template-rows: min-content;
    gap: 1vh;   
    border-radius: 1vh; 
    padding: 5vh 10vh 10vh 10vh;
    background-color: white;
    box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.158);
    text-align: center;
}

.container-1{
    grid-area: "1";
}

.container-2{
    grid-area: "2";
}

.container{
    margin: 0 auto;
}

.Unverified {
    background-color: rgba(255, 0, 0, 0.151);
}

.Verified {
    background-color: rgba(255, 0, 0, 0.151);
}

#activityRegForm{
    margin: 2.5vh 0 0 0;
}
</style>
<script setup>
/* const usersList = document.getElementById('userList')
const searchBar = document.getElementById('searchBar')

async function loadUsers(e) {
    const res = await fetch('/api/getUsers')

    const data = await res.json()

    renderUsers(data)   
}

function renderUsers(data){
    userList = ""
    for(const usrInfo of data){
       userList += `
        <tr>
            <td>${usrInfo.id}</td>
            <td class="firstName">${usrInfo.firstName}</td>
            <td class="lastName">${usrInfo.lastName}</td>
            <td>${usrInfo.idRole}</td>
            <td>${usrInfo.isAdmin}</td>
            <td>${usrInfo.email}</td>
        </tr>
        `
    }
    usersList.innerHTML += userList + `<tr id="noResult" class="hidden"><td colspan="7">No results found.</td></tr>`
    searchFilter()
}



// what is this... there is no way this is optimized
function searchFilter(){
    filter = searchBar.value.toUpperCase();
    var target = {
        firstName: usersList.getElementsByClassName("firstName"), 
        lastName: usersList.getElementsByClassName("lastName") 
    }
    var targetParent = usersList.getElementsByTagName("tr")

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

    var cssFix = usersList.getElementsByClassName("shown")
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

loadUsers()
 */
</script>

<template>
    <h1>Admin dashboard</h1>
    <div class="main-container">
        <div class="container container-1">
            <h1>User List</h1>
            <br>
            <input type="text" id="searchBar" placeholder="Search by name" onkeyup="searchFilter()">
        </div>
        <div class="container container-2">
            <table id="userList">
                <thead>   
                    <tr>
                        <th>User ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Role</th>
                        <th>Admin</th>
                        <th>e-Mail</th>
                    </tr>
                </thead>

                <tbody>
                    <!-- fix stufff -->
                </tbody>
            </table>
        </div>
    </div>
    <br>
</template>

<style scoped>
body {
    background-color: whitesmoke;
    font-family:Arial, Helvetica, sans-serif;
}

html{
    overflow-y: scroll;
}

input{
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.144) inset;
    border: rgba(0, 0, 0, 0.295) 0.1vh solid;
    border-radius: 0.5vh;
    font-size: 2vh;
    padding: 0.75vh;

    width: 30vh;
}

input:hover{
    cursor: pointer;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.082) inset;
}

table{
    text-align: left;
    box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.123);
    border-spacing: 0;
    background-color: white;
    border-radius: 1vh;
    width: 90vh;
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

.main-container{
    display: grid;
    grid-template-areas: "1", "2";
    grid-template-columns: 100%;
    grid-template-rows: min-content;
    gap: 3vh;
    margin: 10vh auto;
    border-radius: 1vh; 
    width: fit-content;
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
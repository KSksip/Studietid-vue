<script setup>
/* const signUp = document.getElementById('signUpForm')

signUp.addEventListener('submit', addUser)

async function addUser(e) {
    e.preventDefault()
    const user = {
        firstName: signUp.firstName.value,
        lastName: signUp.lastName.value,
        email: signUp.email.value,
        idRole: 2,
        isAdmin: 0,
        password: signUp.password.value
    }

    try{
        const res = await fetch('/api/regUser', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        
        const data = await res.json()

        if(data.error) {
            alert("Error: " + data.error)
            return
        }
        alert(data.success)

        if(data.redirect){
            window.location.replace('/login/')
        }
        
    }
    catch(error){
        document.getElementById('error').innerText = 'a problem has occured please try again.'
        console.error('error: ', error)
    }
}
 */
</script>

<template>
    <div class="container centered">
        
        <div class="container-2 centered">
            <form id="signUpForm">
            <h1>Sign Up</h1>
            <input type="text" id="firstName" placeholder="First Name">
            <input type="text" id="lastName" placeholder="Last Name">
            <input type="text" id="email" placeholder="Email">
            <input type="password" id="password" placeholder="Password">
            <button type="submit">Sign Up</button>            
        </form> 
        </div>

    </div>
</template>

<style scoped>
.centered{
    margin: auto;
    position: fixed;

    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}

.centeredLink{
    position: relative;
    margin-left: auto;
    margin-right: auto;
}

.container{
    width: 40vh;
    height: 55vh;

    border-radius: 1vh;

    background-color: white;

    box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.288);
}

.container-2{
    width: min-content;
    height: min-content;
    height: 45vh;

    display: grid;
    grid-template-rows: min-content;
    gap: 0.5vh;
}

.btnAlt{
    background-color: rgba(136, 136, 136, 0.5);
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.048) inset;
}

body {
    background-color: whitesmoke;
    font-family: Arial, Helvetica, sans-serif;
}

h1{
    font-weight: bolder;
    font-size: 6vh;
}

form{
    display: grid;
    grid-template-rows: min-content;
    gap: 1vh;
}

button{
    font-size: 2vh;

    background-color: #0071c5;
    color: white;

    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.288);
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.144) inset;

    border: none;
    border-radius: 0.75vh;
    padding: 0.75vh;
    width: 10vh;

    position: relative;
    margin-left: auto;
    margin-right: auto;
    
}

button:hover{
    cursor: pointer;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.425) inset;
    
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
</style>
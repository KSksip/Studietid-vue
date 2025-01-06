<script setup>
/* const logInForm = document.getElementById('logInForm')

logInForm.addEventListener('submit', logIn)

async function logIn(e) {
    e.preventDefault()

    const user = {
        email: logInForm.email.value,
        password: logInForm.password.value
    }

    try{
        const res = await fetch('/api/logIn', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        
        const data = await res.json()

        if(data.success){
            if(data.redirect){
                window.location.replace('/user/register-activity/')
            }
            return
            
        } else if(data.error) {
            alert("Error: " + data.error)
            return
        }        
    }
    catch(error){
        alert('a problem has occured please try again. ', error)
        console.error('error: ', error)
    }
} */
</script>

<template>
    <div class="container centered">
        <div class="container-2 centered">
            <div class="login">
                <form id="logInForm">
                    <h1>Log In</h1>
                    <input type="text" id="email" placeholder="Email">
                    <input type="password" id="password" placeholder="Password">
                    <button type="submit">Log In</button>            
                </form> 
            </div>
            <a href="/sign-up/" class="centeredLink"><button class="btnAlt">Sign Up</button></a>
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
    margin-top: 0.25vh;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
}

.container{
    width: 40vh;
    height: 50vh;

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
    font-family:Arial, Helvetica, sans-serif;
}

h1{
    font-weight: bolder;
    font-size: 5vh;
}

form{
    display: flex;
    flex-direction: column;
    gap: 1.25vh;
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
    width: 100%;

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
<script setup>

</script>

<template>
    <div>
        <div class="main-container">
            <div class="container container-1">
                <h1>Register Your Activity</h1>
                <form id="activityRegForm">
                    <select name="Room" id="rooms">
                        <option value="" disabled selected hidden>Room</option>
                    </select>
                    <select name="Subject" id="subjects">
                        <option value="" disabled selected hidden>Subject</option>
                    </select>
                    <button type="submit">Register</button>            
                </form> 
            </div>

            <div class="container container-2">
                <table id="allActivity">
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Room</th>
                            <th>Activity Start</th>
                            <th>Activity End</th>
                            <th>Activity Status</th>                        
                        </tr>
                    </thead>

                    <tbody>
                        <!-- might need to fix the css for this after adding thead and tbody -->
                    </tbody>
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

h1{
    font-weight: bolder;
    font-size: 4vh;
    margin: 0;
}

form{
    width: 100%;
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
    width: fit-content;

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

select{
    border: 0.25vh rgba(170, 170, 170, 0.575) solid;
    border-radius: 1vh;
    font-size: 2vh;
    padding: 0.5vh;
}

table{
    text-align: left;
    box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.123);
    border-spacing: 0;
    background-color: white;
    border-radius: 1vh;
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

table tr:last-child td:first-child {
    border-bottom-left-radius: 1vh;
}
    
table tr:last-child td:last-child {
    border-bottom-right-radius: 1vh;
}
table tr:nth-child(even) {
    background-color: rgba(211, 211, 211, 0.432);
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
    background-color: rgba(43, 255, 0, 0.151);
}

#activityRegForm{
    margin: 2.5vh 0 0 0;
}
</style>
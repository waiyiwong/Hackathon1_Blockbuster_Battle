document.addEventListener("DOMContentLoaded", function () {
    
    const userHighscore = document.querySelector("#highscore");
    const USER_HIGHSCORE_LS_KEY = localStorage.getItem("userHighScore")
    
    console.log(USER_HIGHSCORE_LS_KEY)
    userHighscore.innerText = USER_HIGHSCORE_LS_KEY;
    

});

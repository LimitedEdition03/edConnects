const acc1 = {
    owner: "Manan Kathuria",
    pin: 1111,
}
const acc2 = {
    owner: "Tanisha Singh",
    pin: 2222,
}

const acc3 = {
    owner: "Aaradhya Jain",
    pin: 3333,
}

const accounts = [acc1, acc2, acc3];

const btnLogin = document.querySelector(".btn__login");
const inputUsername = document.querySelector(".login__input--user");
const inputPassword = document.querySelector(".login__input--password");
const userLogin = document.querySelector(".userLogin");
const loginUser = document.querySelector(".loginUser");

const createUsername = function(accs){
    accs.forEach(function (acc){
        acc.userName = acc.owner.toLowerCase().split(" ").map(word=>word[0]).join("");
    });
};


createUsername(accounts);


btnLogin.addEventListener("click", function(e){
    e.preventDefault();
    
    currentAcc = accounts.find(acc=>acc.userName === inputUsername.value);

    if(currentAcc?.pin === Number(inputPassword.value)){
        window.location.href="/index.html";
        // window.location.href="index.html";
        // userLogin.classList.remove("hidden");
        // loginUser.classList.add("hidden");
    }
    else{
        alert("Wrong credentials");
    }
})

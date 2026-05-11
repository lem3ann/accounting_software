// ======================================= USER DB ================================================
const users = [{
        _id: 0.8627517565817807,
        userName: "Laman",
        password: "123"
    },
    {
        _id: 0.20055668015534123,
        userName: "Ayla",
        password: "test123"
    },
    {
        _id: 0.1485515983574851,
        userName: "Jale",
        password: "400000"
    },
    {
        _id: 0.4716810936934336,
        userName: "Fidan",
        password: "75867585"
    },
    {
        _id: 0.8716810936434336,
        userName: "Nurlana",
        password: "58858585"
    }
];
// USER AUTH
let mainForm = document.getElementsByTagName("form")[0];
let username = document.getElementById("userName");
let userPasswd = document.getElementById("pass");
let submitBtn = document.getElementsByClassName("submit")[0];
mainForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let userLogin = checkUserAuth(users);
    if (userLogin) {
        window.open("assets/pages/invoices.html")
    } else {
        alert("Wrong username or password");

    }
});

function checkUserAuth(user) {
    let validUser = user.find(x =>
        x.userName === username.value.trim() && x.password === userPasswd.value.trim()
    )

    username.value = "";
    userPasswd.value = "";
    setLocalStorage(JSON.stringify(validUser));
    return validUser;

}

function setLocalStorage(current) {
    localStorage.setItem("currentUser", current)
}


// =================================================== INCOME PAGE ==================================
// income array structure
/* arr=[{_id:29012993,incomeName:"Test","amount":43434,_userId:current}] */
let incomeArr = [];
let incomeForm = document.querySelectorAll(".income-form")[0];
let incomeName = document.getElementById("incomeName");
let incomeAmount = document.getElementById("amount");
const getCurrentUserId = JSON.parse(localStorage.getItem("currentUser"))._id;
incomeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    incomeArr.push({
        _id: Math.random(),
        incomeName: incomeName.value,
        amount: incomeAmount.value,
        _userId: getCurrentUserId
    });
    setLocalIncomeArr(JSON.stringify(incomeArr));


})

function setLocalIncomeArr(arr) {
    localStorage.setItem("income", arr);

}
// create table
let table = document.getElementsByClassName("main-table")[0];

function createTableRow(arr) {
    let newRow = document.createElement("tr");

}
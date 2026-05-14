// ======================================= USER DB ================================================
const users = [{
        _id: 0.2227517522217807,
        userName: "admin",
        password: "admin",
    },
    {
        _id: 0.8627517565817807,
        userName: "Laman",
        password: "1",
    },
    {
        _id: 0.20055668015534123,
        userName: "Ayla",
        password: "3",
    },
    {
        _id: 0.1485515983574851,
        userName: "Jale",
        password: "2",
    },
    {
        _id: 0.4716810936934336,
        userName: "Fidan",
        password: "5",
    },
    {
        _id: 0.8716810936434336,
        userName: "Nurlana",
        password: "6",
    },
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
        window.open("assets/pages/invoices.html");
    } else {
        alert(" 😡 Wrong username or password.Try Again");
    }
});

function checkUserAuth(user) {
    let validUser = user.find(
        (x) =>
        x.userName === username.value.trim() &&
        x.password === userPasswd.value.trim(),
    );

    username.value = "";
    userPasswd.value = "";
    setLocalStorage(JSON.stringify(validUser));
    return validUser;
}

function setLocalStorage(current) {
    localStorage.setItem("currentUser", current);
}
// create table
let table = document.getElementsByClassName("main-table")[0];
let _table = document.getElementsByClassName("main-table-2")[0];
let tBody = document.querySelector(".main-table tbody");
let _tBody = document.querySelector(".main-table-2 tbody");



// =================================================== INCOME PAGE ==================================
// income array structure

let incomeArr = [{
        _id: Math.floor(Math.random() * 10),
        transaction: "Business",
        amount: "2323",
        userId: "0.2227517522217807"
    },
    {
        _id: Math.floor(Math.random() * 10),
        transaction: "salary",
        amount: "2323",
        userId: "0.4716810936934336"
    },
    {
        _id: Math.floor(Math.random() * 10),
        transaction: "Profit ",
        amount: "2323",
        userId: "0.2227517522217807"
    },
    {
        _id: Math.floor(Math.random() * 10),
        transaction: "Earned",
        amount: "2323",
        userId: "0.2227517522217807"
    },
    {
        _id: Math.floor(Math.random() * 10),
        transaction: "businnes expense",
        amount: "2323",
        userId: "0.4716810936934336"
    },
    {
        _id: Math.floor(Math.random() * 10),
        transaction: "income",
        amount: "2323",
        userId: "0.4716810936934336"
    },
    {
        _id: Math.floor(Math.random() * 10),
        transaction: "income -Ayla",
        amount: "2323",
        userId: "0.20055668015534123"
    },
    {
        _id: Math.floor(Math.random() * 10),
        transaction: "capital",
        amount: "2323",
        userId: "0.4716810936934336"
    },
    {
        _id: Math.floor(Math.random() * 10),
        transaction: "salary",
        amount: "2323",
        userId: "0.8716810936434336"
    },
    {
        _id: Math.floor(Math.random() * 10),
        transaction: "active",
        amount: "2323",
        userId: "0.8627517565817807"
    },
    {
        _id: Math.floor(Math.random() * 10),
        transaction: "income -Jala",
        amount: "2323",
        userId: "0.1485515983574851"
    },
    {
        _id: Math.floor(Math.random() * 10),
        transaction: "income -Jala -v1",
        amount: "2323",
        userId: "0.1485515983574851"
    },
    {
        _id: Math.floor(Math.random() * 10),
        transaction: "income -Jala-business",
        amount: "2323",
        userId: "0.1485515983574851"
    },
    {
        _id: Math.floor(Math.random() * 10),
        transaction: "income -Jala ->salary",
        amount: "2323",
        userId: "0.1485515983574851"
    }
];
let index = 1;
let incomeForm = document.querySelectorAll(".income-form")[0];
let incomeName = document.getElementById("incomeName");
let incomeAmount = document.getElementById("amount");
const getCurrentUserId = JSON.parse(localStorage.getItem("currentUser"))._id;
incomeForm.addEventListener("submit", function (event) {
    if (!incomeName.value.trim() || !incomeAmount.value.trim()) {
        return;
    }
    event.preventDefault();
    let localData = {
        _id: Math.random(),
        transaction: incomeName.value.trim(),
        amount: incomeAmount.value.trim(),
        userId: getCurrentUserId,
    };
    incomeArr.push(localData);
    createTableRow([localData], tBody);
    incomeName.value = "";
    incomeAmount.value = "";
});
incomeArr = incomeArr.filter((x) => x.userId == getCurrentUserId);
createTableRow(incomeArr, tBody);

function setLocalIncomeArr(arr) {
    localStorage.setItem("income", arr);
}




// ========================================= MAIN PAGE NAVTABS =========================================
let allbtns = document.querySelectorAll(".tabs");
let allContent = document.querySelectorAll(".tabContent");
for (let j = 0; j < allbtns.length; j++) {
    allbtns[j].addEventListener("click", function () {
        for (let i = 0; i < allbtns.length; i++) {
            allbtns[i].classList.remove("btn-main-bg");
            allContent[i].style.display = "none";
        }
        allbtns[j].classList.add("btn-main-bg");
        allContent[j].style.display = "block";
    });
}
// Remove button function
function removeWithId() {
    let allRemoveButton = document.querySelectorAll(".trash-bg");
    allRemoveButton.forEach((element) => {
        element.addEventListener("click", function (event) {
            let deletedElement = event.currentTarget.parentNode.parentNode;
            deletedElement.remove();
            let deletedElementId =
                event.currentTarget.parentNode.parentNode.getAttribute("data-id");
            // filter methodu serti odemeyen elementi cixar arrayden
            incomeArr = incomeArr.filter((x) => x._id != deletedElementId);
            setLocalIncomeArr(JSON.stringify(incomeArr));
        });
    });
}
// ============================================Logout button  functionality =========================
let logoutBtn = document.getElementsByClassName("logout")[0];
logoutBtn.addEventListener("click", function () {
    console.log("test");
    window.close();
});

// ============================================ EXPENSE PAGE ===================================================

let expenseArr = [{
        _id: Math.floor(Math.random() * 10),
        transaction: "Business",
        amount: "21",
        userId: "0.2227517522217807"
    },
    {
        _id: Math.floor(Math.random() * 10),
        transaction: "salary",
        amount: "98",
        userId: "0.8627517565817807"
    },
    {
        _id: Math.floor(Math.random() * 10),
        transaction: "Profit ",
        amount: "49",
        userId: "0.2227517522217807"
    },
    {
        _id: Math.floor(Math.random() * 10),
        transaction: "Earned",
        amount: "90",
        userId: "0.2227517522217807"
    },
    {
        _id: Math.floor(Math.random() * 10),
        transaction: "businnes expense",
        amount: "70",
        userId: "0.2227517522217807"
    },
    {
        _id: Math.floor(Math.random() * 10),
        transaction: "income",
        amount: "50",
        userId: "0.4716810936934336"
    },
    {
        _id: Math.floor(Math.random() * 10),
        transaction: "income -Ayla",
        amount: "90",
        userId: "0.20055668015534123"
    },
    {
        _id: Math.floor(Math.random() * 10),
        transaction: "capital",
        amount: "30",
        userId: "0.8716810936434336"
    },
    {
        _id: Math.floor(Math.random() * 10),
        transaction: "salary",
        amount: "20",
        userId: "0.8716810936434336"
    },
    {
        _id: Math.floor(Math.random() * 10),
        transaction: "active",
        amount: "10",
        userId: "0.8627517565817807"
    },
    {
        _id: Math.floor(Math.random() * 10),
        transaction: "expense -Jala",
        amount: "499",
        userId: "0.1485515983574851"
    },
    {
        _id: Math.floor(Math.random() * 10),
        transaction: "expense -Jala -v1",
        amount: "150.50",
        userId: "0.1485515983574851"
    },
    {
        _id: Math.floor(Math.random() * 10),
        transaction: "expense -Jala-business",
        amount: "2000",
        userId: "0.1485515983574851"
    },
    {
        _id: Math.floor(Math.random() * 10),
        transaction: "expense -Jala ->salary",
        amount: "100",
        userId: "0.1485515983574851"
    }
];
let expenseForm = document.getElementsByClassName("expense-form")[0];
let expenseName = document.getElementById("expenseName");
let expenseAmount = document.getElementById("expenseAmount");
expenseForm.addEventListener("submit", function (event) {
    // if (!incomeName.value.trim() || !incomeAmount.value.trim()) {
    //     return;
    // }
    event.preventDefault();
    let localData = {
        _id: Math.random(),
        transaction: expenseName.value.trim(),
        amount: expenseAmount.value.trim(),
        userId: getCurrentUserId,
    };
    expenseArr.push(localData);
    createTableRow([localData], _tBody);
    setLocalIncomeArr(JSON.stringify(expenseArr));
    expenseName.value = "";
    expenseAmount.value = "";
});
expenseArr = expenseArr.filter((x) => x.userId == getCurrentUserId);
createTableRow(expenseArr, _tBody);


// icmome arr verilecek
function createTableRow(arr, z) {
    arr.forEach((element) => {
        let newRow = document.createElement("tr");
        newRow.setAttribute("data-id", element._id);
        let dataId = document.createElement("td");
        dataId.innerText = index;
        let dataName = document.createElement("td");
        dataName.innerText = element.transaction;
        let dataAmount = document.createElement("td");
        dataAmount.innerText = element.amount;
        let dataTime = document.createElement("td");
        dataTime.innerText = new Date().toLocaleDateString();
        let basket = document.createElement("td");
        basket.innerHTML = ` <div class="radius trash-bg"><i class="fa-solid fa-trash"
                                            style="color: rgb(193, 11, 38);"></i></div>`;
        newRow.append(dataId, dataName, dataAmount, dataTime, basket);
        z.append(newRow);
        index++;
        removeWithId();
    });
}


// ======================================= TOTAL INCOME =======================================================
let totalSumIncome = document.getElementsByClassName("total")[0];
let totalSumExpense = document.getElementsByClassName("total")[1];

function sumAmount(array) {
    let sumOfAmount = 0;
    array.map((element) => {
        sumOfAmount += parseFloat(element.amount);
    });
    totalSumIncome.textContent = `${sumOfAmount}` + ` AZN`;
    totalSumExpense.textContent = `${sumOfAmount}` + ` AZN`;
    return sumOfAmount;
}
sumAmount(incomeArr);
sumAmount(expenseArr);
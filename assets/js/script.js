// ======================================= USER DB ================================================
const users = [
  {
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
    alert("Wrong username or password");
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

// =================================================== INCOME PAGE ==================================
// income array structure
/* arr=[{_id:29012993,incomeName:"Test","amount":43434,_userId:current}] */
let incomeArr = JSON.parse(localStorage.getItem("income")) || [];
let incomeForm = document.querySelectorAll(".income-form")[0];
let incomeName = document.getElementById("incomeName");
let incomeAmount = document.getElementById("amount");
const getCurrentUserId = JSON.parse(localStorage.getItem("currentUser"))._id;
incomeForm.addEventListener("submit", function (event) {
  // if (!incomeName.value.trim() || !incomeAmount.value.trim()) {
  //     return;
  // }
  event.preventDefault();
  let localData = {
    _id: Math.random(),
    incomeName: incomeName.value.trim(),
    amount: incomeAmount.value.trim(),
    _userId: getCurrentUserId,
  };
  incomeArr.push(localData);
  createTableRow([localData]);
  setLocalIncomeArr(JSON.stringify(incomeArr));
  incomeName.value = "";
  incomeAmount.value = "";
});

function setLocalIncomeArr(arr) {
  localStorage.setItem("income", arr);
}
// create table
let table = document.getElementsByClassName("main-table")[0];

let index = 1;

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
  window.close();
});

// ============================================ EXPENSE PAGE ===================================================
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
    expenseName: expenseName.value.trim(),
    amount: expenseAmount.value.trim(),
    _userId: getCurrentUserId,
  };
  expenseArr.push(localData);
  setLocalIncomeArr(JSON.stringify(expenseArr));
  expenseName.value = "";
  expenseAmount.value = "";
});

let expenseArr = [
  {
    _id: Math.floor(Math.random() * 10),
    expenseName: "Business",
    amount: "2323",
    userId: "0.2227517522217807",
  },
  {
    _id: Math.floor(Math.random() * 10),
    expenseName: "salary",
    amount: "2323",
    userId: "0.8627517565817807",
  },
  {
    _id: Math.floor(Math.random() * 10),
    expenseName: "Profit ",
    amount: "2323",
    userId: "0.2227517522217807",
  },
  {
    _id: Math.floor(Math.random() * 10),
    expenseName: "Earned",
    amount: "2323",
    userId: "0.2227517522217807",
  },
  {
    _id: Math.floor(Math.random() * 10),
    expenseName: "businnes expense",
    amount: "2323",
    userId: "0.2227517522217807",
  },
  {
    _id: Math.floor(Math.random() * 10),
    expenseName: "income",
    amount: "2323",
    userId: "0.4716810936934336",
  },
  {
    _id: Math.floor(Math.random() * 10),
    expenseName: "income -Ayla",
    amount: "2323",
    userId: "0.20055668015534123",
  },
  {
    _id: Math.floor(Math.random() * 10),
    expenseName: "capital",
    amount: "2323",
    userId: "0.8716810936434336",
  },
  {
    _id: Math.floor(Math.random() * 10),
    expenseName: "salary",
    amount: "2323",
    userId: "0.8716810936434336",
  },
  {
    _id: Math.floor(Math.random() * 10),
    expenseName: "active",
    amount: "2323",
    userId: "0.8627517565817807",
  },
  {
    _id: Math.floor(Math.random() * 10),
    expenseName: "expense -Jala",
    amount: "2323",
    userId: "0.1485515983574851",
  },
  {
    _id: Math.floor(Math.random() * 10),
    expenseName: "expense -Jala -v1",
    amount: "2323",
    userId: "0.1485515983574851",
  },
  {
    _id: Math.floor(Math.random() * 10),
    expenseName: "expense -Jala-business",
    amount: "2323",
    userId: "0.1485515983574851",
  },
  {
    _id: Math.floor(Math.random() * 10),
    expenseName: "expense -Jala ->salary",
    amount: "2323",
    userId: "0.1485515983574851",
  },
];
// icmome arr verilecek
function createTableRow(arr) {
  arr.forEach((element) => {
    let newRow = document.createElement("tr");
    newRow.setAttribute("data-id", element._id);
    let dataId = document.createElement("td");
    dataId.innerText = index;
    let dataName = document.createElement("td");
    dataName.innerText = element.expenseName;
    let dataAmount = document.createElement("td");
    dataAmount.innerText = element.amount;
    let dataTime = document.createElement("td");
    dataTime.innerText = new Date().toLocaleDateString();
    let basket = document.createElement("td");
    basket.innerHTML = ` <div class="radius trash-bg"><i class="fa-solid fa-trash"
                                            style="color: rgb(193, 11, 38);"></i></div>`;
    newRow.append(dataId, dataName, dataAmount, dataTime, basket);
    table.append(newRow);
    index++;
    removeWithId();
  });
}
console.log(expenseArr);
expenseArr = expenseArr.filter((x) => x.userId == getCurrentUserId);
createTableRow(expenseArr);
// ======================================= TOTAL INCOME =======================================================
function sumAmount(array) {
  let sumOfAmount = 0;
  array.map((element) => {
    sumOfAmount += `${element.amount}`;
  });
  return sumAmount;
}
let cem = sumAmount(expenseArr);
console.log(cem);

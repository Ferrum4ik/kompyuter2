var adminpagebutton = document.getElementById("admin-page-button"); adminpagebutton.addEventListener('click', function () {window.location.href = "admin.html";});
var myComputersButton = document.getElementById('my-computers-button')
var myOrdersButton = document.getElementById('my-orders-button')
var myShoppingButton = document.getElementById('shopping-button')
var loginbutton = document.getElementById('login-button')
var logoutbutton = document.getElementById('logout-button')
myComputersButton.addEventListener('click', function () {window.location.href = "computers.html"})
myShoppingButton.addEventListener("click", function () {
    window.location.href = "shopping.html"
})
var userLoggedin = false;
var loggedInUserId = localStorage.getItem("logged-In-User-Id")
if (loggedInUserId == null) {
    userLoggedin = false
} else {
    userLoggedin = true
}
var showsuccessloginmessage = localStorage.getItem("show-success-login-message")
if (showsuccessloginmessage == null) {

}
else{
    document.getElementById("success-login-alert").style.display = 'block';
    localStorage.removeItem("show-success-login-message");
    setTimeout(() => {
        document.getElementById('succes-login-alert').style.display = "none"
    }, 1200);
}

function showButtons() {
    if (userLoggedin) {
        loginbutton.style.display = "none"
        myComputersButton.style.display = "inline-block"
        myOrdersButton.style.display = "inline-block"
        logoutbutton.style.display = "inline-block"
    } else{
        loginbutton.style.display = "inline-block"
        myComputersButton.style.display = "none"
        myOrdersButton.style.display = "none"
        logoutbutton.style.display = "none"
    }
}
showButtons();
function onLogin() {
    window.location.href = "login.html"
}
function onLogout() {
    setTimeout(() => {
        userLoggedin = false
        localStorage.removeItem("logged-in-user-id")
        localStorage.removeItem("logged-in-user-name")
        showButtons();
        document.getElementById("success-logout-alert").style.display = "block"
        showUserName()
        setTimeout(() => {
            document.getElementById("success-logout-alert").style.display = "none"
        }, 1200);
    }, 500);
}
var users = []
var categories = []
var computers = []
function addObjects() {
    users.push({id: 1, name: "User-1", phone: "055-324-3434", username: "u1", password: "p1"})
    users.push({id: 2, name: "User-2", phone: "055-324-1232", username: "u2", password: "p2"})
    users.push({id: 3, name: "User-3", phone: "055-324-6765", username: "u3", password: "p3"})
    users.push({id: 4, name: "User-4", phone: "055-324-9823", username: "u4", password: "p4"})
    users.push({id: 5, name: "User-5", phone: "055-324-7151", username: "u5", password: "p5"})
    users.push({id: 6, name: "Admin", phone: "055-324-0000", username: "admin", password: "adminp"})
    
    categories.push({id: 1, name: "Acer"})
    categories.push({id: 2, name: "HP"})
    categories.push({id: 3, name: "Asus"})
    categories.push({id: 4, name: "Dell"})
    categories.push({id: 5, name: "Lenovo"})
    categories.push({id: 6, name: "LG"})
    categories.push({id: 7, name: "Casper"})
    categories.push({id: 8, name: "Fujitsu"})
    categories.push({id: 9, name: "Nexus"})
    categories.push({id: 10, name: "Samsung"})
    categories.push({id: 11, name: "Toshiba"})
    categories.push({id: 12, name: "Sony"})

    computers.push({ id: 1, name: 'Acer 1', price: 654, description: "Acer 1 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId: 1 }) 
    computers.push({ id: 2, name: 'Acer 1', price: 2345, description: "Acer 2 desc", isNew: true, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId: 1 }) 
    computers.push({ id: 3, name: 'Acer 1', price: 1243, description: "Acer 3 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId: 1 }) 
    computers.push({ id: 4, name: 'Acer 1', price: 3124, description: "Acer 4 desc", isNew: true, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId: 1 }) 
    computers.push({ id: 5, name: 'Acer 1', price: 63424, description: "Acer 5 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId: 1 }) 
    computers.push({ id: 6, name: 'Acer 1', price: 2134, description: "Acer 6 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId: 1 }) 
    computers.push({ id: 7, name: 'Acer 1', price: 63424, description: "Acer 7 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId: 1 }) 
    computers.push({ id: 8, name: 'Acer 1', price: 4235, description: "Acer 8 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId: 1 }) 
    computers.push({ id: 9, name: 'Acer 1', price: 1235, description: "Acer 9 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', user:2 }) 
    computers.push({ id: 10, name: 'Acer 1', price: 623, description: "Acer 10 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', user:2 }) 
    computers.push({ id: 11, name: 'Acer 1', price: 654, description: "Acer 11 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', user:2 }) 
    computers.push({ id: 12, name: 'Acer 1', price: 8764, description: "Acer 12 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId:2 }) 
    computers.push({ id: 13, name: 'Acer 1', price: 643, description: "Acer 13 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId:2 }) 
    computers.push({ id: 14, name: 'Acer 1', price: 7654, description: "Acer 14 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId:2 }) 
    computers.push({ id: 15, name: 'Acer 1', price:1244, description: "Acer 15 desc", isNew: true, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId:2 }) 
    computers.push({ id: 16, name: 'Acer 1', price: 3256, description: "Acer 16 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId:2 }) 


    computers.push({ id: 17, name: 'Acer 1', price: 12345, description: "Acer 17 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId: 3}) 
    computers.push({ id: 18, name: 'Acer 1', price: 3512, description: "Acer 18 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId:3 }) 
    computers.push({ id: 19, name: 'Acer 1', price: 3524, description: "Acer 19 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId:3 }) 
    computers.push({ id: 21, name: 'Acer 1', price: 1231, description: "Acer 20 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId:3 }) 
    computers.push({ id: 22, name: 'Acer 1', price: 5434, description: "Acer 21 desc", isNew: true, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId:3 }) 
    computers.push({ id: 23, name: 'Acer 1', price: 3424, description: "Acer 22 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId:3 }) 
    computers.push({ id: 24, name: 'Acer 1', price: 4535, description: "Acer 23 desc", isNew: true, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId:3 }) 
    computers.push({ id: 25, name: 'Acer 1', price: 4325, description: "Acer 24 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId:3 }) 
    computers.push({ id: 26, name: 'Acer 1', price: 3425, description: "Acer 25 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId:4 }) 
    computers.push({ id: 27, name: 'Acer 1', price: 4535, description: "Acer 26 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId:4 }) 
    computers.push({ id: 28, name: 'Acer 1', price: 3215, description: "Acer 27 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId:4 }) 
    computers.push({ id: 29, name: 'Acer 1', price: 7654, description: "Acer 28 desc", isNew:true, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId:4 }) 
    computers.push({ id: 30, name: 'Acer 1', price: 6535, description: "Acer 29 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId:4 }) 
    computers.push({ id: 31, name: 'Acer 1', price: 6234, description: "Acer 30 desc", isNew: true, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId:4 }) 
    computers.push({ id: 32, name: 'Acer 1', price: 7654, description: "Acer 31 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId:4 }) 
    computers.push({ id: 33, name: 'Acer 1', price: 6544, description: "Acer 32 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId:4 })
    computers.push({ id: 34, name: 'Acer 1', price: 6124, description: "Acer 33 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId:5 })  
    computers.push({ id: 35, name: 'Acer 1', price: 6324, description: "Acer 34 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId:5 }) 
    computers.push({ id: 36, name: 'Acer 1', price: 6755, description: "Acer 35 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId:5 }) 
    computers.push({ id: 37, name: 'Acer 1', price: 8642, description: "Acer 36 desc", isNew: true, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId:5 }) 
    computers.push({ id: 38, name: 'Acer 1', price: 6723, description: "Acer 37 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId:5 })
    computers.push({ id: 39, name: 'Acer 1', price: 7654, description: "Acer 38 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId:5 })  
    computers.push({ id: 40, name: 'Acer 1', price: 6543, description: "Acer 39 desc", isNew: false, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId:5 }) 
    computers.push({ id: 33, name: 'Acer 1', price: 7423, description: "Acer 40 desc", isNew: true, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId:5 }) 
    var idCounter = 40
    for (var j = 0; j < 4; j++){
        for(var j = 0; j < 4; j++){
            idCounter++
            computers.push(
                {
                    id: idCounter,name: "Acer" + idCounter,price : computers[i].price, description: "Acer" + idCounter + "desc",
                    isNew:computers[i].isNew, imagePath: '/images/WhatsApp Image 2023-09-21 at 19.31.19.jpeg', userId:computers[i].userId, categoryId: 1
                }
            )
        }
    }
    for(var i = 0; i < 200; i++){
        idCounter++
        computers.push(
            {
                id: idCounter,name: "Hp" + idCounter,price : computers[i].price, description: "Hp" + (i + 1) + "desc",
                isNew:computers[i].isNew, imagePath:"/images/WhatsApp Image 2023-09-21 at 19.32.43.jpeg", userId:computers[i].userId, categoryId: 2
            }
        )
    }
    
    for(var i = 0; i < 200; i++){
        idCounter++
        computers.push(
            {
                id: idCounter,name: "Asus" + idCounter,price : computers[i].price, description: "Asus" + (i + 1) + "desc",
                isNew:computers[i].isNew, imagePath:"   /images/WhatsApp Image 2023-09-21 at 19.31.31.jpeg", userId:computers[i].userId, categoryId: 3
            }
        )
    }
    for(var i = 0; i < 200; i++){
        idCounter++
        computers.push(
            {
                id: idCounter,name: "Dell" + idCounter,price : computers[i].price, description: "Dell" + (i + 1) + "desc",
                isNew:computers[i].isNew, imagePath:"   /images/WhatsApp Image 2023-09-21 at 19.32.03.jpeg", userId:computers[i].userId, categoryId: 4
            }
        )
    }
    for(var i = 0; i < 200; i++){
        idCounter++
        computers.push(
            {
                id: idCounter,name: "Lenovo" + idCounter,price : computers[i].price, description: "Lenovo" + (i + 1) + "desc",
                isNew:computers[i].isNew, imagePath:"/images/WhatsApp Image 2023-09-21 at 19.32.43 (1).jpeg", userId:computers[i].userId, categoryId: 4
            }
        )
    }
    for (var i = 0; i < computers.length; i++) {
        const  c = computers[i]

        c.ram = 8;
        c.cpu="Core I 9"
        c.drive = 500; c.driveType = [i % 2 == 0] ? "hdd"  : "sdd";
        c.os = "Windows 10"
        c.videocard = 3
    }
    for (var i = 0; i < computers.length; i++) {
        const c = computers[i]
    
        for (var j = 0; j < users.length; j++){
            const u = users[j];
            if (u.id === c.users.id){
                c.phone = u.phone; break;
            }
        }
    }
}

addObjects()

function loadDataFromLocalStorage() {
    var usersString = localStorage.getItem("users")
    var categoriesString = localStorage.getItem("categories")
    var computersStringify = localStorage.getItem("computers")

    if (usersString == null) {
        localStorage.setItem("users", JSON.stringify(users))
    } else {
        users = JSON.parse(usersString)
    }
    if (categoriesString == null) {
        localStorage.setItem("categories", JSON.stringify(categories))
    } else {
        users = JSON.parse(categoriesString)
    }
    if (computersString == null) {
        localStorage.setItem("computers", JSON.stringify(computers))
    } else {
        users = JSON.parse(computersString)
    }
}
loadDataFromLocalStorage()
console.log("Total numbers of all computers =" + computers.length);
function onClearLocalStorage(){
    localStorage.removeItem("users")
    localStorage.removeItem("categories")
    localStorage.removeItem("computers")
    localStorage.removeItem("basketComputers")
    localStorage.removeItem("orders")
    localStorage.removeItem("customers")
    localStorage.removeItem("order-customer")
    window.location.reload
}

var customers = [];

customers.push({id: 1, name: "Customer-1", address: "Customer-1-address", phone:"044-111-2222", email: "customer1@gmail.com"}) ;
customers.push({id: 2, name: "Customer-2", address: "Customer-2-address", phone:"044-555-7777", email: "customer2@gmail.com"}) ;
customers.push({id: 3, name: "Customer-3", address: "Customer-3-address", phone:"044-555-9999", email: "customer3@gmail.com"}) ;
var customersString = localStorage.getItem("customers")

if (customersString == null) {
    localStorage.setItem("customers", JSON.stringify(customers))
} else {
    customers = JSON.parse(customersString)
}

var orders = []


var order1 = {};
order1.id = 1
order1.note = " доставка будет за 2 дня"
var order1BasketComputers = [];
order1BasketComputers.push({id: 1, count: 7, computer: computers[1]})
order1BasketComputers.push({id: 2, count: 3, computer: computers[1]})
order1BasketComputers.push({id: 3, count: 5, computer: computers[1]})
order1.basketComputers = order1BasketComputers
order1.customer = customers[1];
order1.userId = 1;
order1.register = new Date(2023, 9, 23);
order1.totalPrice = calculateOrderTotalPrice(order11)


var order2 = {}
order2.id = 2
order2.note = " доставка будет за 4 дня и 4 клавиатуры добавьте в заказ"
var order2BasketComputers = [];
order2BasketComputers.push({id: 4, count: 12, computer: computers[51]})
order2BasketComputers.push({id: 5, count: 15, computer: computers[53]})
order2BasketComputers.push({id: 6, count: 6, computer: computers[55]})
order2.basketComputers = order2BasketComputers
order2.customer = customers[0];
order2.userId = 2;
order2.register = new Date(2023, 9, 30);
order2.totalPrice = calculateOrderTotalPrice(order2)

var order3 = {}
order3.id = 3
order3.note = " доставка будет за 12 дня и 2 монитора добавьте в заказ"
var order3BasketComputers = [];
order3BasketComputers.push({id: 7, count: 1, computer: computers[97]})
order3BasketComputers.push({id: 8, count: 2, computer: computers[88]})
order3BasketComputers.push({id: 9, count: 3, computer: computers[101]})
order3.basketComputers = order3BasketComputers
order3.customer = customers[2];
order3.userId = 3;
order3.register = new Date(2023, 10, 9);
order3.totalPrice = calculateOrderTotalPrice(order3)

orders.push(order1)
orders.push(order2)
orders.push(order3)


var ordersString = localStorage.getItem("orders")

if (ordersString == null) {
    localStorage.setItem("orders", JSON.stringify(orders))
}
else {
    orders = JSON.parse(ordersString)
}


var myOrdersButton = document.getElementById('my-orders-button')

myOrdersButton.addEventListener('click', function (){
    window.location.href("order.html")
});


function calculateOrderTotalPrice(order){
    var totalPrice = 0;

    for (let index = 0; index < order.basketComputers.length; index++){
        const b =order.basketComputers[index];
        totalPrice += b.count * b.computer.price
    }

    return totalPrice
}
var loggedInUserName = document.getElementById('logged-in-user-name')

console.log('userLoggedIn : ' + userLoggedin);

function showUserName() {
    if (userLoggedin) {
        var username = ''
        for (let index = 0; index < users.length; index++) {
            const user = users[index];
            if (user.id == loggedInUserId) {
                username = user.username; break
            }
        }
        loggedInUserName.innerHTML = username;
        if (username === 'admin') {
            adminpagebutton.style.display = 'inline-block'
        }
        else {
            adminpagebutton.style.display = "none"
        }
    }

    else {
        loggedInUserName.innerHTML = ''
        adminpagebutton.style.display = "none"
    }
}

showUserName();
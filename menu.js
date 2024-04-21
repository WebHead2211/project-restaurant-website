const menu = {
    starter: [{
            name: "Chilly Paneer",
            desc: "Crispy fried cottage cheese"
        }, {
            name: "Tomato Soup",
            desc: "A vegetable broth prepared using Garden Fresh Tomatoes, Herbs and Spices"
        }, {
            name: "Crispy Corn",
            desc: "Veg fried corn kennels tossed in chilly soya sauce"
        }, {
            name: "Manchow Soup",
            desc: "A popular Hot n Spicy Meal Soup prepared in Chinese style and served with Fried Noodles"
        }, {
            name: "Veg Cheese Roll",
            desc: "Chef's Special"
        }, {
            name: "Hot Dog",
            desc: "Yummy"
        }],
    main: [{
            name: "Paneer Tikka Masala",
            desc: "Barberqued paneer pieces cooked in makhani gravy"
        }, {
            name: "Palak Paneer",
            desc: "Mildly spiced cottage cheese preparation in spinach and onion gravy"
        }, {
            name: "Butter Chicken",
            desc: "A tasty dish featuring boneless chicken in a smooth gravy"
        }]
};

function loadMenu() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      myFunction(this);
    }
    xhttp.open("GET", "menu.json");
    xhttp.send();
  }
  function myFunction(json) {
    const menuObj = JSON.parse(json.responseText);
    makeMenu(menuObj);
  }

window.onload = loadMenu();

function makeMenu(obj) {
    const starterContainer = document.getElementById("menu-starters").querySelector(".menu-item-container");
    const mainContainer = document.getElementById("menu-main").querySelector(".menu-item-container");    
    let starter = obj.starter;
    let main = obj.main;
    let starterHtml = "";
    let mainHtml = "";
    starter.forEach(item => {
        starterHtml += `<div class="menu-item"><h2>${item.name}</h2><p>${item.desc}</p></div>`;
    });
    main.forEach(item => {
        mainHtml += `<div class="menu-item"><h2>${item.name}</h2><p>${item.desc}</p></div>`;
    });
    starterContainer.innerHTML = starterHtml;
    mainContainer.innerHTML = mainHtml;
}




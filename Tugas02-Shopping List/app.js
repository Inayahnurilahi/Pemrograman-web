//selector
const shoppingInput = document.querySelector(".shopping-input");
const shoppingButton = document.querySelector(".shopping-button");
const shoppingList = document.querySelector(".shopping-list");


//event listeners
shoppingButton.addEventListener('click' , addShopping);
shoppingList.addEventListener('click', deleteCheck);

//fungtions
function addShopping(event){
    event.preventDefault();
    //Shopping DIV
    const shoppingDiv = document.createElement('div');
    shoppingDiv.classList.add("shopping");

    //Create LI
    const newShopping = document.createElement('li');
    newShopping.innerHTML = shoppingInput.value;
    newShopping.classList.add('shopping-item');
    shoppingDiv.appendChild(newShopping);

    //Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="bi bi-check-lg"></i>';
    completedButton.classList.add("complete-btn");
    shoppingDiv.appendChild(completedButton);
    
    //Check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="bi bi-trash"></i>';
    trashButton.classList.add('trash-btn');
    shoppingDiv.appendChild(trashButton);

    //Append to list
    shoppingList.appendChild(shoppingDiv);
    //Clear Shopping INPUT VALUE
    shoppingInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    //DELETE SHOPPING
    if (item.classList[0] === "trash-btn") {
        const shopping = item.parentElement;
        shopping.classList.add("fall");
        shopping.remove(); 
    }   
    //CHECK MARK
    if (item.classList[0] === "complete-btn") {
        const shopping = item.parentElement;
        shopping.classList.toggle("completed");
    }
}

function filterShopping(e){
    const shoppings = shoppingList.childNodes;
    shoppings.forEach(function(shopping) {
        switch(e.target.value) {
            case "all":
                shopping.style.display = "flex";
                break;
            case "completed":
                if(shopping.classList.contains("completed")){
                    shopping.style.display = "flex";
                } else {
                    shopping.style.display = "none";
                }
            case "uncompleted":
                if(shopping.classList.contains("completed")){
                    shopping.style.display = "flex";
                } else {
                    shopping.style.display = "none";
                }
        }
    });
}
const mealContent = document.querySelector(".meal-content")
const searchBtn = document.querySelector("#search")

const URL = "www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"

const getMealList = ()=>{
  let searchInputText = document.querySelector("input").value.trim();
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`)
    .then(response => response.json())
    .then(data =>{
        if(data.meals){
            data.meals.forEach(meal => {
                const cardContent = document.createElement("div")
                cardContent.classList = "card shadow"
                const img = document.createElement('img')
                img.src=`${meal.strMealThumb}`
                img.classList = "card-img-top"
                cardContent.appendChild(img)
                const h5 = document.createElement("h5")
                h5.classList = "card-title mt-2 text-center"
                h5.innerText = `${meal.strMeal}`
                cardContent.appendChild(h5)
                const button = document.createElement("button")
                button.classList = "btn btn-outline-primary"
                const dataBsToggle = document.createAttribute("data-bs-toggle")
                dataBsToggle.value = "modal"
                const dataBsTarget = document.createAttribute("data-bs-target")
                dataBsTarget.value = "#recipe-details"
                button.innerText = "Get Recipe"
                button.setAttributeNode(dataBsToggle)
                button.setAttributeNode(dataBsTarget)
                cardContent.appendChild(button)
                mealContent.appendChild(cardContent)
                mealContent.classList.remove("notFound")


            });
        }else{
            const errorMessage = document.createElement("h2")
            errorMessage.classList = "text-center"
            errorMessage.innerText = "Sorry! we didn't find any meal"
            mealContent.classList.add("notFound")
            mealContent.insertAdjacentElement('beforeend',errorMessage);
        }
    })

}

searchBtn.addEventListener("click",getMealList)


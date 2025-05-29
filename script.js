const meals = [
  {
    name: "Grilled Chicken Salad",
    image: "https://images.unsplash.com/photo-1605478886140-4f3c83f0b3c4?auto=format&fit=crop&w=400&q=80",
    ingredients: ["chicken", "lettuce", "tomato"],
    diet: "gluten-free",
    allergens: [],
    cost: 8
  },
  {
    name: "Veggie Stir Fry",
    image: "https://images.unsplash.com/photo-1605478031243-26cf2917d51a?auto=format&fit=crop&w=400&q=80",
    ingredients: ["broccoli", "carrot", "pepper", "soy sauce"],
    diet: "vegan",
    allergens: ["gluten"],
    cost: 7
  },
  {
    name: "Beef Tacos",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=400&q=80",
    ingredients: ["beef", "taco shell", "cheese"],
    diet: "gluten-free",
    allergens: ["dairy"],
    cost: 9
  },
  {
    name: "Fruit Smoothie",
    image: "https://images.unsplash.com/photo-1584270354949-1ec76c7795c0?auto=format&fit=crop&w=400&q=80",
    ingredients: ["banana", "berries", "yogurt"],
    diet: "vegetarian",
    allergens: ["dairy"],
    cost: 5
  },
  {
    name: "Nutty Granola Bowl",
    image: "https://images.unsplash.com/photo-1607330283441-26c270d7003b?auto=format&fit=crop&w=400&q=80",
    ingredients: ["granola", "nuts", "honey"],
    diet: "vegetarian",
    allergens: ["nuts"],
    cost: 6
  },
  {
    name: "Vegan Buddha Bowl",
    image: "https://images.unsplash.com/photo-1584270355144-4c4c4912b50c?auto=format&fit=crop&w=400&q=80",
    ingredients: ["quinoa", "chickpeas", "avocado", "spinach"],
    diet: "vegan",
    allergens: [],
    cost: 9
  },
  {
    name: "Gluten-Free Pasta",
    image: "https://images.unsplash.com/photo-1625947551373-dc2a39ff7f83?auto=format&fit=crop&w=400&q=80",
    ingredients: ["gluten-free pasta", "tomato sauce", "basil"],
    diet: "gluten-free",
    allergens: [],
    cost: 10
  },
  {
    name: "Vegan Chili",
    image: "https://images.unsplash.com/photo-1613145993481-5a476c06ae9c?auto=format&fit=crop&w=400&q=80",
    ingredients: ["beans", "tomato", "corn", "onion"],
    diet: "vegan",
    allergens: [],
    cost: 7
  },
  {
    name: "Avocado Toast",
    image: "https://images.unsplash.com/photo-1584277264949-c26b0f14b3f5?auto=format&fit=crop&w=400&q=80",
    ingredients: ["bread", "avocado", "lime", "pepper"],
    diet: "vegetarian",
    allergens: ["gluten"],
    cost: 6
  },
  {
    name: "Tofu Stir Fry",
    image: "https://images.unsplash.com/photo-1608746016586-0e7eb3a66a34?auto=format&fit=crop&w=400&q=80",
    ingredients: ["tofu", "soy sauce", "broccoli", "ginger"],
    diet: "vegan",
    allergens: ["gluten"],
    cost: 8
  }
];

const mealContainer = document.getElementById("meal-container");
const shoppingList = document.getElementById("shopping-list");
const filterBtn = document.getElementById("filterBtn");

function displayMeals(filteredMeals) {
  mealContainer.innerHTML = "";
  if (filteredMeals.length === 0) {
    mealContainer.innerHTML = "<p>No meals match your filter criteria.</p>";
    return;
  }

  filteredMeals.forEach(meal => {
    const card = document.createElement("div");
    card.className = "meal-card";
    card.innerHTML = `
      <img src="${meal.image}" alt="${meal.name}" />
      <h3>${meal.name}</h3>
      <p><strong>Cost:</strong> $${meal.cost.toFixed(2)}</p>
      <button class="button" onclick='addToShoppingList(${JSON.stringify(meal.ingredients)})'>Add Ingredients</button>
    `;
    mealContainer.appendChild(card);
  });
}

function addToShoppingList(ingredients) {
  ingredients.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    shoppingList.appendChild(li);
  });
}

function filterMeals() {
  const selectedDiet = document.getElementById("diet").value;
  const selectedAllergy = document.getElementById("allergy").value;

  const filtered = meals.filter(meal => {
    const dietMatch = selectedDiet === "all" || meal.diet === selectedDiet;
    const allergySafe = !selectedAllergy || !meal.allergens.includes(selectedAllergy);
    return dietMatch && allergySafe;
  });

  displayMeals(filtered);
}

filterBtn.addEventListener("click", filterMeals);

// Initial load
displayMeals(meals);


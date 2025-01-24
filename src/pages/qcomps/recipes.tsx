export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

function IngredientList({ ingredients }: { ingredients: Set<string> }) {
  return (
    <ul>
      {Array.from(ingredients).map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
      ))}
    </ul>
  )
}

function RecipeDiv({ name, ingredients }: { name: string, ingredients: Set<string> }) {
  return (
    <div>
      <h2>{name}</h2>
      <IngredientList ingredients={ingredients} />
    </div>
  )
}


export default function RecipeList() {
  const recipeList = recipes.map((recipe) => (
    <RecipeDiv key={recipe.id} {...recipe} /> //spread out all props
  ))
  return (
    <div>
      <h1>Recipes</h1>
      {recipeList}
    </div>
  );
}
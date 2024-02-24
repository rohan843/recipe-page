const data = {
  heading: "Simple Omelette Recipe",
  desc: "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
  prepData: [
    ["Total", "Approximately 10 minutes"],
    ["Preparation", "5 minutes"],
    ["Cooking", "5 minutes"],
  ],
  ingredientData: [
    "2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "1 tablespoon of butter or oil",
    "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  ],
  instrs: [
    [
      "Beat the eggs",
      "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
    ],
    [
      "Heat the pan",
      "Place a non-stick frying pan over medium heat and add butter or oil.",
    ],
    [
      "Cook the omelette",
      "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
    ],
    [
      "Add fillings (optional)",
      "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
    ],
    [
      "Fold and serve",
      "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
    ],
    ["Enjoy", "Serve hot, with additional salt and pepper if needed."],
  ],
  cals: "277kcal",
  carbs: "0g",
  prot: "20g",
  fat: "22g",
  imageSrc: "/assets/images/image-omelette.jpeg",
};

function App() {
  const prepList = data.prepData.map((elt, ind) => (
    <li key={ind} className="text">
      <span>
        <strong className="text-bold">{elt[0]}:</strong>{" "}
        <span className="text-regular">{elt[1]}</span>
      </span>
    </li>
  ));
  const ingredientList = data.ingredientData.map((elt, ind) => (
    <li key={ind}>{elt}</li>
  ));
  const instrsList = data.instrs.map((elt, ind) => (
    <li key={ind}>
      <strong>{elt[0]}:</strong> {elt[1]}
    </li>
  ));
  return (
    <div className="container">
      <img src={data.imageSrc} alt={data.heading} />
      <h1 className="main-heading">{data.heading}</h1>
      <p className="text text-regular">{data.desc}</p>
      <section className="preparation-box">
        <h3>Preparation time</h3>
        <ul>{prepList}</ul>
      </section>
      <section>
        <h2 className="section-header">Ingredients</h2>
        <ul>{ingredientList}</ul>
      </section>
      <hr />
      <section>
        <h2 className="section-header">Instructions</h2>
        <ol>{instrsList}</ol>
      </section>
      <hr />
      <section>
        <h2 className="section-header">Nutrition</h2>
        <p>
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <table>
          <tbody>
            <tr>
              <td>Calories</td>
              <td>{data.cals}</td>
            </tr>
            <tr>
              <td>Carbs</td>
              <td>{data.carbs}</td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>{data.prot}</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>{data.fat}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <div className="attribution">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://rohan843.netlify.app">Rohan Sharma</a>.
      </div>
    </div>
  );
}

export default App;

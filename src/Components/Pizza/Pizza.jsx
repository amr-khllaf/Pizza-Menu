export default function Pizza({ pizzaObj }) {
  // 2 Times Destructing : One for the Props Object and The Other for pizzaObj Object
  const { soldOut, photoName, name, ingredients, price } = pizzaObj;
  console.log(photoName);

  if (soldOut) return null;

  return (
    <>
      <li className="pizza">
        <img src={`/public/assets/${photoName}`} alt={name} />
        <div className="">
          <h3>{name}</h3>
          <p>{ingredients}</p>
          <p>${price}</p>
        </div>
      </li>
    </>
  );
}

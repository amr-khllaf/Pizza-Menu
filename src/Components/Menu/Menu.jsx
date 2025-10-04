import { pizzaData } from "../../../public/data";
import Pizza from "./../Pizza/Pizza";
export default function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <>
      <main className="menu">
        <h2 className="">Our Menu</h2>
        {numPizzas > 0 && (
          <ul className="pizzas">
            {pizzas.map((pizza) => {
              // console.log(pizza);
              // console.log(pizza.photoName);

              return <Pizza pizzaObj={pizza} key={pizza.id} />;
            })}
          </ul>
        )}
      </main>
    </>
  );
}

export default function Footer() {
  const hour = new Date().getHours(); // Current hour in 24-hour format
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We're currently open!");
  // } else {
  //   alert("Sorry, we're closed now. Please visit us between 12:00 and 22:00.");
  // }

  

  return (
    <footer className="footer">
      <div className="font-semibold text-xl text-center ">
        {new Date().toLocaleTimeString()}{" "}
        {isOpen ? (
          <p>"We're currently open!"</p>
        ) : (
          <pre>
            Sorry, we're closed now.
            <pre>Please visit us between {openHour}:00 and {closeHour}:00 Or Order Online :)</pre>
          </pre>
        )}
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

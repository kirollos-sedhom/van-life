import Navbar from "./components/Navbar.jsx";
export default function About() {
  return (
    <div className="about">
      <Navbar />
      <img
        className="about-image"
        src="../src/assets/image55.png"
        alt="a man sitting on a van roof"
      />
      <div className="about-body">
        <h1>don't squeeze in a sedan when you could relax in a van</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>

        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>

        <div className="about-ad">
          <h2>Your destination is waiting, your van is ready</h2>
          <button>Explore our vans</button>
        </div>
      </div>

      <footer>©2022 vanlife</footer>
    </div>
  );
}

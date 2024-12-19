import Navbar from "./components/Navbar.jsx";
export default function Home() {
  return (
    <div className="home">
      <Navbar></Navbar>

      <div className="main-content">
        <div className="ad">
          <h1>You got the travel plans, we got the travel vans.</h1>
          <p>
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <button>find your van</button>
        </div>
      </div>
      <footer>©2022 vanlife</footer>
    </div>
  );
}

import Team from "./components/Team"
import Title from "./components/Title"
import About from "./components/About"
import Footer from "./components/Footer";
import Cta from "./components/Cta";

function App() {
  return (
    <div>
      <h1 className="text-center py-5"><Title /></h1>
      <About />
      <Cta />
      <Team />      
      <Footer />
    </div>
  );
}

export default App

import Team from "./components/Team"
import Title from "./components/Title"
import About from "./components/About"
import Footer from "./components/Footer";
import Cta from "./components/Cta";
import SectionList from './components/SectionList'

function App() {
  return (
    <div>
      <h1 className="text-center py-5"><Title /></h1>
      <About />
      <SectionList />
      <Cta />
      <Team />      
      <Footer />
    </div>
  );
}

export default App

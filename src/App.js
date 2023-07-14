import Team from "./components/Team"
import Title from "./components/Title"
import About from "./components/About"

function App() {
  return (
    <div>
      <h1 className="text-center py-5"><Title /></h1>
      <About />
      <Team />
    </div>
  );
}

export default App

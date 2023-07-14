import Profile from "./components/Profile";
import Title from "./components/Title";

function App() {
  return (
    <div className="row">
      <h1 className="text-center"><Title /></h1>
      <Profile img="img/profiles/1.jpg" title="Amanda"/>
      <Profile img="img/profiles/2.jpg" title="Larissa"/>
      <Profile img="img/profiles/3.jpg" title="Sara"/>
    </div>
  );
}

export default App;

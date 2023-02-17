import Header from "./Component/Navbar/Header";
import Main from "./Component/Main/Main";
import { Routes, Route } from "react-router-dom";
import { Games } from "./Component/Games/Games";
import Blackspider from "./Component/Blackspider/Blackspider";
import { Footer } from "./Component/Footer/Footer";
import Events from "./Component/Events/Events";
function App() {
  return (
    <div className="App" width="100%">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Games" element={<Games />} />
        <Route path="/Blackspider" element={<Blackspider />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

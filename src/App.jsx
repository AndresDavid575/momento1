import { Navbar } from './components/Navbar';
import { Home } from './views/Home';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
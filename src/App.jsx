import Nav from './components/Nav';
import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content';
import {TailwindContext, data} from './context/TailwindContext';

function App() {
  return (
    <div className="bg-white">
      <TailwindContext.Provider value={data}>
        <Nav />
        <Header />
        <Content />
        <Footer />
      </TailwindContext.Provider>
    </div>
  );
}

export default App;

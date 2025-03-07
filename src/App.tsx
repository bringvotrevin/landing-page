import About from './components/About';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import Nav from './components/Nav';
import headerImg from '/src/assets/desktop/image-header.jpg';

function App() {
  return (
    <div className=''>
      <div
        className='bg-cover bg-center text-(--white)'
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <Nav />
        <Introduction />
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default App;

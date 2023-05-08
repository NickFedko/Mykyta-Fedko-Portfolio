import './assets/styles/App.css';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Introduction from './components/Introduction';
import { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

function App() {
  const [showScroll, setShowScroll] = useState(false);
  
  const checkScrollTop = () => {
    if(!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if(showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }

  window.addEventListener('scroll', checkScrollTop);

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  console.log(showScroll);

  return (
    <div className="App">
      <Header />
      <main>
        <Introduction />
        <About />
        <Experience />
        <FaArrowCircleUp 
          className='scrollTop'
          onClick={scrollTop}
          style={{height: 70, display: showScroll ? 'flex' : 'none'}}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;

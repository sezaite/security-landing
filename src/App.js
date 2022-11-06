import './App.scss';
import {Faq, Passwords, Hero} from './components/blocks';
import { Footer } from './components/footer/Footer';
import {Navigation} from './components/nav/Navigation';

function App() {
  return (
    <>
      <Navigation/>
      <Hero/>
      <Passwords/>
      <Faq/>
      <Footer/>
    </>

  );
}

export default App;

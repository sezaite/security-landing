import './App.scss';
import {Faq, Passwords, Hero} from './components/blocks';
import { Footer, Navigation } from './components';


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

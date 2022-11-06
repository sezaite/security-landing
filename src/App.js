import './App.scss';
import {Faq, Passwords, Hero} from './components/blocks';
import {Navigation} from './components/nav/Navigation';

function App() {
  return (
    <>
      <Navigation/>
      <Hero/>
      <Passwords/>
      <Faq/>
    </>

  );
}

export default App;

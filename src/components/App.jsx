import '../App.css';
import { Footer } from './Footer';
import { Heading } from './Heading';
import { MainBody } from './MainBody';
import { Navbar } from './Navbar';
import { Navigation } from './Navigation';
import { Qaf } from './Qaf';
function App() {
  return (
    <div class="app">
    <Navbar/>
    <Navigation/>
    <Heading/>
    <MainBody/>
    <Footer/>
    <Qaf/>
    </div>
  )
}

export default App;

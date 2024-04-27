import '../App.css';
import { Footer } from './Footer';
import { Heading } from './Heading';
import { MainBody } from './MainBody';
import { Navbar } from './Navbar';
import { Navigation } from './Navigation';
import { Qaf } from './Qaf';
function App() {
  return (
    <div class="ml-24 mt-10 mr-24 mb-96">
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

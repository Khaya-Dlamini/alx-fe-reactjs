
import WelcomeMessage from './components/WelcomeMessage';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
       <MainContent />
        <Footer />
      <WelcomeMessage />
      
    </>
  )
}

export default App

import './style.css';
import { Title } from './components/Title/Title';
import { Advantages } from './components/Advantages/Advantages';

function App() {
  return (
    <div className="wrapper">
      <Title
        text="Do you want to Learn more About cryptocurrencies"
        colorText=" quickly and easily ?"
      />

      <Title
        text="Subscribe to our channel to learn more"
        view='subtitle'
      />
      
      <Advantages />
    </div>    
  );
}

export default App;

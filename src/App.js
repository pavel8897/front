import './style.css';
import { Title } from './components/Title/Title';
import { Advantages } from './components/Advantages/Advantages';
import { Button } from './components/Button/Button';
import { Socials } from './components/Socials/Socials';

function App() {
  return (
    <div className="wrapper">
      <Title        
        colorText=" quickly and easily ?"
      />

      <Title
        text="Subscribe to our channel to learn more"
        view='subtitle'
      />
      
      <Advantages />

      <Button text="join whatsapp" />

      <Socials />
    </div>
  );
}

export default App;

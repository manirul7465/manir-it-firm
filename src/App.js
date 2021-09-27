import './App.css';
import Header from './Header/Header';
import Providers from './Providers/Providers';


function App() {
  return (
    <div style={{ 
      backgroundImage: `url("https://entrepreneurhandbook.co.uk/wp-content/uploads/2020/08/Web-development-2.0.jpg.webp")` 
    }}>
      <Header></Header>
      <Providers></Providers>
    </div>
  );
}

export default App;

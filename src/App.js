import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div>
        <NavBar/>
        <ItemListContainer greeting= "Bienvenido a mi Tienda"/>
    </div>
  );
}

export default App;



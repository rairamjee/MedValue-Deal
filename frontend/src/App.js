import './App.css';
import AppNavbar from './Components/Navbar/ResponsiveNavbar';
import Medicine from './Components/Medicine/Medicine';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <Medicine/>
    </div>
  );
}

export default App;

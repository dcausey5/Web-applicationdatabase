import logo from './logo.svg';
import './App.css';
import main from './Main.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gun Violence & Household Income Data</h1>
        < p>Welcome To Your Data Center</p>
        <form>
          <label>User Name:
          <input className='username' type="text"/>
          </label>
          <label>Password:
          <input className='password'type="password"/>
          </label>
        
          <input type={"submit"}
          style={{ backgroundColor: "#a1eafb"}}/>
        </form>
        
      </header>
    </div>
  );
  
}

export default App;

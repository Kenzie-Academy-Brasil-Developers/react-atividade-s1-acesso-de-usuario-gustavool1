
import './App.css';
import { useState } from 'react';
import RestrictedPage from './components/RestrictedPage';
function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  const user = 'Gustavo' 

  const login = () =>{
    setIsLoggedIn(true)
    console.log('login')
  }

  const logout = () =>{
    setIsLoggedIn(false)
    console.log('logout')
  }
  return (
    <div className="App">
      <header className="App-header">
          <RestrictedPage isLoggedIn={ isLoggedIn } user={ user } Login={ login } Logout={ logout } ></RestrictedPage>    
      </header>
    </div>
  );
}

export default App;

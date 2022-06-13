import { useState } from 'react';
import HomePage from './components/HomePage/HomePage';

function App() {

  const [sideMenu, setSideMenu] = useState(false);

  return (
      <HomePage sideMenu={sideMenu} setSideMenu={setSideMenu}/>
  );
}

export default App;

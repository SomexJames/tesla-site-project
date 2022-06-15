import { useState } from 'react';
import HomePage from './components/HomePage/HomePage';
import SideMenu from './components/SideMenu/SideMenu';

function App() {

  const [sideMenu, setSideMenu] = useState(false);

  return (
    <>
      <SideMenu sideMenu={sideMenu} setSideMenu={setSideMenu}/>
      <HomePage sideMenu={sideMenu} setSideMenu={setSideMenu}/>
    </>
  );
}

export default App;

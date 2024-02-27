import React, { Children } from 'react';
import { useRoutes } from 'react-router-dom';
import LooksItems from './Pages/Home/Produts';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Menu from './components/Slider/sidebar';
import CartList from './Pages/CartList';
import CartPayment from './Pages/CartPayment';
import CartConfirmation from './Pages/CartConfirmation';
import AboutUs from './Pages/AboutUs';
import Team from './Pages/Team';
import Camera from './Pages/camera/Camera';
import AppProvider from './provider/AppProvider';
import GlobalStyle from './Styles/global';
import { AppContainer } from './Styles/styles';
import Contacts from './Pages/Contact/indenx';
import FindStore from './Map/Map'
import Landing from './NavInfo/Layout/index';
// import Signin from './NavInfo/SignIn/index';


function App() {
  console.info(`==> 🌎  You are in the mode ${process.env.NODE_ENV}`);
  console.info(`==> 🌎  You are in the environment ${process.env.REACT_APP_ENVIRONMENT}`);
 
 
  const navaBar = {
    path: '/',
    element: < Menu/>,
  }
  const aboutTeam = {
    path: '/',
    element: <AboutUs />,
  }
  const contactInfo = {
    path: '/contact',
    element: <Contacts />,
  }
  const getstore = {
    path: '/findstore',
    element: <FindStore />,
  }

  const teamM = {
    path: '/team',
    element: <Team/>,
  }
  const NewLooks = {
    path: '/looks',
    element: <LooksItems/>,
  }
  
  const picture = {
    path: '/camera',
    element: <Camera />,
  }

  const mainRoutes = {
    path: '/',
    element: <Home/>
  };

  const signup = {
    path: '/sign-up',
    element: <Landing/>
  };

  
  

  const cartRoutes = {
    path: 'cart/*',
    element: <Cart />,
    children: [
      { path: '*', element: <CartList /> },
      { path: 'payment', element: <CartPayment /> },
      { path: 'confirmation', element: <CartConfirmation /> }
    ]
  };
 
  const navigations = useRoutes([navaBar, teamM, picture]);
  const contact = useRoutes([contactInfo, getstore, signup])
  const aboutUs = useRoutes([aboutTeam])
  const routing = useRoutes([mainRoutes, cartRoutes,NewLooks]);

  return (
    <>
    {navigations}
  
    <AppContainer>
      <AppProvider>
        {routing}
        {aboutUs}
        {contact}
      <GlobalStyle /> 
      </AppProvider>
    </AppContainer>
    </>
  );
}

export default App;

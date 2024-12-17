import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Navbar from './components/Navbar';
import store from './utils/store';
import { clarity } from 'react-microsoft-clarity';
import { useEffect } from 'react';
// import ReactGA from 'react-ga4'

function App() {
  // useEffect(() => {
  //   // Initialize Google Analytics with your GA4 Measurement ID
  //   ReactGA.initialize('G-XXXXXXX');  // Replace with your Google Analytics 4 ID
  // }, []);
  useEffect(() => {
    // Initialize Clarity with your project ID
    clarity.init('peqksstinr');
    const identifyUser = (userId, userName, userEmail) => {
      // Identifying the user with their unique ID and additional info
      clarity.identify(userId, {
        name: userName,
        email: userEmail,
      });
    };
    const user = {
      id: 'd80zb9',
      name: 'aditya',
      email: 'aditya@yopmail.com'
      };
      
    identifyUser(user?.id, user?.name, user?.email);
    clarity.setTag('id',user?.id)
    clarity.setTag('name',user?.name)
    clarity.setTag('email',user?.email)
  }, []);

  return (
    <Provider store={store}>
    <div className="App">
      <Navbar/>
      <Body/>
    </div>
    </Provider>
  );
}

export default App;

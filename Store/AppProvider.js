import {useState} from 'react';
import AppContext from './AppContext';

const AppProvider = props => {
  const [Cart, Setcart] = useState([]);

  return (
    <AppContext.Provider
     value={{Cart, Setcart}}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
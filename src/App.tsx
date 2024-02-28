import React from 'react';

//Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

//Navigator
import StackNavigator from "./navigation/StackNavigator";


const App = () : React.JSX.Element => {

  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      <StackNavigator />
    </PersistGate>
  </Provider>
  );
}


export default App;

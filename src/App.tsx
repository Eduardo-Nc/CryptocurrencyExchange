import React from 'react';
import { NativeBaseProvider } from "native-base";

//Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

//Navigator
import StackNavigator from "./navigation/StackNavigator";

//React Query
import {QueryClient, QueryClientProvider} from 'react-query';
const queryClient = new QueryClient();


const App = () : React.JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      <NativeBaseProvider>
        <StackNavigator />
      </NativeBaseProvider>
    </PersistGate>
  </Provider>
  </QueryClientProvider>
  );
}


export default App;

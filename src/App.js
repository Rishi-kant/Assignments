
import "./App.css";
import { Provider } from 'react-redux';
import { store } from "./reducer/store.jsx"
import Button from "./Button";
import ButtonTable from "./ButtonTable";
function App() {
  return (
    <div>
     <Provider store={store}>
        <Button />
        <ButtonTable />
      </Provider>
    </div>
  );
}

export default App;

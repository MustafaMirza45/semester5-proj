import Main from './components/mainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';

const store = ConfigureStore();
function App() {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Main  m={'2'}/>
        </div> 
      </BrowserRouter>
    </Provider>
  );  
}

export default App;

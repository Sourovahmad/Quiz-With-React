
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MyRouter from './MyRouter';


function App() {
  return (
    <div>

      <BrowserRouter>

        <MyRouter />
      </BrowserRouter>

    </div>
  )
}

export default App;

import './App.css';
import Counter from './comp/counter';
import Color from './comp/bgcolor';
import UseContext from './pages/useContext';
import UseRef from './pages/useRef';
import UseEffects from './pages/useEffects';

function App() {
  return (
    <div className="App">
      <Color/>
      <Counter/>
      <UseContext/>
      <UseRef/>
      <UseEffects/>
    </div>
  );
}

export default App;

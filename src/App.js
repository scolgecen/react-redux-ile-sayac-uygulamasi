import Counter from './components/Counter';
import IncreaseCounter from './components/IncreaseCounter';
import DecreaseCounter from './components/DecreaseCounter'  ;
import IncreaseByTwoCounter from './components/IncreaseByTwoCounter';
import './App.css';

function App() {
  return (
      <div className='container-flued' style={{margin:'100px 200px 200px 100px',backgroundColor:'orange', padding:'50px',paddingLeft:'300px',borderRadius:'15px'}}>
        <h3 className='text-white' style={{marginLeft:'250px'}}>React Redux ile Sayaç Uygulaması</h3>
        <Counter />
        <IncreaseCounter />
        <DecreaseCounter />
        <IncreaseByTwoCounter />
      </div>
 
  );
}

export default App;

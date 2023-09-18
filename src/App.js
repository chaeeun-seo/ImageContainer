import './App.css';
import GridContainer from './components/GridContainer';
import CategoryContainer from './components/CategoryContainer';
import HorizontalContainer from './components/HorizontalContainer';

function App() {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-4'>
      <CategoryContainer/>
      <HorizontalContainer/>
      <GridContainer/>
    </div>
  );
}

export default App;

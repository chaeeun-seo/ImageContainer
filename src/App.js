import logo from './logo.svg';
import './App.css';
import ImageContainer from './components/ImageContainer';
import CategoryContainer from './components/CategoryContainer';

function App() {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-4'>
      <CategoryContainer/>
      <ImageContainer/>
    </div>
  );
}

export default App;

import './App.css';
import GridContainer from './components/GridContainer';
import CategoryContainer from './components/CategoryContainer';
import HorizontalContainer from './components/HorizontalContainer';
import { Carousel } from 'flowbite';
import CarouselContainer from './components/CarouselContainer';

function App() {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-4'>
      <CarouselContainer/>
      <CategoryContainer/>
      <HorizontalContainer/>
      <GridContainer/>
    </div>
  );
}

export default App;

import './App.css';
import { Carousel } from 'flowbite';
import GridContainer from './components/GridContainer';
import CategoryContainer from './components/CategoryContainer';
import HorizontalContainer from './components/HorizontalContainer';
import CarouselContainer from './components/CarouselContainer';
import AccordionContainer from './components/AccordionContainer';

function App() {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-4'>
      <CarouselContainer/>
      <CategoryContainer/>
      <HorizontalContainer/>
      <AccordionContainer/>
      <GridContainer/>
    </div>
  );
}

export default App;

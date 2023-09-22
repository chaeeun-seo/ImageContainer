import './App.css';
import { Carousel } from 'flowbite';
import GridContainer from './components/GridContainer';
import CategoryContainer from './components/CategoryContainer';
import HorizontalContainer from './components/HorizontalContainer';
import CarouselContainer from './components/CarouselContainer';
import AccordionContainer from './components/AccordionContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <Navbar/>
      <div className='w-full flex flex-col justify-center items-center gap-8'>
        <CarouselContainer/>
        <CategoryContainer/>
        <HorizontalContainer isTitle={true}/>
        <AccordionContainer/>
        <GridContainer/>
      </div>
    </div>
  );
}

export default App;

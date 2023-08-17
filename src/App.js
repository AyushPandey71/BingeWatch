import "@fontsource/poppins";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/NavMain";
import Container from '@material-ui/core/Container';
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header positionSpan="fixed" />
      <Header positionSpan="inherit" />
      <div className="App">
        <Container>
          <Routes>
              <Route path='/' element={<Trending />} exact/>
              <Route path='/movies' element={<Movies />}/>
              <Route path='/series' element={<Series />}/>
              <Route path='/search' element={<Search />}/>
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>

  );
}

export default App;

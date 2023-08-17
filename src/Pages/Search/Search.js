import { Button, TextField, ThemeProvider } from "@material-ui/core";
import { createTheme } from '@material-ui/core/styles';
import { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import Content from "../../components/Content/Content";
import CustomPagination from "../../components/Pagination/CustomPagination";
import Trending from '../Trending/Trending';

const Search = () => {

   const [page, setPage] = useState(1);
   const [searchText, setSearchText] = useState("");
   const [content, setContent] = useState([]);
   const [numOfPages, setNumOfPages] = useState("");


   const darkTheme = createTheme({
     palette: {
       type: "dark",
       primary: {
         main: "#fff",
       },
     },
   });

   const fetchSearch= async () => {
      try {
        const {data} = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=47edad19eaf3789ffa7f0296aa864792&language=en-US&query=${searchText}&page=${page}&include_adult=true`);

        setContent(data.results);
        setNumOfPages(data.total_pages);
      } 
      catch (error){
        console.log(error);
      }

   };

   useEffect(() => {
     window.scroll(0, 0);
     fetchSearch();
     // eslint-disable-next-line
   }, [page])

    return (
      <div>
        <ThemeProvider theme={darkTheme}>
          <div className="search"style={{display: "flex", margin: "15px 0", color: "white"}}>
            <TextField
              style={{ flex: 1}}
              className="searchbar"
              label="Type here to search"
              variant="filled"
              onChange={(e) => setSearchText(e.target.value)}
            />  
            <Button variant="contained" style={{marginLeft:10}} onClick = {fetchSearch}>
               <SearchIcon fontSize="large" />
            </Button>
          </div>
        </ThemeProvider>
        {searchText === "" ?
        <Trending /> :
        <>
          <div className="trendingstuff">
            {content && content.map((c) => (
              <Content key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} vote_average={c.vote_average} media_type={c.media_type}
              />
            ))}
            {searchText && !content
              && <h2>No results</h2>}
          </div>
          {numOfPages > 1 && (
            <CustomPagination setPage={setPage} numOfPages={numOfPages} />
          )}
        </>}
      </div>
    );
};

export default Search;
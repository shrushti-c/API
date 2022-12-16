import React, { createContext } from "react";
import Design from "./components/Design";
import Search from "./components/Search";
import Images from "./components/Images";
import useAxios from "./USEhooks/useAxios";


export const ImageContext = createContext();
function App() {

  const{ response, isLoading, error, fetchData}= useAxios (`search/photos?page=1&query=cats&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
  console.log(response);
  const value={
    response,
    isLoading,
    error,
    fetchData
  }
  return (
    
    <ImageContext.Provider value={value}>
    <Design/>
    <Search/>
    <Images />
    </ImageContext.Provider>
   
  )
}

export default App;

import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ContextFile = createContext();

const ShopContextProvider = (props) => {
 
  const [count, setCount] = useState(0);
 
  const value = {
     count,setCount
   
  };
  return (
    <ContextFile.Provider value={value}>{props.children}</ContextFile.Provider>
  );
};

export default ShopContextProvider;

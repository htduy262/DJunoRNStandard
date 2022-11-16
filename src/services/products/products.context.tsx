import React, {createContext, ReactNode, useState} from 'react';
import {requestHomeData} from './products.service';

export const ProductsContext = createContext({
  fetchHomeData: () => {},
  home: {} as any,
  print: {} as any,
  design: {} as any,
  isLoading: false,
  error: null,
});

export const ProductsContextProvider = ({children}: {children: ReactNode}) => {
  const [home, setHome] = useState(null);
  const [print, setPrint] = useState({});
  const [design, setDesign] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHomeData = () => {
    requestHomeData().then((data: any) => {
      setHome(data);
    });
  };

  return (
    <ProductsContext.Provider
      value={{
        fetchHomeData,
        home,
        print,
        design,
        isLoading,
        error,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

"use client";

import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  getCarts,
  getLocationInfoToStorage,
} from "../services/storageFun/storageFun.service";
import { IUserLocation } from "../models/user-location.model";

//types
interface IGlobalContext {
  userLocation: IUserLocation | null;
  setUserLocation: Dispatch<SetStateAction<IUserLocation | null>>;
  cartCount: number;
  setCartCount: Dispatch<SetStateAction<number>>;
}
interface IGlobalContextFun {
  children: ReactNode;
}

//context creator
export const globalContext = createContext<IGlobalContext | null>(null);

//use context
const useGlobalContext = () => {
  const db = useContext(globalContext);
  if (db === null) {
    throw new Error("useGlobalState Must be inside of Provider");
  }
  return db;
};

//Provider
const GlobalContext: FC<IGlobalContextFun> = ({ children }) => {
  const [userLocation, setUserLocation] = useState<IUserLocation | null>(null);
  const [cartCount, setCartCount] = useState<number>(0);

  //update context and prevent from deleting when move between pages
  const revalidateContext = () => {
    //LocationUser
    const LocationUser = getLocationInfoToStorage();

    if (LocationUser) {
      setUserLocation({
        provinces: {
          label: LocationUser?.provinces?.label,
          value: LocationUser?.provinces?.value,
        },
        counties: {
          label: LocationUser?.counties?.label,
          value: LocationUser?.counties?.value,
        },
      });
    }

    //cartCount
    const getCart = getCarts();
    setCartCount(getCart ? getCart.length : 0);
  };

  useEffect(() => {
    revalidateContext();
  }, []);

  return (
    <globalContext.Provider
      value={{
        userLocation,
        setUserLocation,
        cartCount,
        setCartCount,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export { GlobalContext, useGlobalContext };

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  ReactNode,
  RefObject,
} from "react";

interface HeightContext {
  height: number;
  setHeight: (value: number) => void;
}

const HeightContext = createContext<HeightContext | undefined>(undefined);

export const useHeight = (): HeightContext => {
  const context = useContext(HeightContext);
  if (!context) {
    throw new Error("useHeight must be used within a HeightProvider");
  }
  return context;
};

interface HeightProviderProps {
  children: ReactNode;
}

export const HeightProvider: React.FC<HeightProviderProps> = ({ children }) => {
  const [height, setHeight] = useState(0);

  return (
    <HeightContext.Provider value={{ height, setHeight }}>
      {children}
    </HeightContext.Provider>
  );
};

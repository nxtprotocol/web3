import { createContext, FC, useContext, useEffect, useState } from "react";
import { loadConfig } from "../constants/config";

interface ConfigProviderProps {
  children?: any;
}

const ConfigContext = createContext<Config | undefined>(undefined);

export const ConfigProvider: FC<ConfigProviderProps> = ({ children }) => {
  const [conf, setConf] = useState<Config>();
  async function init() {
    const confTmp = await loadConfig();
    setConf(confTmp);
  }
  useEffect(() => {
    init();
  }, []);

  if (!conf) {
    return null;
  }
  return (
    <ConfigContext.Provider value={conf}>{children}</ConfigContext.Provider>
  );
};

export const useConfig = () => useContext(ConfigContext)

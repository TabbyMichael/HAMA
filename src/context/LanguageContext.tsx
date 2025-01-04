import React, { createContext, useState, useContext } from 'react';

    interface LanguageContextProps {
      language: string;
      setLanguage: (language: string) => void;
    }

    const LanguageContext = createContext<LanguageContextProps>({
      language: 'en',
      setLanguage: () => {},
    });

    export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
      const [language, setLanguage] = useState('en');

      return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
          {children}
        </LanguageContext.Provider>
      );
    };

    export const useLanguage = () => useContext(LanguageContext);

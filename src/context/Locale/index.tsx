import React, { useReducer, createContext, ReactNode } from 'react';
import { LOCALE_STRINGS, REGIONS } from './constants';
import { LocalizedStrings } from './localetypes';

export interface ILocaleState {
  region: string;
  strings: LocalizedStrings;
}
interface ChangeLocaleAction {
  type: 'CHANGE_LOCALE';
  payload: {
    region: string;
  };
}
export type Action = ChangeLocaleAction;

interface LocaleContextValue {
  state: ILocaleState;
  dispatch: React.Dispatch<Action>;
}

const initialState = {
  region: REGIONS.EN,
  strings: LOCALE_STRINGS[REGIONS.EN],
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

const reducer = (state: ILocaleState, action: Action): ILocaleState => {
  switch (action.type) {
    case 'CHANGE_LOCALE': {
      return {
        ...state,
        region: action.payload.region,
        strings: { ...LOCALE_STRINGS[action.payload.region] },
      };
    }
    default:
      return state;
  }
};

interface LocaleProviderProps {
  children: ReactNode;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LocaleContext.Provider value={{ state, dispatch }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextValue => {
  const contextValue = React.useContext(LocaleContext);
  if (!contextValue) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return contextValue;
};

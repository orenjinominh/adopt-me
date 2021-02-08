import { createContext } from 'react'; 

// parameter is a hook with state and updater (empty func for now) 
const ThemeContext = createContext(['green', () => {}]);

export default ThemeContext;
import React from 'react';
import './App.scss';
import MainApp from './navigator/MainApp';
import { Provider } from 'react-redux';
import store from './redux/store';
import './i18n'
import { useTranslation } from 'react-i18next';


import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import useAuthentication from "./hooks/useAuthentication";


const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const cacheLtr = createCache({
  key: "muiltr"
});


function App() {

  const { i18n } = useTranslation();
  const direction = i18n.dir();
  const Theme = createTheme({ direction: direction });

  // var element: any = document.getElementById("root");
  // element.classList.add("root-fill-width");

  React.useLayoutEffect(() => {
    document.body.dir = direction
  }, [direction]);

  return (
    <CacheProvider value={direction === "ltr" ? cacheLtr : cacheRtl}>
      <ThemeProvider theme={Theme}>
        <Provider store={store}>
          <MainApp />
        </Provider>
      </ThemeProvider>
    </CacheProvider>


  );
}

export default App;

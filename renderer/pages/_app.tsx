import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from '../shared/theme/theme';
import { AppProps } from 'next/app';

import { useStore } from '../store/configureStore';
import useStyles from '../shared/styles/rootStyles';

export default function ({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);
  useStyles();

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <Head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <title>Yo Platforms</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

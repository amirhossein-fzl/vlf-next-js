import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../utils/createEmotionCache';
import Router from 'next/router';
import NProgress from '../src/nprogress';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from '../components/ScrollTop';

// Styles
import theme from '../styles/theme';
import '../styles/globals.scss';
import '../styles/bootstrap-grid.scss';
import '../styles/nprogress.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// RTL ( RIGHT-TO-LEFT )

import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [rtlPlugin],
});

// Progress Loader
NProgress.configure({ parent: 'body', rtl: true });
Router.events.on('routeChangeStart', () => {
    NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp(props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    return (
        <CacheProvider value={emotionCache}>
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <Component {...pageProps} />
                    <ScrollTop {...props}>
                        <Fab color="secondary" size="medium" aria-label="scroll back to top">
                            <KeyboardArrowUpIcon fontSize="large" />
                        </Fab>
                    </ScrollTop>
                </ThemeProvider>
            </CacheProvider>
        </CacheProvider>
    );
}

export default MyApp;

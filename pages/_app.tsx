import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import Head from 'next/head';
import { Box, Text, Footer, Grommet, grommet as grommetTheme } from 'grommet';
import { deepMerge } from 'grommet/utils';
import NormalTheme from '../src/lib/theme';
import useSetDarkMode from '../src/lib/useSetDarkMode';
import DarkModeToggle from '../src/components/DarkModeToggle';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { pageview } from '../src/lib/gtag';


function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkMode, setDarkMode, setInitialDarkMode] = useSetDarkMode();

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>whatsoundbars - Choose the right soundbar for you!</title>
      </Head>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-F31B29ZE21"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if(window.location.hostname !== 'localhost') {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-F31B29ZE21', {
                page_path: window.location.pathname,
              });
            }
          `,
        }}
      />
      <Grommet theme={deepMerge(grommetTheme, NormalTheme)} themeMode={isDarkMode ? 'dark' : 'light'}>
        <DarkModeToggle isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
        <Component {...pageProps} detectInitialDarkMode={setInitialDarkMode} />
      </Grommet>
    </>
  );
}

export default MyApp;

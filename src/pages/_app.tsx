import { useCallback, useEffect, useState } from 'react';

import { MapProvider } from 'react-map-gl';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { QueryClient, QueryClientProvider, Hydrate, DehydratedState } from '@tanstack/react-query';
import PlausibleProvider from 'next-plausible';

import { ToastProvider } from 'hooks/toast';

import ThirdParty from 'containers/third-party';

import { GAPage } from 'lib/analytics/ga';

import 'styles/globals.css';

const MyApp: React.FC<AppProps<{ dehydratedState: DehydratedState }>> = ({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) => {
  const router = useRouter();

  // Never ever instantiate the client outside a component, hook or callback as it can leak data
  // between users
  const [queryClient] = useState(() => new QueryClient());

  const handleRouteChangeCompleted = useCallback((url: string) => {
    GAPage(url);
  }, []);

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChangeCompleted);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeCompleted);
    };
  }, [router.events, handleRouteChangeCompleted]);

  return (
    <PlausibleProvider domain="naturebase.org">
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          {/* @ts-ignore: https://github.com/artsy/fresnel/issues/281 */}
          <ToastProvider placement="bottom-right" defaultAutoDismiss defaultAutoDismissTime={5000}>
            <MapProvider>
              <ThirdParty />
              <Component {...pageProps} />
            </MapProvider>
          </ToastProvider>
        </Hydrate>
      </QueryClientProvider>
    </PlausibleProvider>
  );
};

export default MyApp;

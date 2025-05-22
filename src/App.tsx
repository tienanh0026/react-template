import './styles/global.css';

import { createRouter, RouterProvider } from '@tanstack/react-router';
import type { PropsWithChildren } from 'react';

import QueryProvider from '@/libs/react-query/QueryClientProvider';

import { routeTree } from './routeTree.gen';

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultStaleTime: 5000,
  scrollRestoration: true,
});

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const AppProvider = ({ children }: PropsWithChildren) => {
  return <QueryProvider>{children}</QueryProvider>;
};

const App = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};

export default App;

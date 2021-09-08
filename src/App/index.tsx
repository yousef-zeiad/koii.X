import { QueryClient, QueryClientProvider } from 'react-query';
import Routes from 'routes';
// ui
import { ThemeLayout, AppLayout } from 'components/layouts';

/**
 *
 * @returns a query client
 * a query client is a wrapper around the fetch api
 * In this component we will return the routes that we want to use
 * and use it only as a <Routes/> component
 */

const queryClient = new QueryClient();

export const App = () => {
  return (
    <ThemeLayout>
      <QueryClientProvider client={queryClient}>
        <AppLayout>
          <Routes />
        </AppLayout>
      </QueryClientProvider>
    </ThemeLayout>
  );
};

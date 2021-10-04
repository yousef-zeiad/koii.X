import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "routes";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
/**
 *
 * @returns a query client
 * a query client is a wrapper around the fetch api
 * In this component we will return the routes that we want to use
 * and use it only as a <Routes/> component
 */
export const App: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

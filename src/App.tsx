// import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router/Routes";
// import { ErrorBoundry } from "./ErrorBoundry.tsx";

function App() {
  return (
    <>
      {/* <ErrorBoundry> */}
      <BrowserRouter>
        {/* <ChakraProvider */}
        {/* toastOptions={{
              defaultOptions: {
                position: "bottom-right",
                isClosable: true,
                duration: 5000,
              },
            }}
          > */}
        <AppRoutes />
        {/* </ChakraProvider> */}
      </BrowserRouter>
      {/* </ErrorBoundry> */}
    </>
  );
}

export default App;

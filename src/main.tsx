import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";
import "./index.css";
import { Store, persistor } from "./Redux/store";
import router from "./Routes/Routes";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
        <Toaster />
      </PersistGate>
    </Provider>
  </StrictMode>
);

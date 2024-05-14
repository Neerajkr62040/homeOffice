import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./Component/Pages/NotFound";
import TssrReport from "./Component/Pages/TssrReport";
import BusinessNavbar from "./Component/Navbar";
import HomePage from "./Component/Pages/HomePage";
import MainPage from "./layout/MainPage";
import { AuthProvider } from "./provider/auth";
import LoginForm from "./layout/LoginForm";
import { RequireAuth } from "./Component/RequireAuth";
import RootLayout from "./Component/layout";
import Header from "./layout/Header";
import Rough from "./layout/Rough";


const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainPage showDesc={true}>
                <LoginForm />
              </MainPage>
            }
          />

          <Route
            path="/home"
            element={
              <RequireAuth>
                <MainPage showDesc={true}>
                  <HomePage />
                </MainPage>
              </RequireAuth>
            }
          />

          <Route
            path="/tssr/:tssrId"
            element={
              <RequireAuth>
                <Header/>
                <RootLayout>
                <TssrReport />
                </RootLayout>
              </RequireAuth>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </AuthProvider>
    // <Rough/>
  );
};

export default App;

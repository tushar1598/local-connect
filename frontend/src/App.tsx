import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./app/hook";
import { getMe, refreshAccessToken } from "./features/auth/authThunk";
import Navbar from "./pages/Navbar";
import AppRouter from "./router/routes";
import { Toaster } from "react-hot-toast";
import Footer from "./pages/Footer";

function App() {
  const dispatch = useAppDispatch();
  const { authChecked } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const restoreSession = async () => {
      try {
        await dispatch(refreshAccessToken()).unwrap();
        await dispatch(getMe()).unwrap();
      } catch (error) {
        console.log("No Active Session");
      }
    };

    restoreSession();
  }, [dispatch]);

  if (!authChecked) return null;

  return (
    <>
      <Navbar />
      <AppRouter />
      <Toaster position="top-center" />
      <Footer />
    </>
  );
}

export default App;

import { createContext, useState } from "react";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { AddBlogPage } from "./Pages/AddBlogPage";
import { Root } from "./Pages/Root";

type userInfo = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UserContext = createContext<userInfo>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="/addblog" element={<AddBlogPage />} />
    </Route>
  )
);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;

import HomePage from "./Pages/HomePage";
import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

import RootLayout from "./Pages/Root";
import AboutPage from "./Pages/AboutPage";
import DiscoverPage from "./Pages/DiscoverPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route path='/' element={<HomePage />}/>
      <Route path='about' element={<AboutPage />}/>
      <Route path='discover' element={<DiscoverPage />}/>
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

import Body from "./components/Body";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Watch from "./components/Watch";

const appRouter=createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Feed />
      },
      {

        path: "/watch",
        element: <Watch />
      }
    ]
  }
])
function App() {
  return (
    <div className=''>
     <Navbar />
     <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;

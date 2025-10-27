import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Blog from "../Pages/Blog/Blog";
import WriteArticle from "../Pages/WriteArticle/WriteArticle";
import Layouts from "../Layouts/Layouts";
import GenerateImage from "../Pages/GenerateImage/GenerateImage";
import RemoveBackground from "../Pages/RemoveBackground/RemoveBackground";
import RemoveObject from "../Pages/RemoveObject/RemoveObject";
import ReviewResume from "../Pages/ReviewResume/ReviewResume";
import Community from "../Pages/Community/Community";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ai",
    element: <Layouts />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "writeArticle",
        element: <WriteArticle />,
      },
      {
        path: "blogTitle",
        element: <Blog />,
      },
      {
        path: "generateImage",
        element: <GenerateImage />,
      },
      {
        path: "removeBackground",
        element: <RemoveBackground />,
      },
      {
        path: "removeObject",
        element: <RemoveObject />,
      },
      {
        path: "reviewResume",
        element: <ReviewResume />,
      },
      {
        path: "community",
        element: <Community />,
      },
    ],
  },
]);

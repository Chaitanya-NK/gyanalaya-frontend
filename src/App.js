import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";
import HomePage from "./pages/home/HomePage";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import ProfilePage from "./pages/profile/ProfilePage";
import AdminLayout from "./pages/admin/AdminLayout";
import Admin from "./pages/admin/screens/Admin";
import Comments from "./pages/admin/screens/comments/Comments";
import ManagePosts from "./pages/admin/screens/posts/ManagePosts";
import EditPost from "./pages/admin/screens/posts/EditPost";
import Categories from "./pages/admin/screens/categories/Categories";
import EditCategories from "./pages/admin/screens/categories/EditCategories";
import Users from "./pages/admin/screens/users/Users";
import BlogPage from "./pages/blog/BlogPage";
import AboutPage from "./pages/about/AboutPage";
import PDFUploader from "./pages/admin/screens/pdf/pdfUploader";
import PDFList from "./pages/admin/screens/pdf/pdfList";
import Pricing from "./pages/pricing/Pricing";
import FAQ from "./pages/faq/FAQ";

const routeConfig = [
    { path: "/", element: <HomePage /> },
    { path: "/blogs", element: <BlogPage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/pricing", element: <Pricing /> },
    { path: "/faq", element: <FAQ /> },
    { path: "/blog/:slug", element: <ArticleDetailPage /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/profile", element: <ProfilePage /> },
    {
      path: "/admin", element: <AdminLayout />, children: [
        { path: "", element: <Admin /> },
        { path: "comments", element: <Comments /> },
        { path: "pdf", element: <PDFUploader /> },
        { path: "pdfs", element: <PDFList /> },
        { path: "posts/manage", element: <ManagePosts /> },
        { path: "posts/manage/edit/:slug", element: <EditPost /> },
        { path: "categories/manage", element: <Categories /> },
        { path: "categories/manage/edit/:slug", element: <EditCategories /> },
        { path: "users/manage", element: <Users /> },
      ]
    }
  ];
  
  const App = () => {
    return (
      <>
      <Routes>
        {routeConfig.map(({ path, element, children }, index) => (
          children ? (
            <Route key={index} path={path} element={element}>
              {children.map((child, idx) => (
                <Route key={idx} path={child.path} element={child.element} />
              ))}
            </Route>
          ) : (
            <Route key={index} path={path} element={element} />
          )
        ))}
      </Routes>
      <Toaster />
      </>
    );
  };
  

export default App;

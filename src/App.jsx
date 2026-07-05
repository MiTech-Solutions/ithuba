import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import CookieBanner from "./components/common/CookieBanner";
import Home from "./pages/Home";
import Bursaries from "./pages/Bursaries";
import BursaryDetail from "./pages/BursaryDetail";
import Categories from "./pages/Categories";
import CategoryPage from "./pages/CategoryPage";
import Submit from "./pages/Submit";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/"                              element={<Home />} />
              <Route path="/bursaries"                     element={<Bursaries />} />
              <Route path="/bursaries/:slug"               element={<BursaryDetail />} />
              <Route path="/bursaries/:dimension/:slug"    element={<CategoryPage />} />
              <Route path="/categories"                    element={<Categories />} />
              <Route path="/submit"                        element={<Submit />} />
              <Route path="/about"                         element={<About />} />
              <Route path="/privacy-policy"                element={<PrivacyPolicy />} />
              <Route path="/terms"                         element={<Terms />} />
              <Route path="/contact"                       element={<Contact />} />
              <Route path="*"                              element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <CookieBanner />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

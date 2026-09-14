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
import OpportunityPage from "./pages/OpportunityPage";
import Submit from "./pages/Submit";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import ApiDocs from "./pages/ApiDocs";
import NotFound from "./pages/NotFound";
import PageTransition from "./components/common/PageTransition";
import NewsletterSignup from "./components/common/NewsletterSignup";
import Guides from "./pages/guides/Guides";
import HowToApply from "./pages/guides/HowToApply";
import BursaryVsScholarship from "./pages/guides/BursaryVsScholarship";
import Documents from "./pages/guides/Documents";
import InterviewQuestions from "./pages/guides/InterviewQuestions";
import Scholarships from "./pages/Scholarships";
import ScholarshipDetail from "./pages/ScholarshipDetail";
import Articles from "./pages/articles/Articles";
import ArticleNSFAS from "./pages/articles/NSFAS";
import ArticleTop10Bursaries from "./pages/articles/Top10Bursaries";
import ArticleEngineeringBursaries from "./pages/articles/EngineeringBursaries";
import ArticleFirstYearBursaries from "./pages/articles/FirstYearBursaries";
import ArticleMotivationLetter from "./pages/articles/MotivationLetter";
import ArticleNSFASvsCorporate from "./pages/articles/NSFASvsCorporate";
import ArticleBursaryVsLoan from "./pages/articles/BursaryVsLoan";
import ArticleNursingMedicineBursaries from "./pages/articles/NursingMedicineBursaries";
import ArticleITBursaries from "./pages/articles/ITBursaries";
import ArticleFinanceBursaries from "./pages/articles/FinanceBursaries";
import ArticleStipendBursaries from "./pages/articles/StipendBursaries";
import ArticleFailYear from "./pages/articles/FailYear";
import ArticleMultipleBursaries from "./pages/articles/MultipleBursaries";
import ArticleRejection from "./pages/articles/Rejection";
import ArticleWorkBack from "./pages/articles/WorkBack";
import ArticleLawBursaries from "./pages/articles/LawBursaries";
import ArticleTeachingBursaries from "./pages/articles/TeachingBursaries";
import ArticleGautengBursaries from "./pages/articles/GautengBursaries";
import ArticleWesternCapeBursaries from "./pages/articles/WesternCapeBursaries";
import ArticleTVETBursaries from "./pages/articles/TVETBursaries";
import ArticlePostgradBursaries from "./pages/articles/PostgradBursaries";
import ArticleCorporateEmploymentBursaries from "./pages/articles/CorporateEmploymentBursaries";
import ArticleGovernmentBursaries from "./pages/articles/GovernmentBursaries";
import ArticleNoClosingDateBursaries from "./pages/articles/NoClosingDateBursaries";
import ArticleMeritVsNeedScholarship from "./pages/articles/MeritVsNeedScholarship";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <PageTransition>
              <Routes>
                <Route path="/"                                                          element={<Home />} />
                <Route path="/bursaries"                                                 element={<Bursaries />} />
                <Route path="/bursaries/:slug"                                           element={<BursaryDetail />} />
                <Route path="/bursaries/:dimension/:slug"                                element={<CategoryPage />} />
                <Route path="/categories"                                                element={<Categories />} />
                <Route path="/opportunities/:dimension/:slug"                            element={<OpportunityPage />} />
                <Route path="/submit"                                                    element={<Submit />} />
                <Route path="/about"                                                     element={<About />} />
                <Route path="/privacy-policy"                                            element={<PrivacyPolicy />} />
                <Route path="/terms"                                                     element={<Terms />} />
                <Route path="/contact"                                                   element={<Contact />} />
                <Route path="/api-docs"                                                  element={<ApiDocs />} />
                <Route path="/scholarships"                                              element={<Scholarships />} />
                <Route path="/scholarships/:slug"                                        element={<ScholarshipDetail />} />
                <Route path="/articles"                                                  element={<Articles />} />
                <Route path="/articles/nsfas-2026-guide"                                element={<ArticleNSFAS />} />
                <Route path="/articles/top-10-bursaries-open-now"                      element={<ArticleTop10Bursaries />} />
                <Route path="/articles/best-bursaries-for-engineering-students"        element={<ArticleEngineeringBursaries />} />
                <Route path="/articles/bursaries-for-first-year-students"              element={<ArticleFirstYearBursaries />} />
                <Route path="/articles/how-to-write-a-bursary-motivation-letter"       element={<ArticleMotivationLetter />} />
                <Route path="/articles/nsfas-vs-corporate-bursary"                     element={<ArticleNSFASvsCorporate />} />
                <Route path="/articles/bursary-vs-student-loan"                        element={<ArticleBursaryVsLoan />} />
                <Route path="/articles/best-bursaries-for-nursing-and-medicine-students" element={<ArticleNursingMedicineBursaries />} />
                <Route path="/articles/best-bursaries-for-it-students"                 element={<ArticleITBursaries />} />
                <Route path="/articles/best-bursaries-for-accounting-and-finance-students" element={<ArticleFinanceBursaries />} />
                <Route path="/articles/bursaries-with-monthly-stipend"                 element={<ArticleStipendBursaries />} />
                <Route path="/articles/what-happens-to-your-bursary-if-you-fail"       element={<ArticleFailYear />} />
                <Route path="/articles/can-you-hold-more-than-one-bursary"             element={<ArticleMultipleBursaries />} />
                <Route path="/articles/what-to-do-if-your-bursary-application-is-rejected" element={<ArticleRejection />} />
                <Route path="/articles/how-to-get-out-of-a-bursary-work-back-agreement" element={<ArticleWorkBack />} />
                <Route path="/articles/best-bursaries-for-law-students"                element={<ArticleLawBursaries />} />
                <Route path="/articles/best-bursaries-for-teaching-students"           element={<ArticleTeachingBursaries />} />
                <Route path="/articles/bursaries-in-gauteng"                           element={<ArticleGautengBursaries />} />
                <Route path="/articles/bursaries-in-western-cape"                      element={<ArticleWesternCapeBursaries />} />
                <Route path="/articles/bursaries-for-tvet-college-students"            element={<ArticleTVETBursaries />} />
                <Route path="/articles/bursaries-for-postgraduate-students"            element={<ArticlePostgradBursaries />} />
                <Route path="/articles/corporate-bursaries-with-guaranteed-employment" element={<ArticleCorporateEmploymentBursaries />} />
                <Route path="/articles/government-bursaries-south-africa"              element={<ArticleGovernmentBursaries />} />
                <Route path="/articles/bursaries-with-no-closing-date"                element={<ArticleNoClosingDateBursaries />} />
                <Route path="/articles/merit-scholarship-vs-need-based-scholarship"   element={<ArticleMeritVsNeedScholarship />} />
                <Route path="/guides"                                                    element={<Guides />} />
                <Route path="/guides/how-to-apply-for-a-bursary"                        element={<HowToApply />} />
                <Route path="/guides/difference-between-bursaries-and-scholarships"     element={<BursaryVsScholarship />} />
                <Route path="/guides/documents-you-need-before-applying"                element={<Documents />} />
                <Route path="/guides/common-bursary-interview-questions"                element={<InterviewQuestions />} />
                <Route path="*"                                                          element={<NotFound />} />
              </Routes>
            </PageTransition>
          </main>
          <NewsletterSignup variant="bar" />
          <Footer />
          <CookieBanner />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}


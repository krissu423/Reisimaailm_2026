import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { BookingPage } from "./pages/BookingPage";
import { PaymentPage } from "./pages/PaymentPage";
import { MyTripsPage } from "./pages/MyTripsPage";
import { DocumentsPage } from "./pages/DocumentsPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { AboutPage } from "./pages/AboutPage";
import { TermsPage } from "./pages/TermsPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { FAQPage } from "./pages/FAQPage";

import { createHashRouter } from "react-router";

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "search", element: <SearchPage /> },
      { path: "booking", element: <BookingPage /> },
      { path: "payment", element: <PaymentPage /> },
      { path: "my-trips", element: <MyTripsPage /> },
      { path: "documents", element: <DocumentsPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "terms", element: <TermsPage /> },
      { path: "privacy", element: <PrivacyPage /> },
      { path: "faq", element: <FAQPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
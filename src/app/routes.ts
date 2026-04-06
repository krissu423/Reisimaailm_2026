import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { BookingPage } from "./pages/BookingPage";
import { PaymentPage } from "./pages/PaymentPage";
import { MyTripsPage } from "./pages/MyTripsPage";
import { DocumentsPage } from "./pages/DocumentsPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Layout,
      children: [
        { index: true, Component: HomePage },
        { path: "search", Component: SearchPage },
        { path: "booking", Component: BookingPage },
        { path: "payment", Component: PaymentPage },
        { path: "my-trips", Component: MyTripsPage },
        { path: "documents", Component: DocumentsPage },
        { path: "contact", Component: ContactPage },
        { path: "*", Component: NotFoundPage },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL.replace(/\/$/, ""),
  }
);
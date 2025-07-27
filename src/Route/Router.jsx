import { createBrowserRouter } from "react-router-dom";
import PaymentPage from "../PaymentControll/PaymentPage";
import PaymentSuccessPage from "../PaymentControll/PaymentSuccessPage";
import PaymentFailedPage from "../PaymentControll/PaymentFailedPage";
import PaymentCancelPage from "../PaymentControll/PaymentCancelPage";
import MainLayout from "../Layout/MainLayout";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/:parcelId",
                element: <PaymentPage />
            },
            {
                path: "/success",
                element: <PaymentSuccessPage />
            },
            {
                path: "/failed",
                element: <PaymentFailedPage />
            },
            {
                path: "/cancel",
                element: <PaymentCancelPage />
            }

        ]
    }
]);

export default appRouter;
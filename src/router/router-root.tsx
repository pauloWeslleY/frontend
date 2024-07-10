import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import * as Page from './../pages'

export function RouterRoot() {
  const router = createBrowserRouter([
    {
      path: "/",
      index: true,
      element: <Page.CreateTripPage />,
    },
    {
      path: "/trips/:tripId",
      element: <Page.TripDetails />,
    },
  ]);

  return <RouterProvider router={router} />
}

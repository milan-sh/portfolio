import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "@/components/shared/Navbar";
import { Toaster } from "sonner";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
      <Toaster position="top-center" richColors />
    </React.Fragment>
  );
}

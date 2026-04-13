import { Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "@/components/shared/Navbar";
import { Toaster } from "sonner";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="mx-auto max-w-6xl">
      <Navbar />
      <Outlet />
      <Toaster position="top-center" richColors />
    </div>
  );
}

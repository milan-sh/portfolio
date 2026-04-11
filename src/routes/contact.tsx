import ContactForm from "@/components/shared/contact/ContactForm";
import Heading from "@/components/shared/Heading";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex-1 flex flex-col px-6 pt-8 sm:py-12 sm:px-10 md:px-16 lg:px-20">
      <Heading>Let's Talk 🤔</Heading>

      <div className="my-8 text-center">
        <ContactForm />
      </div>
    </div>
  );
}

import { Card } from "@/components/retroui/Card";
import { Input } from "@/components/retroui/Input";
import { Label } from "@/components/retroui/Label";
import { Textarea } from "@/components/retroui/Textarea";
import ButtonAnimated from "../ButtonAnimated";
import { Loader2, Send } from "lucide-react";
import React from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast("Please fill in all fields.");
      return;
    }

    if (!formRef.current) return;

    try {
      setLoading(true);

      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_ID
      );

      toast.success("Message sent successfully!");

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log("EmailJS Error:", error);
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl border-2 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 p-5 sm:p-6"
      >
        {/* Name + Email */}
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <div className="flex-1 text-start w-full">
            <Label
              htmlFor="name"
              className="font-semibold mb-1 block text-sm tracking-wide"
            >
              NAME
            </Label>
            <Input
              id="name"
              name="user_name"
              placeholder="Your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow-none rounded-md focus:ring-2 focus:ring-black focus:border-black transition"
            />
          </div>

          <div className="flex-1 text-start w-full">
            <Label
              htmlFor="email"
              className="font-semibold mb-1 block text-sm tracking-wide"
            >
              EMAIL
            </Label>
            <Input
              id="email"
              name="user_email"
              placeholder="Your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-none rounded-md focus:ring-2 focus:ring-black focus:border-black transition"
            />
          </div>
        </div>

        {/* Message */}
        <div className="text-start">
          <Label
            htmlFor="message"
            className="font-semibold mb-1 block text-sm tracking-wide"
          >
            MESSAGE
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Your message"
            required
            value={message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
            className="shadow-none rounded-md focus:ring-2 focus:ring-black focus:border-black transition"
            rows={5}
          />
        </div>

        {/* Submit Button */}
        <ButtonAnimated
          disabled={loading}
          type="submit"
          bgColor="bg-green-400"
          className="w-full flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <span>Sending...</span>
              <Loader2 className="animate-spin" />
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send />
            </>
          )}
        </ButtonAnimated>
      </form>
    </Card>
  );
};

export default ContactForm;
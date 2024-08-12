import { ChevronRight } from "lucide-react";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-2 w-1/4 mx-auto">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Please enter your email"
        className="py-2 px-2 mb-2 rounded text-slate-900"
      />
      <label htmlFor="number">Mobile</label>
      <input
        type="tel"
        id="number"
        name="number"
        placeholder="Enter your mobile"
        className="py-2 px-2 mb-2 rounded text-slate-900"
      />
      <label>Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Enter your message"
        rows={4}
        className="py-2 px-2 mb-2 rounded text-slate-900 no-resize"
      />
      <button
        type="submit"
        className="p-2 flex flex-row gap-2 justify-center bg-green-600 rounded"
      >
        Submit <ChevronRight />
      </button>
    </form>
  );
}

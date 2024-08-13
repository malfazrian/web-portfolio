import { ChevronRight } from "lucide-react";

export default function ContactForm() {
  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="flex flex-col gap-2 w-2/3 mx-auto sm:w-1/4"
    >
      <input
        type="hidden"
        name="access_key"
        value="5856a50c-20ed-4b38-bd1e-b851dd363101"
      ></input>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        className="py-2 px-2 mb-2 rounded text-slate-900"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Please enter your email"
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

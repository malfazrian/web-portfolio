import { ChevronRight } from "lucide-react";
import { useState, useRef, FormEvent } from "react";

export default function ContactForm() {
  const [result, setResult] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.currentTarget);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (accessKey) {
      formData.append("access_key", accessKey);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Submitted Successfully");
        setIsSubmitted(true);
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        console.error("Error", data);
        setResult(data.message || "Failed to submit form.");
      }
    } else {
      setResult("Access key is missing.");
      console.error("Access key is missing.");
    }
  };

  return (
    <div className="min-h-96 flex justify-center items-center">
      {!isSubmitted ? (
        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="flex flex-col gap-2 w-2/3 mx-auto sm:w-1/4"
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="py-2 px-2 mb-2 rounded text-slate-900"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Please enter your email"
            className="py-2 px-2 mb-2 rounded text-slate-900"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            rows={4}
            className="py-2 px-2 mb-2 rounded text-slate-900 no-resize"
            required
          />
          <button
            type="submit"
            className="p-2 flex flex-row gap-2 justify-center bg-green-600 rounded"
          >
            Submit <ChevronRight />
          </button>
        </form>
      ) : (
        <span className="font-bold">{result}</span>
      )}
    </div>
  );
}

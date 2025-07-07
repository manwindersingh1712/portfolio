import React, { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LetsWorkTogether = () => {
  const [state, handleSubmit] = useForm("xzzgqelo");
  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Thank you! Your message has been sent.");
      formRef.current?.reset(); // ✅ Clear the form
    }
  }, [state.succeeded]);

  return (
    <>
      <div id="contact" className="pt-0 sm:pt-20 mb-30">
        <ToastContainer position="top-center" autoClose={3000} />

        <div className="text-white font-bold text-[48px] sm:text-[94px] leading-[48px] sm:leading-[94px] text-center sm:text-left">
          LET'S WORK
        </div>
        <div className="font-bold text-[48px] sm:text-[94px] leading-[48px] sm:leading-[94px] text-[#b6b4bd33] text-center sm:text-left">
          TOGETHER
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col mt-10 space-y-6"
        >
          {/* Name & Email Fields */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="text-sm text-white block mb-1">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-[#2c2c2c] text-white px-4 py-3 rounded-md outline-none border border-transparent focus:ring-0 focus:border-[rgb(244,108,56)]"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="flex-1">
              <label className="text-sm text-white block mb-1">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your@email.com"
                required
                className="w-full bg-[#2c2c2c] text-white px-4 py-3 rounded-md outline-none border border-transparent focus:ring-0 focus:border-[rgb(244,108,56)]"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-white block mb-1">Regarding</label>
            <select
              name="regarding"
              required
              className="w-full bg-[#2c2c2c] text-white px-4 py-3 rounded-md outline-none border border-transparent focus:ring-0 focus:border-[rgb(244,108,56)] appearance-none"
            >
              <option value="">Select...</option>
              <option value="general">General Inquiry</option>
              <option value="collaboration">Project Collaboration</option>
              <option value="freelance">Freelance Opportunity</option>
              <option value="job">Job Offer</option>
              <option value="speaking">Speaking Engagement</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm text-white block mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Message"
              className="w-full h-40 resize-y bg-[#2c2c2c] text-white px-4 py-3 rounded-md outline-none border border-transparent focus:ring-0 focus:border-[rgb(244,108,56)]"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={state.submitting}
            style={{ backgroundColor: "rgb(244, 108, 56)" }}
            className="cursor-pointer text-white font-medium py-3 rounded-md w-full hover:opacity-90 transition"
          >
            {state.submitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
      <div className="pb-10">
        <p className="text-[16px] leading-[25.2px] text-[#998f8f] mt-3 text-center sm:text-left">
          Built by{" "}
          <span style={{ color: "rgb(244, 108, 56)" }}>Manwinder </span>
          with ❤️ in 2025{" "}
        </p>
      </div>
    </>
  );
};

export default LetsWorkTogether;

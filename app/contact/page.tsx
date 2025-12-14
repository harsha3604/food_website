"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("../components/LeafletMap"), {
  ssr: false,
});

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Intro / Title Section */}
      <section className="bg-[#f7f7f5]">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h1 className="text-4xl md:text-5xl font-serif text-[#87a96b] mb-6">
            Contact Us
          </h1>

          <p className="text-[#87a96b] text-lg leading-snug max-w-3xl">
            Welcome to sree krithi farms, your local source for fresh,
            high-quality fruits and vegetables. We are dedicated to bring the
            farm produce directly to your table, ensuring you enjoy the best of
            what nature has to offer.
          </p>
        </div>
      </section>

      {/* Contact + Map Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* LEFT: Contact Form */}
          <div>
            <h2 className="text-3xl font-serif text-[#87a96b] mb-10">
              Get in touch
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-gray-600 mb-2">Name *</label>
                <input
                  type="text"
                  required
                  className="w-full bg-gray-100 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-[#87a96b]"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-2">
                  Email address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-gray-100 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-[#87a96b]"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-2">Message *</label>
                <textarea
                  rows={5}
                  required
                  className="w-full bg-gray-100 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-[#87a96b]"
                />
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" />
                <span>Send me a copy</span>
              </div>

              <button
                type="submit"
                className="bg-[#87a96b] text-white px-6 py-3 rounded-md hover:opacity-90 transition"
              >
                Submit form
              </button>
            </form>
          </div>

          {/* RIGHT: Map + Info */}
          <div className="space-y-8">
            {/* Map */}
            <div className="w-full h-[300px] rounded-lg overflow-hidden">
              <LeafletMap lat={33.3246} lng={-96.7844} />
            </div>

            {/* Location */}
            <div>
              <h3 className="text-2xl font-serif text-[#87a96b] mb-2">
                Location
              </h3>
              <p className="text-gray-600">
                Celina, Texas
                <br />
                United States
              </p>
            </div>

            {/* Phone */}
            <div>
              <h3 className="text-2xl font-serif text-[#87a96b] mb-2">Phone</h3>
              <a
                href="tel:4692685746"
                className="text-[#87a96b] hover:underline"
              >
                469-268-5746
              </a>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-2xl font-serif text-[#87a96b] mb-2">Email</h3>
              <a
                href="mailto:fresh@sreekrithifarms.com"
                className="text-[#87a96b] hover:underline"
              >
                fresh@sreekrithifarms.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6">
              {/* Instagram */}
              <a
                href="https://instagram.com/sreekrithifarms/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#87a96b] hover:opacity-80 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.75-.88a.88.88 0 1 1 0 1.76.88.88 0 0 1 0-1.76z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://api.whatsapp.com/send?phone=1-469-268-5746"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-[#87a96b] hover:opacity-80 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a10 10 0 0 0-8.94 14.47L2 22l5.69-1.5A10 10 0 1 0 12 2zm0 18a7.96 7.96 0 0 1-4.07-1.12l-.29-.17-3.38.89.9-3.29-.19-.3A8 8 0 1 1 12 20zm4.43-5.57c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.43h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.65.58.25 1.03.4 1.38.51.58.18 1.1.15 1.52.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

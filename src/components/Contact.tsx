import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import ContactForm from './ContactForm';
import CopyEmailButton from './CopyEmailButton';

export default function Contact() {
  return (
    <section
      id="contact"
      className="section bg-slate-50 dark:bg-slate-900/40 text-foreground w-full py-20 border-t border-slate-200 dark:border-slate-800/70"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center rounded-full bg-rose-100 dark:bg-pink-950/50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-rose-700 dark:text-pink-300 ring-1 ring-rose-200 dark:ring-pink-800 mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let&apos;s build something great together
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Have a project in mind, or just want to say hello? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm shadow-slate-900/[0.04] flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Contact Channels
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Available for freelance and full-time roles — let&apos;s talk.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href="https://wa.me/923284024706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 rounded-2xl p-3.5 bg-slate-50 dark:bg-slate-800/60 hover:bg-rose-50/50 dark:hover:bg-rose-950/20 border border-slate-200/80 dark:border-slate-700/60 transition-all group"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 group-hover:scale-105 transition-transform">
                    <FaWhatsapp className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 block">WhatsApp</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                      +92 328 4024706
                    </span>
                  </div>
                </a>

                <div className="flex items-center justify-between rounded-2xl p-3.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400">
                      <FaEnvelope className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <span className="text-[11px] font-semibold text-slate-500 block">
                        Email Address
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 truncate block">
                        hamayalansari10@gmail.com
                      </span>
                    </div>
                  </div>
                  <CopyEmailButton />
                </div>

                <div className="flex items-center gap-3.5 rounded-2xl p-3.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300">
                    <FaMapMarkerAlt className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 block">
                      Base Location
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                      Lahore, Punjab, Pakistan
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-3">
                Professional Networks
              </span>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/hamayal-ansari-a12b10371/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 border border-[#0A66C2]/30 px-4 py-2.5 text-xs font-bold text-[#0A66C2] dark:text-[#6eb3f7] transition-all"
                >
                  <FaLinkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/hamayalansari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 px-4 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 transition-all"
                >
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

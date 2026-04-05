import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";

const emailConfig = {
  serviceId:
    import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "service_agbv0ew",
  templateId:
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "template_8dbatsf",
  publicKey:
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "Upgo8b2oqKMPZWD8N",
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "yashchoudhari4301@gmail.com",
    href: "mailto:yashchoudhari4301@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "Available on request",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pune, Maharashtra, India",
  },
];

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm() || isSubmitting) {
      return;
    }

    setSubmitStatus("idle");
    setStatusMessage("");
    setIsSubmitting(true);

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          name: formState.name,
          email: formState.email,
          message: formState.message,
          from_name: formState.name,
          from_email: formState.email,
          reply_to: formState.email,
          subject: `Portfolio inquiry from ${formState.name}`,
          to_name: "Yash Choudhari",
        },
        emailConfig.publicKey,
      );

      setSubmitStatus("success");
      setStatusMessage("Message sent successfully. I'll get back to you soon.");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
      setStatusMessage(
        "Couldn't send the message right now. You can also email me directly at yashchoudhari4301@gmail.com.",
      );
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl sm:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Let&apos;s Build Something Great
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                  Have a project in mind, a freelance opportunity, or just want
                  to connect? Send a message and I&apos;ll get back to you soon.
                </p>
              </div>

              <div className="space-y-4">
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-base font-medium text-white transition-colors hover:text-purple-300"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-base font-medium text-white">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-200"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={handleChange}
                    className={`block w-full rounded-2xl border bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 transition-colors ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500/30"
                        : "border-white/10 focus:border-purple-400 focus:ring-purple-500/30"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-200"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={handleChange}
                    className={`block w-full rounded-2xl border bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 transition-colors ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500/30"
                        : "border-white/10 focus:border-purple-400 focus:ring-purple-500/30"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-200"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell me a little about your project or idea..."
                    value={formState.message}
                    onChange={handleChange}
                    className={`block w-full resize-none rounded-2xl border bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 transition-colors ${
                      errors.message
                        ? "border-red-500 focus:ring-red-500/30"
                        : "border-white/10 focus:border-purple-400 focus:ring-purple-500/30"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-2xl bg-purple-500 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-900/30 transition-colors hover:bg-purple-400 disabled:cursor-not-allowed disabled:bg-purple-300/60 disabled:text-white/70"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>

              {submitStatus === "success" && (
                <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-emerald-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
                    <p>{statusMessage}</p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-red-300">
                  <div className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0" />
                    <p>{statusMessage}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

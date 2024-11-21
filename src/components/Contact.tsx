import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';
import emailjs from 'emailjs-com';  // Import EmailJS

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm() || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace 'YOUR_SERVICE_ID', 'template_7kisy6a', and 'YOUR_USER_ID' with actual values
      await emailjs.sendForm('service_agbv0ew', 'template_8dbatsf', e.target as HTMLFormElement, 'Upgo8b2oqKMPZWD8N');
      
      setSubmitStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 border border-blue-200"
        >
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-700">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Have a question or want to work together? Fill out the form below!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={formState.name}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-3 rounded-lg border ${
                  errors.name ? 'border-red-500' : 'border-blue-300'
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                value={formState.email}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-3 rounded-lg border ${
                  errors.email ? 'border-red-500' : 'border-blue-300'
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your message here..."
                value={formState.message}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-3 rounded-lg border ${
                  errors.message ? 'border-red-500' : 'border-blue-300'
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none`}
              />
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 disabled:bg-blue-300"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {submitStatus === 'success' && (
            <div className="mt-6 text-center text-green-600">
              <CheckCircle className="w-6 h-6 mx-auto" />
              <p className="mt-2 text-lg">Message sent successfully!</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-6 text-center text-red-600">
              <XCircle className="w-6 h-6 mx-auto" />
              <p className="mt-2 text-lg">Something went wrong. Please try again later.</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

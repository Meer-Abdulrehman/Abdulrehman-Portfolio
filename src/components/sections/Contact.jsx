import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Github, Linkedin, Phone, CheckCircle2, AlertCircle, Send, Sparkles, Clock, MapPin } from 'lucide-react'
import { personalInfo } from '../../data/personalInfo'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { fadeUp, viewportOnce } from '../../utils/animations'

const initialForm = { name: '', email: '', projectType: '', budget: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.projectType) errors.projectType = 'Select a project type.'
  if (!values.message.trim()) errors.message = 'Tell me a bit about the project.'
  return errors
}

const fieldClass =
  'w-full rounded-2xl border border-line bg-canvas px-4 py-3.5 text-xs text-ink-900 font-medium outline-none transition-all duration-200 placeholder:text-ink-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'

export default function Contact() {
  const [values, setValues] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate(values)
    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      setStatus('error')
      return
    }

    setStatus('success')
    setValues(initialForm)
  }

  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-surface">
      {/* Background Decorative Ambient Glow */}
      <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-1/3 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="container-page relative z-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your project."
          description="Whether you have an ambitious product to build, a full-time role, or just a technical question — I read every message and respond promptly."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left Column: Direct Contact Cards */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-4"
          >
            {/* Direct Contact Links */}
            <ContactLink
              icon={Mail}
              label="Email Address"
              value={personalInfo.email}
              href={`mailto:${personalInfo.email}`}
              color="#818CF8"
            />
            <ContactLink
              icon={Linkedin}
              label="LinkedIn Profile"
              value="Abdulrehman"
              href={personalInfo.social.linkedin}
              color="#38BDF8"
            />
            <ContactLink
              icon={Github}
              label="GitHub Repositories"
              value="Abdulrehman"
              href={personalInfo.social.github}
              color="#C084FC"
            />
            {personalInfo.phone && (
              <ContactLink
                icon={Phone}
                label="Direct Phone"
                value={personalInfo.phone}
                href={`tel:${personalInfo.phone}`}
                color="#10B981"
              />
            )}
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-line bg-canvas p-7 shadow-card sm:p-9"
          >
            <div className="mb-6 flex items-center justify-between border-b border-line/60 pb-4">
              <h3 className="font-display text-lg font-bold text-ink-900">
                Send a Message
              </h3>
              <span className="flex items-center gap-1 font-mono text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
                <Sparkles size={12} /> Direct Dispatch
              </span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your Name" name="name" value={values.name} onChange={handleChange} error={errors.name} placeholder="e.g. Alex Rivera" />
              <Field label="Your Email" name="email" type="email" value={values.email} onChange={handleChange} error={errors.email} placeholder="alex@company.com" />

              <div>
                <label htmlFor="projectType" className="mb-1.5 block text-xs font-bold text-ink-900">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={values.projectType}
                  onChange={handleChange}
                  className={`${fieldClass} ${errors.projectType ? '!border-red-400' : ''}`}
                >
                  <option value="">Select one option</option>
                  <option value="fullstack">Full-Stack Web App</option>
                  <option value="saas">SaaS MVP Development</option>
                  <option value="api">API / Backend Engineering</option>
                  <option value="ecommerce">E-Commerce Marketplace</option>
                  <option value="role">Full-Time / Contract Role</option>
                </select>
                {errors.projectType && <FieldError message={errors.projectType} />}
              </div>

              <div>
                <label htmlFor="budget" className="mb-1.5 block text-xs font-bold text-ink-900">
                  Budget <span className="text-ink-400 font-normal">(optional)</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={values.budget}
                  onChange={handleChange}
                  className={fieldClass}
                >
                  <option value="">Select a range</option>
                  <option value="<2k">Under $2,000</option>
                  <option value="2-5k">$2,000 – $5,000</option>
                  <option value="5-15k">$5,000 – $15,000</option>
                  <option value="15k+">$15,000+</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-xs font-bold text-ink-900">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={handleChange}
                  placeholder="Tell me a bit about your goals, timeline, and tech stack requirements..."
                  className={`${fieldClass} resize-none ${errors.message ? '!border-red-400' : ''}`}
                />
                {errors.message && <FieldError message={errors.message} />}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line/60 pt-5">
              <button
                type="submit"
                className="group inline-flex items-center gap-2.5 rounded-2xl bg-indigo-600 px-7 py-3.5 text-xs font-bold text-white shadow-soft transition-all duration-300 hover:bg-indigo-500 hover:shadow-indigo-500/25 active:scale-95"
              >
                <span>Send Message</span>
                <Send size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.p
                    key="success"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-1.5 text-xs font-bold text-emerald-500"
                  >
                    <CheckCircle2 size={15} /> Message received — I&rsquo;ll get back to you shortly!
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    key="error"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-1.5 text-xs font-bold text-red-400"
                  >
                    <AlertCircle size={15} /> Please fill out the required fields.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, value, onChange, error, type = 'text', placeholder }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-bold text-ink-900">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${fieldClass} ${error ? '!border-red-400' : ''}`}
      />
      {error && <FieldError message={error} />}
    </div>
  )
}

function FieldError({ message }) {
  return <p className="mt-1 text-[11px] font-semibold text-red-400">{message}</p>
}

function ContactLink({ icon: Icon, label, value, href, color = '#818CF8' }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="group flex items-center gap-4 rounded-3xl border border-line bg-canvas p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-lift"
    >
      <span
        className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl border border-line/80 bg-surface shadow-soft transition-transform duration-300 group-hover:scale-110"
        style={{ color }}
      >
        <Icon size={20} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-ink-400">
          {label}
        </span>
        <span className="block truncate text-xs font-bold text-ink-900 group-hover:text-indigo-400 transition-colors">
          {value}
        </span>
      </span>
    </a>
  )
}

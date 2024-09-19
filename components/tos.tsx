'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Rocket } from 'lucide-react'

export default function TOSPage() {
  const buttonVariants = {
    hover: { scale: 1.05, transition: { yoyo: Infinity, duration: 0.3 } },
    tap: { scale: 0.95 }
  }

  const fadeInVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-blue-900 fixed w-full bg-black z-50">
        <Link className="flex items-center justify-center" href="/">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Rocket className="h-6 w-6 text-blue-500" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="ml-2 text-2xl font-bold"
          >
            Orbix Hosting
          </motion.span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors duration-200" href="/">
            Home
          </Link>
        </nav>
      </header>
      <main className="flex-1 pt-14">
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-blue-900 to-black">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[90%] max-w-4xl bg-blue-900 border-blue-800 p-6 rounded-lg overflow-y-auto max-h-[80vh]"
          >
            <h1 className="text-3xl font-bold text-blue-300 mb-4">Terms of Service</h1>
            <motion.p
              variants={fadeInVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
              className="text-blue-200 mb-4"
            >
              Welcome to Orbix Hosting! By using our services, you agree to the following terms and conditions. Please read them carefully.
            </motion.p>
            <motion.h2
              variants={fadeInVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.6 }}
              className="text-2xl font-semibold text-blue-300 mb-2"
            >
              1. Acceptance of Terms
            </motion.h2>
            <motion.p
              variants={fadeInVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.8 }}
              className="text-blue-200 mb-4"
            >
              By accessing or using our services, you agree to be bound by these Terms of Service and our Privacy Policy.
            </motion.p>
            <motion.h2
              variants={fadeInVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.0 }}
              className="text-2xl font-semibold text-blue-300 mb-2"
            >
              2. User Responsibilities
            </motion.h2>
            <motion.p
              variants={fadeInVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.2 }}
              className="text-blue-200 mb-4"
            >
              You agree to use our services in accordance with applicable laws and regulations. You are responsible for all activities that occur under your account.
            </motion.p>
            <motion.h2
              variants={fadeInVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.4 }}
              className="text-2xl font-semibold text-blue-300 mb-2"
            >
              3. Prohibited Activities
            </motion.h2>
            <motion.p
              variants={fadeInVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.6 }}
              className="text-blue-200 mb-4"
            >
              You are prohibited from using our services for unlawful purposes or in a way that could harm the integrity or functionality of our services.
            </motion.p>
            <motion.h2
              variants={fadeInVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.8 }}
              className="text-2xl font-semibold text-blue-300 mb-2"
            >
              4. Account Termination
            </motion.h2>
            <motion.p
              variants={fadeInVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 2.0 }}
              className="text-blue-200 mb-4"
            >
              We reserve the right to terminate or suspend your account if you violate these Terms of Service or for any other reason at our discretion.
            </motion.p>
            <motion.h2
              variants={fadeInVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 2.2 }}
              className="text-2xl font-semibold text-blue-300 mb-2"
            >
              5. Limitation of Liability
            </motion.h2>
            <motion.p
              variants={fadeInVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 2.4 }}
              className="text-blue-200 mb-4"
            >
              Our liability is limited to the fullest extent permitted by law. We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.
            </motion.p>
            <motion.h2
              variants={fadeInVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 2.6 }}
              className="text-2xl font-semibold text-blue-300 mb-2"
            >
              6. Changes to Terms
            </motion.h2>
            <motion.p
              variants={fadeInVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 2.8 }}
              className="text-blue-200 mb-4"
            >
              We may update these Terms of Service from time to time. We will notify you of any changes by posting the new Terms of Service on this page.
            </motion.p>
            <motion.h2
              variants={fadeInVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 3.0 }}
              className="text-2xl font-semibold text-blue-300 mb-2"
            >
              7. Contact Us
            </motion.h2>
            <motion.p
              variants={fadeInVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 3.2 }}
              className="text-blue-200 mb-4"
            >
              If you have any questions about these Terms of Service, please contact us:
            </motion.p>
            <ul className="list-disc pl-5 mb-4 text-blue-200">
              <li>By email: support@orbixhosting.com</li>
              <li>By visiting this page on our website: www.orbixhosting.com</li>
              <li>By joining our Discord server: discord.gg/orbixhosting</li>
            </ul>
          </motion.div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-blue-800">
        <p className="text-xs text-blue-400">© 2024 Orbix Hosting. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          {['Terms of Service', 'Privacy Policy'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <Link
                className="text-xs hover:underline underline-offset-4 text-blue-400"
                href={item === 'Terms of Service' ? '/tos' : '/privacy-policy'}
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>
      </footer>
    </div>
  )
}

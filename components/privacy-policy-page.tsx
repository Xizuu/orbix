'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Rocket } from 'lucide-react'

export default function PrivacyPolicyPage() {
  const buttonVariants = {
    hover: { scale: 1.05, transition: { yoyo: Infinity, duration: 0.3 } },
    tap: { scale: 0.95 }
  }

  const fadeInVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 } 
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-blue-900 fixed w-full bg-black z-50">
        <Link className="flex items-center justify-center" href="/">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Rocket className="h-6 w-6 text-blue-500" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }} 
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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}  // Shortened duration
            className="w-[90%] max-w-4xl bg-blue-900 border-blue-800 p-6 rounded-lg overflow-y-auto max-h-[80vh]"
          >
            <h1 className="text-3xl font-bold text-blue-300 mb-4">Privacy Policy</h1>
            <p className="text-blue-200 mb-4">
              Welcome to Orbix Hosting! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information. By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
            <h2 className="text-2xl font-semibold text-blue-300 mb-2">
              <motion.span
                initial="initial"
                animate="animate"
                variants={fadeInVariants}
              >
                1. Information Collection and Use
              </motion.span>
            </h2>
            <p className="text-blue-200 mb-4">
              We collect various types of information for various purposes to provide and improve our services to you. The types of information we collect include:
            </p>
            <ul className="list-disc pl-5 mb-4 text-blue-200">
              <li><strong>Personal Data:</strong> While using our services, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. This may include, but is not limited to, your email address, name, phone number, and postal address.</li>
              <li><strong>Usage Data:</strong> We may also collect information on how the service is accessed and used. This usage data may include information such as your computer's Internet Protocol (IP) address, browser type, browser version, the pages of our service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.</li>
            </ul>
            <h2 className="text-2xl font-semibold text-blue-300 mb-2">
              <motion.span
                initial="initial"
                animate="animate"
                variants={fadeInVariants}
              >
                2. Cookies and Tracking Technologies
              </motion.span>
            </h2>
            <p className="text-blue-200 mb-4">
              We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
            </p>
            <h2 className="text-2xl font-semibold text-blue-300 mb-2">
              <motion.span
                initial="initial"
                animate="animate"
                variants={fadeInVariants}
              >
                3. Use of Data
              </motion.span>
            </h2>
            <p className="text-blue-200 mb-4">
              Orbix Hosting uses the collected data for various purposes:
            </p>
            <ul className="list-disc pl-5 mb-4 text-blue-200">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To allow you to participate in interactive features of our service when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our service</li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent, and address technical issues</li>
            </ul>
            <h2 className="text-2xl font-semibold text-blue-300 mb-2">
              <motion.span
                initial="initial"
                animate="animate"
                variants={fadeInVariants}
              >
                4. Transfer of Data
              </motion.span>
            </h2>
            <p className="text-blue-200 mb-4">
              Your information, including personal data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
            </p>
            <p className="text-blue-200 mb-4">
              If you are located outside India and choose to provide information to us, please note that we transfer the data, including personal data, to India and process it there.
            </p>
            <p className="text-blue-200 mb-4">
              Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
            </p>
            <h2 className="text-2xl font-semibold text-blue-300 mb-2">
              <motion.span
                initial="initial"
                animate="animate"
                variants={fadeInVariants}
              >
                5. Disclosure of Data
              </motion.span>
            </h2>
            <p className="text-blue-200 mb-4">
              Orbix Hosting may disclose your personal data in the good faith belief that such action is necessary to:
            </p>
            <ul className="list-disc pl-5 mb-4 text-blue-200">
              <li>To comply with a legal obligation</li>
              <li>To protect and defend the rights or property of Orbix Hosting</li>
              <li>To prevent or investigate possible wrongdoing in connection with the service</li>
              <li>To protect the personal safety of users of the service or the public</li>
              <li>To protect against legal liability</li>
            </ul>
            <h2 className="text-2xl font-semibold text-blue-300 mb-2">
              <motion.span
                initial="initial"
                animate="animate"
                variants={fadeInVariants}
              >
                6. Security of Data
              </motion.span>
            </h2>
            <p className="text-blue-200 mb-4">
              The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
            </p>
            <h2 className="text-2xl font-semibold text-blue-300 mb-2">
              <motion.span
                initial="initial"
                animate="animate"
                variants={fadeInVariants}
              >
                7. Service Providers
              </motion.span>
            </h2>
            <p className="text-blue-200 mb-4">
              We may employ third-party companies and individuals to facilitate our service ("Service Providers"), to provide the service on our behalf, to perform service-related services, or to assist us in analyzing how our service is used.
            </p>
            <p className="text-blue-200 mb-4">
              These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
            <h2 className="text-2xl font-semibold text-blue-300 mb-2">
              <motion.span
                initial="initial"
                animate="animate"
                variants={fadeInVariants}
              >
                8. Links to Other Sites
              </motion.span>
            </h2>
            <p className="text-blue-200 mb-4">
              Our service may contain links to other sites that are not operated by us. If you click a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
            </p>
            <p className="text-blue-200 mb-4">
              We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>
            <h2 className="text-2xl font-semibold text-blue-300 mb-2">
              <motion.span
                initial="initial"
                animate="animate"
                variants={fadeInVariants}
              >
                9. Children’s Privacy
              </motion.span>
            </h2>
            <p className="text-blue-200 mb-4">
              Our service does not address anyone
              under the age of 18 ("Children").
            </p>
            <p className="text-blue-200 mb-4">
            We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us. If we become aware that we have collected personal data from children without verification of parental consent, we take steps to remove that information from our servers.
            </p>
            <h2 className="text-2xl font-semibold text-blue-300 mb-2">10. Changes to This Privacy Policy</h2>
            <p className="text-blue-200 mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
            <p className="text-blue-200 mb-4">
            We will let you know via email and/or a prominent notice on our service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.
            </p>
            <p className="text-blue-200 mb-4">
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
            <h2 className="text-2xl font-semibold text-blue-300 mb-2">11. Contact Us</h2>
            <p className="text-blue-200 mb-4">
            If you have any questions about this Privacy Policy, please contact us:           </p>
            <ul className="list-disc pl-5 mb-4 text-blue-200">
              <li>By email: support@orbixhosting.com</li>
              <li>By visiting this page on our website: www.orbixhosting.com/contact</li>
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
  )}
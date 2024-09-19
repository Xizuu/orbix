'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, EyeIcon, EyeOffIcon } from 'lucide-react'
import Link from "next/link"
import { motion, AnimatePresence } from 'framer-motion'

export default function RequestTokenPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [token, setToken] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [step, setStep] = useState(1)

  const validatePassword = (password: string) => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long"
    }
    if (!/\d/.test(password)) {
      return "Password must include at least one number"
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return "Password must include at least one special character"
    }
    return ""
  }

  const handleRequestReset = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send a request to your server to send a reset token
    console.log("Reset requested for:", email)
    setStep(2)
  }

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault()
    const passwordError = validatePassword(newPassword)
    if (passwordError) {
      setError(passwordError)
      return
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match")
      return
    }
    // Here you would typically send a request to your server to reset the password
    console.log("Password reset attempted with:", { email, token, newPassword })
    router.push('/auth?tab=login')
  }

  const buttonVariants = {
    hover: { scale: 1.05, transition: { yoyo: Infinity, duration: 0.3 } },
    tap: { scale: 0.95 }
  }

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } }
  }

  const iconVariants = {
    hover: { rotate: 360, transition: { duration: 0.5 } }
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-blue-900 fixed w-full bg-black z-50">
        <Link className="flex items-center justify-center" href="/">
          <motion.div whileHover={iconVariants.hover}>
            <Rocket className="h-6 w-6 text-blue-500" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
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
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors duration-200" href="/auth?tab=login">
            Login
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors duration-200" href="/auth?tab=signup">
            Sign Up
          </Link>
        </nav>
      </header>
      <main className="flex-1 pt-14">
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-blue-900 to-black">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="w-[350px] bg-blue-900 border-blue-800">
              <CardHeader>
                <CardTitle className="text-blue-300">Reset Password</CardTitle>
                <CardDescription className="text-blue-200">
                  {step === 1 ? "Enter your email to receive a reset token." : "Enter the token and your new password."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {step === 1 ? (
                      <form onSubmit={handleRequestReset}>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-blue-200">Email</Label>
                            <motion.div whileFocus={inputVariants.focus}>
                              <Input 
                                id="email" 
                                type="email" 
                                placeholder="m@example.com" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-blue-800 border-blue-700 text-blue-100 placeholder-blue-400"
                              />
                            </motion.div>
                          </div>
                        </div>
                        <motion.div
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                        >
                          <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700" type="submit">
                            Request Reset Token
                          </Button>
                        </motion.div>
                      </form>
                    ) : (
                      <form onSubmit={handleResetPassword}>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="token" className="text-blue-200">Reset Token</Label>
                            <motion.div whileFocus={inputVariants.focus}>
                              <Input 
                                id="token" 
                                type="text" 
                                required
                                value={token}
                                onChange={(e) => setToken(e.target.value)}
                                className="bg-blue-800 border-blue-700 text-blue-100"
                              />
                            </motion.div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="new-password" className="text-blue-200">New Password</Label>
                            <div className="relative">
                              <motion.div whileFocus={inputVariants.focus}>
                                <Input 
                                  id="new-password" 
                                  type={showPassword ? "text" : "password"}
                                  required
                                  value={newPassword}
                                  onChange={(e) => setNewPassword(e.target.value)}
                                  className="bg-blue-800 border-blue-700 text-blue-100"
                                />
                              </motion.div>
                              <motion.button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-blue-400 hover:text-blue-200"
                                whileHover={iconVariants.hover}
                              >
                                {showPassword ? (
                                  <EyeOffIcon className="h-5 w-5" />
                                ) : (
                                  <EyeIcon className="h-5 w-5" />
                                )}
                              </motion.button>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="confirm-password" className="text-blue-200">Confirm Password</Label>
                            <motion.div whileFocus={inputVariants.focus}>
                              <Input 
                                id="confirm-password" 
                                type="password" 
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="bg-blue-800 border-blue-700 text-blue-100"
                              />
                            </motion.div>
                          </div>
                        </div>
                        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
                        <motion.div
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                        >
                          <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700" type="submit">
                            Reset Password
                          </Button>
                        </motion.div>
                      </form>
                    )}
                  </motion.div>
                </AnimatePresence>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-blue-300">
                  Remember your password? <Link href="/auth?tab=login" className="text-blue-400 hover:underline">Login</Link>
                </p>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-blue-800">
        <p className="text-xs text-blue-400">© 2024 Orbix Hosting. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <Link className="text-xs hover:underline underline-offset-4 text-blue-400" href="#">
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>
      </footer>
    </div>
  )
}
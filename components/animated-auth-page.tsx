'use client'

import {useEffect, useState} from 'react'
import {useRouter, useSearchParams} from 'next/navigation'
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Checkbox} from "@/components/ui/checkbox"
import {AlertCircle, EyeIcon, EyeOffIcon, Rocket} from 'lucide-react'
import Link from "next/link"
import {AnimatePresence, motion} from 'framer-motion'
import {Alert, AlertDescription, AlertTitle} from './alert'

export default function AuthPage() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [activeTab, setActiveTab] = useState("login")
    const [showPassword, setShowPassword] = useState(false)
    const [agreedToTerms, setAgreedToTerms] = useState(false)

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [signupName, setSignupName] = useState("")
    const [signupEmail, setSignupEmail] = useState("")
    const [signupPassword, setSignupPassword] = useState("")
    const [signupConfirmPassword, setSignupConfirmPassword] = useState("")
    const [resetCode, setResetCode] = useState("")

    const [loginEmailError, setLoginEmailError] = useState("")
    const [loginPasswordError, setLoginPasswordError] = useState("")
    const [signupNameError, setSignupNameError] = useState("")
    const [signupEmailError, setSignupEmailError] = useState("")
    const [signupPasswordError, setSignupPasswordError] = useState("")
    const [signupConfirmPasswordError, setSignupConfirmPasswordError] = useState("")
    const [resetCodeError, setResetCodeError] = useState("")

    const [showPasswordMismatchAlert, setShowPasswordMismatchAlert] = useState(false)
    const [showInvalidResetCodeAlert, setShowInvalidResetCodeAlert] = useState(false)

    useEffect(() => {
        const tab = searchParams.get('tab')
        if (tab === 'login' || tab === 'signup') {
            setActiveTab(tab)
        }
    }, [searchParams])

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!re.test(email)) {
            return "Please enter a valid email address (e.g., user@example.com)"
        }
        return ""
    }

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

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        const emailError = validateEmail(loginEmail)
        const passwordError = validatePassword(loginPassword)
        setLoginEmailError(emailError)
        setLoginPasswordError(passwordError)
        if (!emailError && !passwordError) {
            console.log("Login attempted with:", {email: loginEmail, password: loginPassword})
        }
    }

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault()
        const nameError = signupName.trim() === "" ? "Please enter your name" : ""
        const emailError = validateEmail(signupEmail)
        const passwordError = validatePassword(signupPassword)
        const confirmPasswordError = signupPassword !== signupConfirmPassword ? "Passwords do not match" : ""

        setSignupNameError(nameError)
        setSignupEmailError(emailError)
        setSignupPasswordError(passwordError)
        setSignupConfirmPasswordError(confirmPasswordError)

        if (confirmPasswordError) {
            setShowPasswordMismatchAlert(true)
            setTimeout(() => setShowPasswordMismatchAlert(false), 5000) // Hide alert after 5 seconds
        }

        if (!nameError && !emailError && !passwordError && !confirmPasswordError) {
            if (!agreedToTerms) {
                alert("Please agree to the Terms of Service")
                return
            }
            console.log("Signup attempted with:", {name: signupName, email: signupEmail, password: signupPassword})
        }
    }

    const handleForgotPassword = () => {
        router.push('/request-token')
    }

    const handleResetPassword = (e: React.FormEvent) => {
        e.preventDefault()
        // This is a mock validation. In a real application, you would verify the reset code with your backend.
        if (resetCode !== "123456") { // Example reset code
            setResetCodeError("Invalid reset code")
            setShowInvalidResetCodeAlert(true)
            setTimeout(() => setShowInvalidResetCodeAlert(false), 5000) // Hide alert after 5 seconds
        } else {
            console.log("Password reset attempted with code:", resetCode)
            // Here you would typically redirect to a page to set a new password
        }
    }

    const buttonVariants = {
        hover: {scale: 1.05, transition: {yoyo: Infinity, duration: 0.3}},
        tap: {scale: 0.95}
    }

    const inputVariants = {
        focus: {scale: 1.02, transition: {duration: 0.2}}
    }

    const iconVariants = {
        hover: {rotate: 360, transition: {duration: 0.5}}
    }

    return (
        <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
            <header className="px-4 lg:px-6 h-14 flex items-center border-b border-blue-900 fixed w-full bg-black z-50">
                <Link className="flex items-center justify-center" href="/">
                    <motion.div whileHover={iconVariants.hover}>
                        <Rocket className="h-6 w-6 text-blue-500"/>
                    </motion.div>
                    <motion.span
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.2}}
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
                <div
                    className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-blue-900 to-black pt-10">
                    <motion.div
                        initial={{opacity: 0, scale: 0.5}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.5}}
                    >
                        <Card className="w-[350px] bg-blue-900 border-blue-800 mb-4">
                            <CardHeader>
                                <CardTitle className="text-blue-300">
                                    <motion.span
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{delay: 0.2, duration: 0.5}}
                                    >
                                        Welcome
                                    </motion.span>
                                </CardTitle>
                                <CardDescription className="text-blue-200">
                                    <motion.span
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{delay: 0.4, duration: 0.5}}
                                    >
                                        Login or create an account to get started.
                                    </motion.span>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <AnimatePresence>
                                    {showPasswordMismatchAlert && (
                                        <motion.div
                                            initial={{opacity: 0, y: -50}}
                                            animate={{opacity: 1, y: 0}}
                                            exit={{opacity: 0, y: -50}}
                                        >
                                            <Alert variant="destructive" className="mb-4">
                                                <AlertCircle className="h-4 w-4"/>
                                                <AlertTitle>Error</AlertTitle>
                                                <AlertDescription>
                                                    Passwords do not match. Please try again.
                                                </AlertDescription>
                                            </Alert>
                                        </motion.div>
                                    )}
                                    {showInvalidResetCodeAlert && (
                                        <motion.div
                                            initial={{opacity: 0, y: -50}}
                                            animate={{opacity: 1, y: 0}}
                                            exit={{opacity: 0, y: -50}}
                                        >
                                            <Alert variant="destructive" className="mb-4">
                                                <AlertCircle className="h-4 w-4"/>
                                                <AlertTitle>Error</AlertTitle>
                                                <AlertDescription>
                                                    Invalid reset code. Please check and try again.
                                                </AlertDescription>
                                            </Alert>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <Tabs value={activeTab} onValueChange={setActiveTab}>
                                    <TabsList className="grid w-full grid-cols-2 bg-blue-800">
                                        <TabsTrigger value="login"
                                                     className="text-blue-200 data-[state=active]:bg-blue-700">
                                            <motion.span whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                                                Login
                                            </motion.span>
                                        </TabsTrigger>
                                        <TabsTrigger value="signup"
                                                     className="text-blue-200 data-[state=active]:bg-blue-700">
                                            <motion.span whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                                                Sign Up
                                            </motion.span>
                                        </TabsTrigger>
                                    </TabsList>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTab}
                                            initial={{opacity: 0, x: 20}}
                                            animate={{opacity: 1, x: 0}}
                                            exit={{opacity: 0, x: -20}}
                                            transition={{duration: 0.2}}
                                        >
                                            <TabsContent value="login">
                                                <form onSubmit={handleLogin}>
                                                    <div className="space-y-4">
                                                        <div className="space-y-2">
                                                            <Label htmlFor="email"
                                                                   className="text-blue-200">Email</Label>
                                                            <motion.div whileFocus={inputVariants.focus}>
                                                                <Input
                                                                    id="email"
                                                                    type="email"
                                                                    placeholder="m@example.com"
                                                                    required
                                                                    value={loginEmail}
                                                                    onChange={(e) => setLoginEmail(e.target.value)}
                                                                    className="bg-blue-800 border-blue-700 text-blue-100 placeholder-blue-400"
                                                                />
                                                            </motion.div>
                                                            {loginEmailError &&
                                                                <p className="text-red-400 text-sm">{loginEmailError}</p>}
                                                        </div>
                                                        <div className="space-y-2">
                                                            <Label htmlFor="password"
                                                                   className="text-blue-200">Password</Label>
                                                            <div className="relative">
                                                                <motion.div whileFocus={inputVariants.focus}>
                                                                    <Input
                                                                        id="password"
                                                                        type={showPassword ? "text" : "password"}
                                                                        required
                                                                        value={loginPassword}
                                                                        onChange={(e) => setLoginPassword(e.target.value)}
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
                                                                        <EyeOffIcon className="h-5 w-5"/>
                                                                    ) : (
                                                                        <EyeIcon className="h-5 w-5"/>
                                                                    )}
                                                                </motion.button>
                                                            </div>
                                                            {loginPasswordError &&
                                                                <p className="text-red-400 text-sm">{loginPasswordError}</p>}
                                                        </div>
                                                    </div>
                                                    <motion.div
                                                        variants={buttonVariants}
                                                        whileHover="hover"
                                                        whileTap="tap"
                                                    >
                                                        <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                                                                type="submit">
                                                            <motion.span
                                                                initial={{opacity: 0}}
                                                                animate={{opacity: 1}}
                                                                transition={{delay: 0.1}}
                                                            >
                                                                Login
                                                            </motion.span>
                                                        </Button>
                                                    </motion.div>
                                                    <motion.div
                                                        variants={buttonVariants}
                                                        whileHover="hover"
                                                        whileTap="tap"
                                                        className="mt-2"
                                                    >
                                                        <Button
                                                            className="w-full bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                                                            type="button"
                                                            onClick={handleForgotPassword}
                                                        >
                                                            <motion.span
                                                                initial={{opacity: 0}}
                                                                animate={{opacity: 1}}
                                                                transition={{delay: 0.1}}
                                                            >
                                                                Forgot Password
                                                            </motion.span>
                                                        </Button>
                                                    </motion.div>
                                                </form>
                                            </TabsContent>
                                            <TabsContent value="signup">
                                                <form onSubmit={handleSignup}>
                                                    <div className="space-y-4">
                                                        <div className="space-y-2">
                                                            <Label htmlFor="name" className="text-blue-200">Name</Label>
                                                            <motion.div whileFocus={inputVariants.focus}>
                                                                <Input
                                                                    id="name"
                                                                    placeholder="John Doe"
                                                                    required
                                                                    value={signupName}
                                                                    onChange={(e) => setSignupName(e.target.value)}
                                                                    className="bg-blue-800 border-blue-700 text-blue-100 placeholder-blue-400"
                                                                />
                                                            </motion.div>
                                                            {signupNameError &&
                                                                <p className="text-red-400 text-sm">{signupNameError}</p>}
                                                        </div>
                                                        <div className="space-y-2">
                                                            <Label htmlFor="signup-email"
                                                                   className="text-blue-200">Email</Label>
                                                            <motion.div whileFocus={inputVariants.focus}>
                                                                <Input
                                                                    id="signup-email"
                                                                    type="email"
                                                                    placeholder="m@example.com"
                                                                    required
                                                                    value={signupEmail}
                                                                    onChange={(e) => setSignupEmail(e.target.value)}
                                                                    className="bg-blue-800 border-blue-700 text-blue-100 placeholder-blue-400"
                                                                />
                                                            </motion.div>
                                                            {signupEmailError &&
                                                                <p className="text-red-400 text-sm">{signupEmailError}</p>}
                                                        </div>
                                                        <div className="space-y-2">
                                                            <Label htmlFor="signup-password"
                                                                   className="text-blue-200">Password</Label>
                                                            <div className="relative">
                                                                <motion.div whileFocus={inputVariants.focus}>
                                                                    <Input
                                                                        id="signup-password"
                                                                        type={showPassword ? "text" : "password"}
                                                                        required
                                                                        value={signupPassword}
                                                                        onChange={(e) => setSignupPassword(e.target.value)}
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
                                                                        <EyeOffIcon className="h-5 w-5"/>
                                                                    ) : (
                                                                        <EyeIcon className="h-5 w-5"/>
                                                                    )}
                                                                </motion.button>
                                                            </div>
                                                            {signupPasswordError &&
                                                                <p className="text-red-400 text-sm">{signupPasswordError}</p>}
                                                        </div>
                                                        <div className="space-y-2">
                                                            <Label htmlFor="confirm-password" className="text-blue-200">Confirm
                                                                Password</Label>
                                                            <motion.div whileFocus={inputVariants.focus}>
                                                                <Input
                                                                    id="confirm-password"
                                                                    type="password"
                                                                    required
                                                                    value={signupConfirmPassword}
                                                                    onChange={(e) => setSignupConfirmPassword(e.target.value)}
                                                                    className="bg-blue-800 border-blue-700 text-blue-100"
                                                                />
                                                            </motion.div>
                                                            {signupConfirmPasswordError &&
                                                                <p className="text-red-400 text-sm">{signupConfirmPasswordError}</p>}
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <Checkbox
                                                                id="terms"
                                                                checked={agreedToTerms}
                                                                onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                                                            />
                                                            <label
                                                                htmlFor="terms"
                                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-blue-200"
                                                            >
                                                                I agree to the{" "}
                                                                <Link href="#"
                                                                      className="text-blue-400 hover:underline">
                                                                    Terms of Service
                                                                </Link>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <motion.div
                                                        variants={buttonVariants}
                                                        whileHover="hover"
                                                        whileTap="tap"
                                                    >
                                                        <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                                                                type="submit">
                                                            <motion.span
                                                                initial={{opacity: 0}}
                                                                animate={{opacity: 1}}
                                                                transition={{delay: 0.1}}
                                                            >
                                                                Sign Up
                                                            </motion.span>
                                                        </Button>
                                                    </motion.div>
                                                </form>
                                            </TabsContent>
                                        </motion.div>
                                    </AnimatePresence>
                                </Tabs>
                            </CardContent>
                            <CardFooter>
                                <p className="text-sm text-blue-300">
                                    <motion.span
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{delay: 0.6, duration: 0.5}}
                                    >
                                        By continuing, you agree to our Terms of Service and Privacy Policy.
                                    </motion.span>
                                </p>
                            </CardFooter>
                        </Card>
                    </motion.div>
                </div>
            </main>
            <footer
                className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-blue-800">
                <p className="text-xs text-blue-400">© 2024 Orbix Hosting. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map((item, index) => (
                        <motion.div
                            key={item}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.1 * (index + 1)}}
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
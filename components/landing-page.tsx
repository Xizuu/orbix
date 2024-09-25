'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Rocket, Server, Bot, Globe, Shield, Zap, Clock, Users, Mail, Phone, MessageCircle, Check, LayoutDashboard } from "lucide-react"
import Link from "next/link"

export function LandingPage() {
  const [activeTab, setActiveTab] = useState('all')
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const id = target.getAttribute('href')?.slice(1)
      if (id) {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          })
        }
      }
    }

    const links = document.querySelectorAll('nav a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', handleScroll)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleScroll)
      })
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-blue-900 fixed w-full bg-black z-50">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <Link className="flex items-center justify-center" href="#">
            <Rocket className="h-6 w-6 text-blue-500" />
            <span className="ml-2 text-2xl font-bold">Orbix Hosting</span>
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:text-blue-400 transition-colors duration-200" href="#home">
              Home
            </Link>
            <Link className="text-sm font-medium hover:text-blue-400 transition-colors duration-200" href="#features">
              Features
            </Link>
            <Link className="text-sm font-medium hover:text-blue-400 transition-colors duration-200" href="#services">
              Services
            </Link>
            <Link className="text-sm font-medium hover:text-blue-400 transition-colors duration-200" href="#testimonials">
              Testimonials
            </Link>
            <Link className="text-sm font-medium hover:text-blue-400 transition-colors duration-200" href="#contact">
              Contact
            </Link>
          </nav>
          <div className="ml-4 flex gap-2">
        <Link href="/auth?tab=sign-in">
          <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-900 transform hover:scale-105 transition-all duration-200">
            Login
          </Button>
        </Link>
        <Link href="/auth?tab=signup">
          <Button className="bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
            Register
          </Button>
        </Link>
      </div>
        </div>
      </header>
      <main className="flex-1 pt-14">
        <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-black via-blue-900 to-black">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Power Your Digital World with Orbix.
                </h1>
                <p className="mx-auto max-w-[700px] text-blue-200 md:text-xl lg:text-2xl">
                  Unleash the full potential of your online presence with our cutting-edge hosting solutions.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 transition-all duration-200" size="lg">
                  <a href="https://dashboard.orbixhosting.com" target="_blank">Dashboard</a>
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-900 transform hover:scale-105 transition-all duration-200" size="lg">
                <a href="#services">View services</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-20 md:py-32 lg:py-40 bg-black">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-300">
              Why Choose Us?
            </h2>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-blue-500" />}
                title="Lightning Fast"
                description="Experience blazing fast services with our optimized infrastructure."
              />
              <FeatureCard
                icon={<Shield className="h-10 w-10 text-blue-500" />}
                title="Secure & Safe"
                description="Your data and privacy are protected with our advanced security measures."
              />
              <FeatureCard
                icon={<Clock className="h-10 w-10 text-blue-500" />}
                title="24/7 Support"
                description="Our dedicated team is always ready to assist you, any time of day or night."
              />
              <FeatureCard
                icon={<Users className="h-10 w-10 text-blue-500" />}
                title="Community Focused"
                description="Join a thriving community of users and grow together."
              />
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-20 md:py-32 lg:py-40 bg-black">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-300">Our Services</h2>
            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="flex flex-wrap justify-center mb-12 bg-transparent">
                <TabsTrigger value="all" className="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white bg-opacity-20 hover:bg-opacity-30 bg-blue-800 mb-2 mx-1">All products</TabsTrigger>
                <TabsTrigger value="web" className="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white bg-opacity-20 hover:bg-opacity-30 bg-blue-800 mb-2 mx-1">Web Hosting</TabsTrigger>
                <TabsTrigger value="discord" className="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white bg-opacity-20 hover:bg-opacity-30 bg-blue-800 mb-2 mx-1">Discord Bot Hosting</TabsTrigger>
                <TabsTrigger value="minecraft" className="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white bg-opacity-20 hover:bg-opacity-30 bg-blue-800 mb-2 mx-1">Minecraft Server Hosting</TabsTrigger>
                <TabsTrigger value="rust" className="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white bg-opacity-20 hover:bg-opacity-30 bg-blue-800 mb-2 mx-1">Rust Server Hosting</TabsTrigger>
                <TabsTrigger value="terraria" className="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white bg-opacity-20 hover:bg-opacity-30 bg-blue-800 mb-2 mx-1">Terraria Server Hosting</TabsTrigger>
              </TabsList>
              <div className="relative">
                <TabsContent value="all" className={`grid gap-8 lg:grid-cols-3 transition-opacity duration-1000 ${activeTab === 'all' ? 'opacity-100' : 'opacity-0'}`}>
                  <ProductCard
                    title="Website Hosting"
                    description="Fast and reliable web hosting solutions for businesses of all sizes."
                    icon={<Globe className="h-8 w-8 text-blue-500" />}
                  />
                  <ProductCard
                    title="Discord Bot Hosting"
                    description="Keep your Discord bots online 24/7 with our specialized hosting."
                    icon={<Bot className="h-8 w-8 text-blue-500" />}
                  />
                  <ProductCard
                    title="Game Server Hosting"
                    description="Host your favorite games with ease and low latency."
                    icon={<Server className="h-8 w-8 text-blue-500" />}
                  />
                </TabsContent>
                <TabsContent value="web" className={`grid gap-8 lg:grid-cols-3 transition-opacity duration-1000 ${activeTab === 'web' ? 'opacity-100' : 'opacity-0'}`}>
                  <PlanCard
                    title="Basic"
                    price="$5.99"
                    features={["1 Website", "10GB SSD Storage", "Unmetered Bandwidth", "Free SSL Certificate", "24/7 Support"]}
                  />
                  <PlanCard
                    title="Pro"
                    price="$12.99"
                    features={["5 Websites", "50GB SSD Storage", "Unmetered Bandwidth", "Free SSL Certificates", "Daily Backups", "Priority Support"]}
                  />
                  <PlanCard
                    title="Business"
                    price="$24.99"
                    features={["Unlimited Websites", "100GB SSD Storage", "Unmetered Bandwidth", "Free SSL Certificates", "Daily Backups", "Dedicated IP", "Premium Support"]}
                  />
                </TabsContent>
                <TabsContent value="discord" className={`grid gap-8 lg:grid-cols-3 transition-opacity duration-1000 ${activeTab === 'discord' ? 'opacity-100' : 'opacity-0'}`}>
                  <PlanCard
                    title="Starter"
                    price="$4.99"
                    features={["1 Bot", "512MB RAM", "10GB SSD", "Always Online", "Automated Restarts", "Web Console Access"]}
                  />
                  <PlanCard
                    title="Standard"
                    price="$9.99"
                    features={["3 Bots", "1GB RAM", "20GB SSD", "24/7 Support", "Custom Domain", "Database Support"]}
                  />
                  <PlanCard
                    title="Premium"
                    price="$19.99"
                    features={["10 Bots", "2GB RAM", "50GB SSD", "Priority Support", "DDoS Protection", "Scalable Resources"]}
                  />
                </TabsContent>
                <TabsContent value="minecraft" className={`grid gap-8 lg:grid-cols-3 transition-opacity duration-1000 ${activeTab === 'minecraft' ? 'opacity-100' : 'opacity-0'}`}>
                  <PlanCard
                    title="Basic"
                    price="$9.99"
                    features={["1GB RAM", "10 Player Slots", "20GB SSD", "Modpack Support", "Daily Backups", "DDoS Protection"]}
                  />
                  <PlanCard
                    title="Standard"
                    price="$19.99"
                    features={["2GB RAM", "20 Player Slots", "40GB SSD", "Modpack Support", "Daily Backups", "DDoS Protection", "Dedicated IP"]}
                  />
                  <PlanCard
                    title="Premium"
                    price="$39.99"
                    features={["4GB RAM", "Unlimited Player Slots", "80GB SSD", "Modpack Support", "Hourly Backups", "DDoS Protection", "Dedicated IP", "Priority Support"]}
                  />
                </TabsContent>
                <TabsContent value="rust" className={`grid gap-8 lg:grid-cols-3 transition-opacity duration-1000 ${activeTab === 'rust' ? 'opacity-100' : 'opacity-0'}`}>
                  <PlanCard
                    title="Starter"
                    price="$14.99"
                    features={["2GB RAM", "50 Player Slots", "40GB SSD", "DDoS Protection", "Automated Backups", "Web Console Access"]}
                  />
                  <PlanCard
                    title="Advanced"
                    price="$29.99"
                    features={["4GB RAM", "100 Player Slots", "80GB SSD", "DDoS Protection", "Automated Backups", "Web Console Access", "Dedicated IP"]}
                  />
                  <PlanCard
                    title="Pro"
                    price="$49.99"
                    features={["8GB RAM", "200 Player Slots", "160GB SSD", "DDoS Protection", "Automated Backups", "Web Console Access", "Dedicated IP", "Priority Support"]}
                  />
                </TabsContent>
                <TabsContent value="terraria" className={`grid gap-8 lg:grid-cols-3 transition-opacity duration-1000 ${activeTab === 'terraria' ? 'opacity-100' : 'opacity-0'}`}>
                  <PlanCard
                    title="Basic"
                    price="$7.99"
                    features={["1GB RAM", "8 Player Slots", "10GB SSD", "Automatic Updates", "Daily Backups", "Web Console Access"]}
                  />
                  <PlanCard
                    title="Standard"
                    price="$14.99"
                    features={["2GB RAM", "16 Player Slots", "20GB SSD", "Automatic Updates", "Daily Backups", "Web Console Access", "Mod Support"]}
                  />
                  <PlanCard
                    title="Ultimate"
                    price="$24.99"
                    features={["4GB RAM", "32 Player Slots", "40GB SSD", "Automatic Updates", "Hourly Backups", "Web Console Access", "Mod Support", "Custom Control Panel"]}
                  />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </section>

        <section id="testimonials" className="w-full py-20 md:py-32 lg:py-40 bg-blue-900">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-300">
              What Our Customers Say
            </h2>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                quote="Orbix Hosting has been a game-changer for our online business. Their lightning-fast servers and top-notch support have helped us grow exponentially."
                author="Sarah J., E-commerce Entrepreneur"
              />
              <TestimonialCard
                quote="As a game server admin, I've tried many hosting providers. Orbix stands out with their reliable performance and excellent customer service."
                author="Mike T., Gaming Community Leader"
              />
              <TestimonialCard
                quote="The Discord bot hosting from Orbix is simply unmatched. Our bots have never been more stable and responsive."
                author="Alex R., Discord Server Owner"
              />
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-20 md:py-32 lg:py-40 bg-black">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-300">
              Contact Us
            </h2>
            <div className="grid gap-10 md:grid-cols-3">
              <ContactCard
                icon={<Mail className="h-8 w-8 text-blue-500" />}
                title="Email Us"
                content="support@orbixhosting.com"
                link="mailto:support@orbixhosting.com"
              />
              <ContactCard
                icon={<Phone className="h-8 w-8 text-blue-500" />}
                title="Call Us"
                content="Not available yet, come back later"
                link=""
              />
              <ContactCard
                icon={<MessageCircle className="h-8 w-8 text-blue-500" />}
                title="Join Our Discord"
                content="discord.gg/orbixhosting"
                link="https://discord.gg/orbixhosting"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-blue-800">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between w-full max-w-7xl mx-auto">
          <p className="text-xs text-blue-400">© 2024 Orbix Hosting. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4 text-blue-400" href="/tos">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 text-blue-400" href="/privacy-policy">
              Privacy Policy
            </Link>

          </nav>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="bg-blue-900 border-blue-800 transform hover:scale-105 transition-all duration-200">
      <CardHeader>
        <div className="flex items-center space-x-2">
          {icon}
          <CardTitle className="text-blue-300">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-blue-200">{description}</p>
      </CardContent>
    </Card>
  )
}

function ProductCard({ title, description, icon }) {
  return (
    <Card className="bg-blue-900 border-blue-800 transform hover:scale-105 transition-all duration-200">
      <CardHeader>
        <div className="flex items-center space-x-2">
          {icon}
          <CardTitle className="text-blue-300">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-blue-200">{description}</p>
      </CardContent>
    </Card>
  )
}

function PlanCard({ title, price, features }) {
  return (
    <Card 
      className="bg-blue-900 border-blue-800 transform hover:scale-105 transition-all duration-200 cursor-pointer" 
      onClick={() => window.open('#', '_blank')}
    >
      <CardHeader>
        <CardTitle className="text-blue-300">{title}</CardTitle>
        <p className="text-2xl font-bold text-blue-400">{price}<span className="text-sm font-normal">/mo</span></p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <Check className="h-4 w-4 mr-2 text-blue-500" />
              <span className="text-blue-200">{feature}</span>
            </li>
          ))}
        </ul>
        <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
          Choose Plan
        </Button>
      </CardContent>
    </Card>
  )
}

function TestimonialCard({ quote, author }) {
  return (
    <Card className="bg-black border-blue-800 transform hover:scale-105 transition-all duration-200">
      <CardContent className="p-6">
        <p className="text-sm text-blue-200 mb-4">"{quote}"</p>
        <p className="text-sm font-semibold text-blue-400">- {author}</p>
      </CardContent>
    </Card>
  )
}

function ContactCard({ icon, title, content, link }) {
  return (
    <Card className="bg-blue-900 border-blue-800 transform hover:scale-105 transition-all duration-200 cursor-pointer" onClick={() => window.open(link, '_blank')}>
      <CardContent className="p-6 flex flex-col items-center text-center">
        {icon}
        <h3 className="mt-4 mb-2 text-lg font-semibold text-blue-300">{title}</h3>
        <p className="text-sm text-blue-200">
          {content}
        </p>
      </CardContent>
    </Card>
  )
}

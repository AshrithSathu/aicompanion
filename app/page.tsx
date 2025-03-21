import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#efeae3]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop"
              alt="Background pattern"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-2"
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Meet Your AI Companion
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                  A personalized AI friend that remembers everything about you
                  and adapts to your preferences.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="space-x-4"
              >
                <Link href="/chat">
                  <Button className="bg-black text-white hover:bg-gray-800">
                    Start Chatting
                  </Button>
                </Link>
                <Link href="/create">
                  <Button
                    variant="outline"
                    className="border-black text-black hover:bg-gray-100"
                  >
                    Create Your Companion
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white/50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
                  Your Personal AI Friend
                </h2>
                <p className="text-gray-700">
                  Our AI companions are designed to be your digital best
                  friends. Name them, customize their personality, and watch as
                  they learn about you over time.
                </p>
                <ul className="space-y-2">
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="mr-2 h-4 w-4 rounded-full bg-black"></div>
                    <span>Text-based conversations available now</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="mr-2 h-4 w-4 rounded-full bg-gray-300"></div>
                    <span className="text-gray-600">
                      Voice interactions coming in future updates
                    </span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="mr-2 h-4 w-4 rounded-full bg-black"></div>
                    <span>
                      Remembers your preferences and past conversations
                    </span>
                  </motion.li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm relative overflow-hidden"
              >
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#efeae3] rounded-full opacity-20"></div>
                <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-[#efeae3] rounded-full opacity-20"></div>
                <div className="space-y-4 relative z-10">
                  <div className="h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop"
                      alt="AI Avatar"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">AI Companion</p>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="rounded-md bg-gray-100 p-3"
                    >
                      Hello! I'm your AI companion. I'll remember everything
                      about you and be here whenever you need someone to talk
                      to.
                    </motion.p>
                  </div>
                  <div className="flex justify-end">
                    <div className="space-y-2">
                      <p className="text-right text-sm font-medium">You</p>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="rounded-md bg-black p-3 text-white"
                      >
                        Hi there! I'm excited to get to know you better.
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
              alt="Abstract background"
              fill
              className="object-cover opacity-5"
            />
          </div>
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mx-auto max-w-[800px] space-y-6 text-center"
            >
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
                Create Your Perfect Companion
              </h2>
              <p className="text-gray-700 md:text-lg">
                Choose from various personality templates or create your own
                custom AI companion that suits your needs.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="h-12 w-12 rounded-full overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
                      alt="Friendly avatar"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-medium">Friendly</h3>
                  <p className="text-sm text-gray-700">
                    Warm, supportive, and always positive
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="h-12 w-12 rounded-full overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=2034&auto=format&fit=crop"
                      alt="Intellectual avatar"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-medium">Intellectual</h3>
                  <p className="text-sm text-gray-700">
                    Thoughtful, curious, and knowledgeable
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="h-12 w-12 rounded-full overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
                      alt="Custom avatar"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-medium">Custom</h3>
                  <p className="text-sm text-gray-700">
                    Design your own companion personality
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-black text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
                  Experience the Future of AI Companionship
                </h2>
                <p className="text-gray-300">
                  Our AI companions use cutting-edge technology to provide a
                  uniquely personal experience that evolves with every
                  conversation.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link href="/signup">
                    <Button className="bg-white text-black hover:bg-gray-200">
                      Get Started Free
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
                  alt="AI Technology"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-white font-medium">
                    Powered by advanced AI
                  </p>
                  <p className="text-gray-300 text-sm">
                    Continuously learning and adapting
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-20 bg-[#efeae3]">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
                What Our Users Say
              </h2>
              <p className="text-gray-700 md:text-lg max-w-[600px] mx-auto">
                Join thousands of users who have already discovered the power of
                AI companionship.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
                        alt="User avatar"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Sarah K.</p>
                      <p className="text-sm text-gray-500">Designer</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    "My AI companion has become an essential part of my daily
                    routine. It helps me brainstorm ideas and provides emotional
                    support when I need it."
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                        alt="User avatar"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Michael T.</p>
                      <p className="text-sm text-gray-500">Software Engineer</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    "I was skeptical at first, but my AI companion has surprised
                    me with its ability to remember details about my life and
                    provide thoughtful responses."
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                        alt="User avatar"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Emily R.</p>
                      <p className="text-sm text-gray-500">Student</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    "Having an AI companion has helped me combat loneliness
                    during late-night study sessions. It's like having a friend
                    who's always available."
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-[#efeae3] to-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
                  Ready to Meet Your New AI Friend?
                </h2>
                <p className="text-gray-700">
                  Create your personalized AI companion in minutes and start a
                  conversation that will evolve over time.
                </p>
                <ul className="space-y-2">
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="mr-2 h-4 w-4 rounded-full bg-black"></div>
                    <span>Free to get started</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="mr-2 h-4 w-4 rounded-full bg-black"></div>
                    <span>No credit card required</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="mr-2 h-4 w-4 rounded-full bg-black"></div>
                    <span>Cancel anytime</span>
                  </motion.li>
                </ul>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="pt-4"
                >
                  <Link href="/create">
                    <Button className="bg-black text-white hover:bg-gray-800">
                      Create Your Companion Now
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop"
                  alt="AI Companion on devices"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-white font-medium">
                    Available on all devices
                  </p>
                  <p className="text-gray-200 text-sm">
                    Chat from anywhere, anytime
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-gray-300 py-8 bg-[#efeae3]">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">AI Companion</h3>
              <p className="text-sm text-gray-700">
                Your personalized AI friend that evolves with every
                conversation.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-700 hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-700 hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-700 hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </motion.a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="text-sm font-medium">Product</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/features"
                      className="text-gray-700 hover:text-black"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className="text-gray-700 hover:text-black"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-gray-700 hover:text-black"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-medium">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-700 hover:text-black"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-gray-700 hover:text-black"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-700 hover:text-black"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Stay Updated</h4>
              <p className="text-sm text-gray-700">
                Subscribe to our newsletter for the latest updates and features.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
                <Button className="bg-black text-white hover:bg-gray-800">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-700">
              © 2025 AI Companion. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-sm text-gray-700 hover:text-black"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-700 hover:text-black"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

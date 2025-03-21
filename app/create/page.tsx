import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";

export default function page() {
  return (
    <div className="flex flex-col min-h-screen bg-[#efeae3]">
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl w-full bg-white rounded-lg shadow-sm p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#efeae3] rounded-full opacity-20"></div>
          <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-[#efeae3] rounded-full opacity-20"></div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative h-[200px] md:h-[300px] rounded-lg overflow-hidden"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2094&auto=format&fit=crop"
                    alt="Under Construction"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>

              <div className="w-full md:w-1/2 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <h1 className="text-2xl md:text-3xl font-bold tracking-tighter">
                    Under Construction
                  </h1>
                  <p className="mt-2 text-gray-700">
                    The Create feature is currently under construction. While
                    we're building this exciting functionality, you can chat
                    with our AI companion Ashrith.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="space-y-4"
                >
                  <div className="p-4 bg-[#efeae3] rounded-lg">
                    <p className="font-medium">In the meantime...</p>
                    <p className="text-sm text-gray-700">
                      Talk to our AI companion Ashrith who can answer your
                      questions and keep you company until the create feature is
                      available.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-black text-white hover:bg-gray-800">
                      <Link href="/chat">Chat with Ashrith</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-black text-black hover:bg-gray-100"
                    >
                      <Link href="/">Return Home</Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-8 pt-6 border-t border-gray-200"
            >
              <h2 className="text-lg font-medium mb-4">
                Coming soon features:
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-sm text-gray-700">
                    Customizable personality traits
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-sm text-gray-700">
                    Visual avatar selection
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-sm text-gray-700">
                    Knowledge base customization
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-sm text-gray-700">
                    Shareable companion profiles
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

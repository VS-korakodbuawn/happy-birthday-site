'use client'
import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function CakeEffect() {
  const [blown, setBlown] = useState(false)

  return (
    <div className="my-6 flex flex-col items-center space-y-4">
      <div className="relative">
        <Image
          src="/images/cake.png"
          alt="birthday cake"
          width={200}
          height={200}
          className="rounded-lg shadow-lg"
        />

        {/* 🔥 เทียน */}
        {!blown ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-4 left-1/2 transform -translate-x-1/2"
          >
            {/* ไฟเทียน: ใช้ div สีเหลืองมี animation */}
            <div className="w-2 h-6 bg-yellow-400 rounded-t-full animate-pulse"></div>
          </motion.div>
        ) : (
          // เมื่อไฟดับ แสดงแทนที่ด้วยแท่งเทียนสีเทาหรือซ่อนไฟ
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0.3 }}
            className="absolute top-4 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-2 h-6 bg-gray-400 rounded-t-full"></div>
          </motion.div>
        )}

        {/* 💨 ควัน */}
        <AnimatePresence>
          {blown && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: -20 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute top-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-3xl"
            >
              💨
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="text-pink-600 font-medium text-lg">อธิษฐานก่อนแล้วค่อยเป่าเค้กนะ</p>

      <button
        onClick={() => setBlown(true)}
        disabled={blown}
        className={`mt-2 bg-red-400 hover:bg-red-600 text-white font-semibold py-1 px-4 rounded-full transition ${
          blown ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        เป่าเทียน 🎂
      </button>
    </div>
  )
}

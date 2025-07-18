'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import TypewriterText from '../components/TypewriterText'
import Countdown from '../components/Countdown'
import MusicPlayer from '../components/MusicPlayer'
import SurpriseModal from '../components/SurpriseModal'

const FloatingHearts = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const heart = document.createElement('div')
      heart.innerText = '💖'
      heart.className = 'heart'
      heart.style.left = `${Math.random() * 100}vw`
      document.body.appendChild(heart)

      setTimeout(() => {
        heart.remove()
      }, 5000)
    }, 600)

    return () => clearInterval(interval)
  }, [])

  return null
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-purple-200 px-4 py-8 sm:py-10 md:py-20 relative overflow-x-hidden">
      {/* เพลงเบา ๆ */}
      <MusicPlayer />

      {/* หัวใจลอย */}
      <FloatingHearts />

     {/* ข้อความ Happy Birthday */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-700 text-center">
        Happy Birthday to Kam 🎂
      </h1>


      {/* รูปคู่กับแฟน (fade-in) */}
      <Image
        src="/images/Kam.JPG"
        alt="รูปคู่กับแฟน"
        width={200}
        height={200}
        className="rounded-full shadow-lg mb-4 sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] object-cover opacity-0 animate-fade-in"
      />

      

      {/* ข้อความพิมพ์ทีละตัว */}
      <TypewriterText />

      {/* เคานต์ดาวน์วันเกิด */}
      <Countdown />


      {/* ปุ่ม Surprise เปิด modal */}
      <div className="mt-8">
        <SurpriseModal />
      </div>

      {/* Footer */}
      <footer className="mt-10 text-sm text-gray-600 text-center opacity-80 select-none">
        © 2025 Created with 💗 by Mird for Kam
      </footer>
    </main>
  )
}

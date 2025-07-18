"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../styles/GreetingCard.css';

const GreetingCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // (Optional) Typewriter effect
  const [message, setMessage] = useState('');
  const fullMessage = `สุขสันต์วันเกิดนะคับ🎂💗\nขอให้แกสมหวังทุกประกายนะ\nอายุ21แล้วนะ 💕`;

  useEffect(() => {
    if (isOpen && message.length < fullMessage.length) {
      const timeout = setTimeout(() => {
        setMessage(fullMessage.slice(0, message.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [message, isOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-300 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-pink-700 mb-6 animate-bounce">💌</h1>

      <div
        className="w-80 h-48 perspective"
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) setMessage('');
        }}
      >
        <div
          className={`relative w-full h-full duration-700 transform-style preserve-3d transition-transform ${
            isOpen ? 'rotate-y-180' : ''
          }`}
        >
          {/* ด้านหน้า */}
          <div className="absolute w-full h-full flex items-center justify-center bg-white rounded-lg shadow-xl backface-hidden">
            <p className="text-xl text-pink-500 animate-pulse">กดเปิดการ์ด 💖</p>
          </div>

          {/* ด้านหลัง */}
          <div className="absolute w-full h-full bg-pink-100 rounded-lg p-4 flex items-center justify-center backface-hidden rotate-y-180 shadow-inner">
          {isOpen && (
            <p className="text-center text-lg font-semibold text-pink-700 whitespace-pre-line">
              สุขสันต์วันเกิดนะคับ🎂💗{'\n'}ขอให้แกสมหวังทุกประกายนะ💕{'\n'}เราหวังว่าเว็บนี้จะทำให้แกมีความสุขนะถึงมันจะไม่ค่อยพิเศษอะไรแต่มันก็ทดแทนที่ปีนี้เราไม่ได้อยู่ด้วยกัน
            </p>
          )}

          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => router.push('/')}
          className="bg-gray-600 hover:bg-gray-800 text-white py-2 px-6 rounded-full shadow-md transition duration-300"
        >
          🔙 กลับไปหน้าแรก
        </button>
      </div>
    </div>
  );
};

export default GreetingCard;

'use client'
import { useState } from "react";
import CakeEffect from "./CakeEffect";
import "../styles/Balloon.css";
import Link from "next/link"

export default function SurpriseModal() {
  const [show, setShow] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const balloons = Array.from({ length: 20 });

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="mt-6 bg-pink-500 hover:bg-pink-700 text-white font-semibold text-sm sm:text-base py-2 px-5 rounded-full transition"
      >
        🎁 คลิกเพื่อดู Surprise
      </button>

      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 overflow-hidden p-4">
          <div className="relative w-full h-full">
            {/* ลูกโป่ง */}
            {balloons.map((_, i) => (
              <div
                key={i}
                className="balloon"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  backgroundColor: getRandomColor(),
                }}
              />
            ))}

            {/* กล่อง modal */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 max-w-md text-center overflow-auto max-h-[90vh]">

                {/* วิดีโอ */}
                <video
                  src="/audio/HBD_UiiAi.mp4"
                  controls
                  autoPlay
                  onEnded={() => setIsVideoEnded(true)}
                  className="w-full max-w-sm rounded-lg shadow mb-4"
                />

                <h2 className="text-2xl font-bold text-pink-600 mb-3">
                  u i a i i a u i a i i a u i a i u i a i u i a i i a u i a i i a u i a i i a u i a i u i a i u i a i i a
                </h2>

                

                {/* แสดงเค้กเฉพาะเมื่อวิดีโอจบ */}
                {isVideoEnded && <CakeEffect />}

                {/* ปุ่มล่าง */}
                <div className="mt-8">
                  <Link href="/memories">
                    <button className="bg-pink-400 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300">
                      📷 ภาพความทรงจำ
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function getRandomColor() {
  const colors = ['#f472b6', '#fb7185', '#facc15', '#34d399', '#60a5fa'];
  return colors[Math.floor(Math.random() * colors.length)];
}

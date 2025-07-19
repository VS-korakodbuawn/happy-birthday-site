'use client'
import Slider from "react-slick"
import Image from "next/image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useRouter } from "next/navigation"

export default function MemoriesPage() {
  const router = useRouter()

  const images = [

    "/images/photo4.jpg",
    "/images/photo5.jpg",
    "/images/photo6.jpg",
    "/images/photo7.jpg",
    "/images/photo8.jpg",
    "/images/photo9.jpg",
    "/images/photo10.jpg",
    "/images/photo11.jpg",
  ]

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-white flex flex-col justify-center items-center p-4 overflow-hidden">
      <h1 className="text-4xl font-extrabold text-pink-600 drop-shadow-md mb-6 animate-pulse">
        📷 ภาพความทรงจำ
      </h1>

      <div className="w-full max-w-md">
        <Slider {...settings}>
          {images.map((src, i) => (
            <div key={i} className="flex justify-center">
              <Image
                src={src}
                alt={`memories-${i}`}
                width={400}
                height={600}
                className="rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105"
                style={{ objectFit: 'cover', width: '100%', height: '600px' }}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="mt-8">
        <button
          onClick={() => router.push('/greetingcard')}
          className="bg-pink-400 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300"
        >
          💌 เปิดการ์ดอวยพร
        </button>
      </div>
    </div>
  )
}

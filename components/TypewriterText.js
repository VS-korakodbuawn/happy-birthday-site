import Typewriter from "typewriter-effect";

export default function TypewriterText() {
  return (
    <div className="text-base sm:text-lg md:text-xl text-purple-700 mt-4 mb-6 px-2">
      <Typewriter
        options={{
          strings: [
            "สุขสันต์วันเกิดนะ 💖",
            "ขอให้มีความสุขมาก ๆ นะ 🎉",
            "อายุ 21 แล้ว 💑"
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}

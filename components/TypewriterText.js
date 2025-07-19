import Typewriter from "typewriter-effect";

export default function TypewriterText() {
  return (
    <div className="text-base sm:text-lg md:text-xl text-purple-700 mt-4 mb-6 px-2">
      <Typewriter
        options={{
          strings: [
            "Happy Birthday",
            "Wish you lots of happiness",
            "You're 21"
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}

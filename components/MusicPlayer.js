export default function MusicPlayer() {
  return (
    <video autoPlay loop muted className="w-0 h-0">
      <source src="/audio/HBD_UiiAi.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

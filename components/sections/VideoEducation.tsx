"use client";

import { useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { educationVideos, type EducationVideo } from "@/data/videos";

function VideoCard({ video }: { video: EducationVideo }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  function handlePlay() {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
      setShowControls(true);
    }
  }

  function handleVideoClick() {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  }

  function handleEnded() {
    setPlaying(false);
    setShowControls(false);
  }

  return (
    <div className="glass-card liquid-shimmer group relative overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-0.5">
      {/* Specular top line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

      {/* Video wrapper */}
      <div className="relative aspect-video w-full overflow-hidden rounded-t-3xl bg-ink">
        <video
          ref={videoRef}
          src={video.src}
          poster={video.poster}
          onEnded={handleEnded}
          onClick={handleVideoClick}
          controls={showControls}
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
          aria-label={video.title}
        />

        {/* Custom overlay play button — tersembunyi saat kontrol aktif */}
        {!playing && !showControls && (
          <button
            type="button"
            onClick={handlePlay}
            aria-label={`Putar video: ${video.title}, durasi ${video.duration}`}
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-ink/30 transition-all hover:bg-ink/20"
          >
            {/* Ambient glow behind button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-32 w-32 rounded-full bg-accent/20 blur-2xl" />
            </div>

            {/* Glass play button */}
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full glass shadow-xl transition-all duration-200 group-hover:scale-110">
              <svg
                viewBox="0 0 24 24"
                fill="white"
                className="h-7 w-7 translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>

            {/* Duration badge */}
            <span className="glass-pill rounded-full px-3 py-1 text-xs font-semibold text-ink">
              <span aria-hidden="true">▶</span> {video.duration}
            </span>
          </button>
        )}

        {/* Tag pill overlay */}
        <div className="absolute left-3 top-3 z-10">
          <span className="glass-pill rounded-full px-2.5 py-1 text-[11px] font-semibold text-accent">
            {video.tag}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="text-base font-semibold text-ink">{video.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{video.description}</p>

        {/* Meta row */}
        <div className="mt-4 flex items-center gap-4 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <Icon name="clock" size={13} />
            {video.duration} menit
          </span>
          <span className="flex items-center gap-1.5">
            <Icon name="check" size={13} className="text-emerald-500" />
            Proses asli toko kami
          </span>
        </div>
      </div>
    </div>
  );
}

export function VideoEducation() {
  return (
    <Section tone="mist" labelledBy="video-edu-heading" id="edukasi">
      <SectionHeading
        id="video-edu-heading"
        title="Lihat Sendiri Prosesnya"
        description="Kami percaya transparansi dimulai dari keterbukaan. Tonton langsung bagaimana setiap servis dikerjakan oleh teknisi kami — tidak ada yang disembunyikan."
      />

      <div
        className={
          educationVideos.length === 1
            ? "mx-auto max-w-2xl"
            : "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        }
      >
        {educationVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      {/* Bottom note */}
      <p className="mt-10 text-center text-sm text-muted">
        Video direkam langsung di workshop kami di{" "}
        <span className="font-medium text-ink">Bandung</span>. Tidak ada rekayasa.
      </p>
    </Section>
  );
}

import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Heart, Sparkles, Quote, Video } from 'lucide-react';
import { RecipientProfile } from '../types';

interface VideoSectionProps {
  profile?: RecipientProfile;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ profile }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const candidateName = profile ? (profile.isAnonymized ? profile.displayName : profile.realName) : 'Candidate A.';
  const shortName = profile ? (profile.isAnonymized ? 'Our Candidate' : profile.realName.split(' ')[0]) : 'Candidate A.';

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="video-story" className="py-20 lg:py-28 bg-stone-900 text-white relative overflow-hidden">
      {/* Decorative ambient glows */}
      <div className="absolute top-10 -left-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Heart className="w-3.5 h-3.5 text-teal-400 fill-teal-400" />
            <span>Family First</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Outfit',sans-serif] tracking-tight text-white mb-4">
            Hear Why {shortName} Means the World to Us
          </h2>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            In this short video, nephew Ben shares from the heart about mentorship, sports drills, and what having {shortName} healthy and present means for their future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Video Container (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black border border-stone-800 group">
              <video
                ref={videoRef}
                src="/assets/aistudio/IMG_0018_8554062f.mov"
                poster="/assets/aistudio/video_poster.jpg"
                playsInline
                preload="metadata"
                className="w-full aspect-video object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                {/* Fallback to original mov if needed */}
                <source src="/assets/aistudio/IMG_0018_8554062f.mov" type="video/quicktime" />
                Your browser does not support HTML5 video.
              </video>

              {/* Central Play Overlay Button when paused */}
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 bg-stone-950/40 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer transition-opacity"
                >
                  <div className="w-20 h-20 rounded-full bg-teal-500 hover:bg-teal-400 text-stone-950 flex items-center justify-center shadow-2xl transition-transform transform group-hover:scale-110 cursor-pointer">
                    <Play className="w-8 h-8 ml-1 fill-stone-950" />
                  </div>
                  <span className="mt-4 text-xs font-semibold tracking-wider uppercase text-white/90 bg-stone-900/80 px-3.5 py-1.5 rounded-full border border-white/20">
                    Watch Nephew Ben's Message (1:12)
                  </span>
                </div>
              )}

              {/* Custom floating controls bottom */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={togglePlay}
                  className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white backdrop-blur-xs transition cursor-pointer"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-white/80 font-mono">01:12</span>
                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white backdrop-blur-xs transition cursor-pointer"
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Video Context & Emotional Callout (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-stone-800/80 border border-stone-700/80 rounded-2xl p-6 sm:p-7 relative backdrop-blur-xs">
              <Quote className="w-10 h-10 text-teal-400/30 absolute top-5 right-5" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-teal-900/60 border border-teal-500/40 flex items-center justify-center text-teal-300 font-bold">
                  B
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">Ben's Message for His Uncle</h3>
                  <p className="text-xs text-stone-400">Nephew & Mentee</p>
                </div>
              </div>

              <blockquote className="text-stone-300 text-sm sm:text-base leading-relaxed italic mb-5">
                "He is the kind of guy who never lets anything keep him down. He taught me how to throw a lacrosse ball, always showed up at my games, and never stopped encouraging me. Seeing him fight kidney disease is tough, but he still brings that same energy and love to everyone around him. We need him healthy, strong, and by our side for years to come."
              </blockquote>

              <div className="pt-4 border-t border-stone-700 flex items-center justify-between text-xs text-stone-400">
                <span className="flex items-center gap-1.5 text-teal-300">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The ripple effect of one gift</span>
                </span>
                <span>Greater Boston, MA</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-teal-950/60 border border-teal-600/30 text-xs text-teal-200/90 leading-relaxed">
              <strong className="text-white">Why a living donor matters right now:</strong> Deceased donor wait times in New England exceed 5 to 7 years. A living donor kidney functions immediately and lasts on average 15 to 20+ years, allowing {shortName} to return to active life with family.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

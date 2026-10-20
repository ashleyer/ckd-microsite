import React, { useState } from 'react';
import { Camera, X, Sparkles, Heart } from 'lucide-react';
import { galleryImages } from '../data/storyData';
import { GalleryImage } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Moments & Memories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Outfit',sans-serif] text-slate-900 tracking-tight">
            Life, Family & The Future Ahead
          </h2>
          <p className="mt-2 text-stone-600 text-base leading-relaxed">
            Every photo represents the relationships, sports memories, and dreams waiting on the other side of a kidney transplant.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="group bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 shadow-2xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                  src={img.src}
                  alt={img.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-stone-900/70 backdrop-blur-xs text-white text-[10px] font-semibold tracking-wide uppercase">
                  {img.tag}
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between text-xs text-stone-400 mb-1">
                  <span>{img.year}</span>
                  <Sparkles className="w-3.5 h-3.5 text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-bold text-slate-900 text-base group-hover:text-teal-700 transition-colors">
                  {img.title}
                </h3>
                <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-stone-900/60 text-white hover:bg-stone-900 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[60vh] bg-stone-950 flex items-center justify-center overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[60vh] w-auto object-contain"
                />
              </div>

              <div className="p-6 space-y-2">
                <div className="flex items-center justify-between text-xs text-stone-500">
                  <span className="font-semibold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                    {selectedImage.tag}
                  </span>
                  <span>{selectedImage.year}</span>
                </div>
                <h3 className="text-xl font-bold font-['Outfit',sans-serif] text-slate-900">
                  {selectedImage.title}
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {selectedImage.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

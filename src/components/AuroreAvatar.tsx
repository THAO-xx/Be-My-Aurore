import { useState } from "react";

export default function AuroreAvatar({ className = "w-24 h-24" }: { className?: string }) {
  const [imageError, setImageError] = useState(false);

  // The generated image path
  const imageSrc = "/src/assets/images/aurore_avatar_1780318565384.png";

  return (
    <div className={`relative rounded-full p-1 bg-gradient-to-tr from-[#d4af37] via-[#f7e7ce] to-[#8d6e63] shadow-md hover:scale-105 transition-all duration-300 ${className}`}>
      <div className="w-full h-full rounded-full overflow-hidden bg-neutral-100 flex items-center justify-center border border-white">
        {!imageError ? (
          <img
            src={imageSrc}
            alt="Aurore Dang Vu"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover select-none"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#faf4ee] to-[#ece0d1] flex items-center justify-center font-serif text-[#6d4c41] font-semibold text-2xl">
            AD
          </div>
        )}
      </div>
      <div className="absolute right-0 bottom-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-sm flex items-center justify-center" title="Bilingue FR & EN / Bilingual FR & EN">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
      </div>
    </div>
  );
}

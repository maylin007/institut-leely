import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0c2a3a] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left — Brand */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-light tracking-wide">
              Institut Leely
            </h3>
            <p className="text-white/40 text-sm mt-3 max-w-xs leading-relaxed">
              Votre institut de beauté à Papeete depuis 1993.
            </p>
            <p className="text-white/30 text-sm italic mt-2 max-w-xs leading-relaxed">
              &ldquo;Révélez votre beauté naturelle.&rdquo;
            </p>
          </div>

          {/* Right — Contact with icons */}
          <div className="space-y-6">
            {/* Phone */}
            <a href="tel:+68940426642" className="flex items-center gap-4 group">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/40">Téléphone</p>
                <p className="text-white/80 group-hover:text-white transition-colors">40 42 66 42</p>
              </div>
            </a>

            {/* Messenger */}
            <a href="https://m.me/289080614509007" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/40">Messenger</p>
                <p className="text-white/80 group-hover:text-white transition-colors">Envoyer un message</p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-center gap-4">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/40">Adresse</p>
                <p className="text-white/80">46 Rue Georges Lagarde, Papeete</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-4">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/40">Horaires</p>
                <p className="text-white/80">Lun — Sam : 08h — 18h</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-4 text-center">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} Institut de Beauté Leely. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

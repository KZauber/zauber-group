export default function Footer() {
  return (
    <footer className="bg-[#0A1628] border-t border-white/10">
      <div className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-serif text-lg font-semibold text-white tracking-wide">
            Zauber
          </span>
          <span className="text-[#C9A84C] font-serif text-lg font-light">
            Group
          </span>
        </div>

        <p className="text-white/25 text-xs leading-relaxed max-w-md text-center sm:text-right">
          BuilderFlow™ is a proprietary marketing system by Zauber Group.
          Results vary based on market, service area, and business profile.
          &copy; {new Date().getFullYear()} Zauber Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

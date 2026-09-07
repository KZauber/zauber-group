import { useLocation } from "wouter";

export default function Footer() {
  const [, setLocation] = useLocation();

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

        <div className="flex flex-col items-center sm:items-end gap-2">
          <div className="flex gap-4 text-xs">
            <button
              onClick={() => setLocation("/privacy")}
              className="text-white/40 hover:text-[#C9A84C] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setLocation("/terms")}
              className="text-white/40 hover:text-[#C9A84C] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
          <p className="text-white/25 text-xs leading-relaxed max-w-md text-center sm:text-right">
            LocalEdge™ is a proprietary local-marketing system by Zauber Group.
            Results vary based on market, service area, and business profile.
            &copy; {new Date().getFullYear()} Zauber Group, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

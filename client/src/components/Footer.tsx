export default function Footer() {
  return (
    <footer className="bg-[#0A1628] border-t border-white/10">
      <div className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/zauber-mark.png" alt="Zauber Group logo" className="h-9 w-9" />
          <span className="font-serif text-lg font-semibold text-white tracking-wide">
            Zauber
          </span>
          <span className="text-[#C9A84C] font-serif text-lg font-light">
            Group
          </span>
        </div>

        <div className="max-w-md text-center sm:text-right">
          <p className="text-white/25 text-xs leading-relaxed">
            LocalEdge™ is a proprietary local-marketing system by Zauber Group.
            Results vary based on market, service area, and business profile.
            &copy; {new Date().getFullYear()} Zauber Group. All rights reserved.
          </p>
          {/* Static files in client/public — plain anchors so the browser does a real
              navigation instead of wouter trying to client-route them into NotFound. */}
          <p className="mt-3 text-xs">
            <a
              href="/privacy-policy.html"
              className="text-[#C9A84C]/70 hover:text-[#C9A84C] underline underline-offset-2">
              Privacy Policy
            </a>
            <span className="text-white/20 mx-2">·</span>
            <a
              href="/terms.html"
              className="text-[#C9A84C]/70 hover:text-[#C9A84C] underline underline-offset-2">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

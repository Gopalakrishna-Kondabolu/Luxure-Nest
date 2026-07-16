import Link from "next/link";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Explore: [
    { label: "Buy", href: "/listings?type=buy" },
    { label: "Rent", href: "/listings?type=rent" },
    { label: "Commercial", href: "/listings?type=commercial" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-panel border-t border-line">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-2">
          <p className="font-display italic text-2xl text-ivory mb-3">
            Luxure <span className="text-gold">Nest</span>
          </p>
          <p className="text-slate text-sm max-w-sm leading-relaxed">
            A premium real estate advisory firm helping discerning clients
            buy, rent, and invest across Delhi&apos;s finest addresses.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <p className="text-ivory text-sm font-medium mb-4">{heading}</p>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate">
          <p>© {new Date().getFullYear()} Luxure Nest. All rights reserved.</p>
          <p>Delhi, India</p>
        </div>
      </div>
    </footer>
  );
}
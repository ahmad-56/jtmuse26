const links = [
  {
    label: "Instagram",
    href: "https://instagram.com/lgsjt.muse",
    external: true,
    icon: "M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM12 7.25A4.75 4.75 0 1 1 7.25 12 4.75 4.75 0 0 1 12 7.25Zm0 1.5A3.25 3.25 0 1 0 15.25 12 3.25 3.25 0 0 0 12 8.75Zm5.25-2.5a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z",
  },
  {
    label: "Email",
    href: "mailto:lgsjtmuse@gmail.com",
    icon: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 18V8.5l7.4 6.1a1 1 0 0 0 1.2 0L20 8.5V18H4Z",
  },
  {
    label: "Website",
    href: "https://lgsjtmuse.com",
    external: true,
    icon: "M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm2 0v12h12V6H6Zm2 2h8v2H8V8Zm0 4h8v2H8v-2Zm0 4h5v2H8v-2Z",
  },
];

export default function SocialLinks() {
  return (
    <nav
      aria-label="Connect with JT Muse"
      className="mt-2 inline-flex items-center justify-center gap-6 rounded-2xl border border-brand-gold/20 bg-white/20 px-8 py-3 shadow-xl backdrop-blur-md"
    >
      {links.map(({ label, href, external, icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="inline-flex items-center justify-center text-brand-gold transition-colors duration-200 hover:text-[#fff2d6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d={icon} />
          </svg>
        </a>
      ))}
    </nav>
  );
}

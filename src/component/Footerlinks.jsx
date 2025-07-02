const FooterLinks = () => {
    const links = [
        { text: "Beranda", href: "/" },
        { text: "Kontak Kami", href: "/kontak" },
        { text: "Keamanan", href: "/keamanan" },
        { text: "Kepatuhan", href: "/kepatuhan" },
        { text: "Pengaduan IPR", href: "/ipr" },
        { text: "Kebijakan Anti-Spam", href: "/anti-spam" },
        { text: "Syarat Layanan", href: "/terms" },
        { text: "Kebijakan Privasi", href: "/privacy" },
        { text: "Kebijakan Cookie", href: "/cookie" },
        { text: "Kepatuhan GDPR", href: "/gdpr" },
        { text: "Kebijakan Penyalahgunaan", href: "/abuse" },
    ];

    return (
        <div className="text-white text-sm flex flex-wrap justify-center items-center gap-x-3 gap-y-2  pt-6 pb-2 px-4">
            {links.map((link, index) => (
                <span key={index} className="flex items-center gap-2">
                    <a href={link.href} className="hover:underline">
                        {link.text}
                    </a>
                    {index < links.length - 1 && <span className="text-neutral-500">|</span>}
                </span>
            ))}
            <div className="w-full text-center mt-4 text-neutral-400">
                © 2025 GENDRUK. All rights reserved.
            </div>
        </div>
    );
};

export default FooterLinks;

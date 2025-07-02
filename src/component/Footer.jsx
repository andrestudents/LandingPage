import { resourcesLinks, platformLinks, communityLinks } from "../constant";
import { FaXTwitter } from "react-icons/fa6";
import {
    FaInstagram,
    FaWhatsapp,
    FaFacebookF,
    FaLinkedinIn,
} from "react-icons/fa";
import FooterLinks from "./Footerlinks";

const Footer = () => {
    return (
        <footer className="mt-20 border-t py-10 border-neutral-700">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <h3 className="text-md font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2">
                        {resourcesLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-neutral-300 hover:text-white"
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-md font-semibold mb-4">Platform</h3>
                    <ul className="space-y-2">
                        {platformLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-neutral-300 hover:text-white"
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-md font-semibold mb-4">Community</h3>
                    <ul className="space-y-2">
                        {communityLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-neutral-300 hover:text-white"
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <br />

            <div className="min-h-[100px] flex flex-col justify-center gap-6 text-center text-lg text-gray-300 font-mono mb-10 border-t border-neutral-700">
                <div className="mt-10 flex gap-6 p-4 justify-center text-white">
                    <a
                        href="https://twitter.com"
                        className="border p-2 text-2xl rounded-2xl hover:-translate-y-2 transition-all bg-black text-white"
                        target="_blank"
                    >
                        <FaXTwitter />
                    </a>
                    <a
                        href="https://instagram.com"
                        className="border p-2 text-2xl rounded-2xl hover:-translate-y-2 transition-all bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 text-white"
                        target="_blank"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://whatsapp.com"
                        className="border p-2 text-2xl rounded-2xl hover:-translate-y-2 transition-all bg-green-500 text-white"
                        target="_blank"
                    >
                        <FaWhatsapp />
                    </a>
                    <a
                        href="https://facebook.com"
                        className="border p-2 text-2xl rounded-2xl hover:-translate-y-2 transition-all bg-blue-600 text-white"
                        target="_blank"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://linkedin.com"
                        className="border p-2 text-2xl rounded-2xl hover:-translate-y-2 transition-all bg-blue-800 text-white"
                        target="_blank"
                    >
                        <FaLinkedinIn />
                    </a>
                </div>
                <FooterLinks />
                {/* <p>@ 2025 GENDRUK. All rights reserved.</p> */}
            </div>
        </footer>
    );
};

export default Footer;

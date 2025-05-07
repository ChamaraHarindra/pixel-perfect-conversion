import { Mail, Phone } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="container pt-20 mb-4 ">
      <div className="footer-content">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex items-center gap-3">
            <Phone className="text-primary-500" />
            <Link
              href="tel:2135734644"
              className="text-primary-500 text-lg font-bold"
            >
              (213) 573-4644
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-primary-500" />
            <Link
              href={"mailto:contact@batteredbrilliance.com"}
              className="text-primary-500 text-lg font-bold"
            >
              contact@batteredbrilliance.com
            </Link>
          </div>
        </div>
        <p className="text-center text-lg">
          © 2025 Battered Brilliance. All Rights Reserved.
          <br />
          Battered Brilliance® is a registered trademark of Hollis Wilder. The
          information provided is for educational purposes only.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

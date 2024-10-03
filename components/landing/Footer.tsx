import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div className="space-y-4">
            {/* <Link href="/fpo" className="block text-gray-600 hover:text-gray-900">FPO</Link> */}
            <Link href="/farmers" className="block text-gray-600 hover:text-gray-900">Farmers</Link>
            <Link href="/about" className="block text-gray-600 hover:text-gray-900">About Us</Link>
            {/* <Link href="/privacy-policy" className="block text-gray-600 hover:text-gray-900">Privacy Policy</Link>
            <Link href="/careers" className="block text-gray-600 hover:text-gray-900">Careers</Link> */}
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-gray-400 mr-2 mt-1 flex-shrink-0" />
              <p className="text-sm text-gray-600">
                House No. 63 Third Floor, Right Side Lane 2, Kahar Singh Estate, Saidulajab, New Delhi-110030
              </p>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-gray-400 mr-2" />
              <a href="mailto:communications@accessassist.in" className="text-sm text-gray-600 hover:text-gray-900">
                communications@accessassist.in
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-gray-400 mr-2" />
              <a href="tel:+918595022032" className="text-sm text-gray-600 hover:text-gray-900">
                +91-8595022032
              </a>
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="logo1.svg"
              alt="AgriSarathi Logo"
              width={200}
              height={50}
              className="h-12 w-auto"
            />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/privacyPolicy" className="text-sm text-gray-600 hover:text-gray-900">
              Privacy Policy Terms & Conditions
            </Link>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
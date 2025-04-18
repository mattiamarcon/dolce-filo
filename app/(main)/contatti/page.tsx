import { Instagram, Mail, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function ContattiPage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Contatti</h1>
          <p className="text-xl text-gray-600">Per qualsiasi informazione contattami in privato.</p>
        </div>

        <div className="space-y-8 md:space-y-10' ">
          <div className="flex flex-col md:flex-row items-center p-6 bg-pink-50 rounded-lg transition-all hover:bg-pink-100 border border-pink-100">
            <div className="bg-pink-500 p-4 rounded-full mb-4 md:mb-0">
              <Instagram className="h-8 w-8 text-white" />
            </div>
            <div className="md:ml-6 text-center md:text-left">
              <p className="text-lg font-medium text-gray-900 mb-2">Direct Instagram</p>
              <Link
                href="https://www.instagram.com/dolcefilo___/"
                target="_blank"
                className="text-pink-600 hover:text-pink-800 font-medium text-lg inline-flex items-center"
              >
                Inviami un messaggio
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center p-6 bg-green-50 rounded-lg transition-all hover:bg-green-100 border border-green-100">
            <div className="bg-green-500 p-4 rounded-full mb-4 md:mb-0">
              <MessageSquare className="h-8 w-8 text-white" />
            </div>
            <div className="md:ml-6 text-center md:text-left">
              <p className="text-lg font-medium text-gray-900 mb-2">WhatsApp</p>
              <Link
                href="https://wa.me/3486813217"
                target="_blank"
                className="text-green-600 hover:text-green-800 font-medium text-lg inline-flex items-center"
              >
                3486813217
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center p-6 bg-blue-50 rounded-lg transition-all hover:bg-blue-100 border border-blue-100">
            <div className="bg-blue-500 p-4 rounded-full mb-4 md:mb-0">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <div className="md:ml-6 text-center md:text-left">
              <p className="text-lg font-medium text-gray-900 mb-2">Email</p>
              <Link
                href="mailto:dolcefilo1@gmail.com"
                className="text-blue-600 hover:text-blue-800 font-medium text-lg inline-flex items-center"
              >
                dolcefilo1@gmail.com
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

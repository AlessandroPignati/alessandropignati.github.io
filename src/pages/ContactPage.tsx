import React, { useState } from 'react';
import { EnvelopeSimple, LinkedinLogo, XLogo } from "@phosphor-icons/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBluesky } from '@fortawesome/free-brands-svg-icons';

export default function ContactPage() {

  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-4xl mx-auto pt-20 pb-12 px-4 flex-grow">
        <h1 className="text-4xl font-bold mb-12 text-center">Get in Touch</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <EnvelopeSimple size={24} weight="bold" className="text-black"/>
                  <a href="mailto:ale.pignati@hotmail.com" className="hover:font-bold transition-colors">
                    ale.pignati@hotmail.com
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <LinkedinLogo size={24} weight="bold" className="text-black"/>
                  <a href="https://www.linkedin.com/in/alessandro-pignati/" target="_blank" rel="noopener noreferrer"
                     className="hover:font-bold transition-colors">
                    LinkedIn Profile
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <XLogo size={24} weight="bold" className="text-black"/>
                  <a href="https://x.com/alepigna2000" target="_blank" rel="noopener noreferrer"
                     className="hover:font-bold transition-colors">
                    X Profile
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faBluesky} size="lg" className="text-black"/>
                  <a href="https://bsky.app/profile/alepigna.bsky.social" target="_blank" rel="noopener noreferrer"
                     className="hover:font-bold transition-colors">
                    Bluesky Profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-2xl font-semibold mb-6 text-center">PGP key</h1>
              <p className="text-black text-lg">
                If you have secret information to share, use my{" "}
                <a
                    href="/src/pgp-key.txt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                  PGP public key
                </a>.
              </p>
              <p className="text-black text-lg">Fingerprint: 6290 FDA5 775D B291 DA82 BEEF E015 ACEE A332 84B6
              </p>
            </div>
          </div>

          </div>
          <div className="text-center mt-12">
            <h2 className="text-2xl font-semibold mb-4">Scan my QR Code</h2>
            <img
                src="/src/img/qr_code.png"
                alt="QR Code"
                className="mx-auto mt-4"
            />
          </div>


      </div>

      {/* Footer Section */}
      <div className="text-center mt-auto text-black text-sm pb-4">
        <p>&copy; {new Date().getFullYear()} All rights are reserved to Alessandro Pignati.</p>
        <p>Opinions are my own, and do not necessarily reflect the views of my employer.</p>
        <p>No permission is given to scrape this site and its content to train AI models.</p>
      </div>
    </div>
  );
}



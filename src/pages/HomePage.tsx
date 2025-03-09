import React from 'react';

export default function HomePage() {
  return (
    <div className="relative min-h-screen">

      {/* Video Background (dietro all'immagine) */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <video
            autoPlay
            loop
            muted
            className="absolute w-full h-full object-cover"
        >
          <source
              src="/src/video/mixkit-white-clouds-moving-across-a-clear-blue-sky-51102-full-hd.mp4"
              type="video/mp4"
          />
        </video>
      </div>

      {/* Contenitore con immagine trasparente sopra */}
      <div
        className="relative z-10 min-h-screen flex items-center"
      >
        {/* Immagine di sfondo trasparente */}
        <div
          className="absolute top-0 left-0 w-full h-full z-10"
          style={{
            backgroundImage: "url('/src/img/job297-ploy-07c-blue-01.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.7, // Imposta l'opacità per rendere l'immagine leggermente trasparente
          }}
        ></div>

        {/* Contenuto che non deve essere trasparente */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="rounded-full overflow-hidden w-80 h-80 border-2 bg-white shadow-2xl">
                <img
                    src="/src/img/Alessandro_Pignati.jpg"
                    alt="Alessandro Pignati"
                    className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Contenitore con sfondo bianco sfumato */}
            <div className="relative p-8">

              <div
                  className="relative p-6 text-black"

              >
                <h1 className="text-5xl font-bold leading-tight">
                  Alessandro Pignati
                </h1>
                <p className="text-xl mt-4">
                  Welcome to my personal website. I am a passionate researcher and professional
                  dedicated to advancing knowledge in my field. With years of experience
                  and numerous publications, I strive to make meaningful contributions
                  to academic discourse and practical applications.
                </p>
                <p className="mt-4">
                  My research interests include AI Red Teaming, Adversarial Machine Learning, Federated Learning, and
                  Security of AI Agents. Through my work,
                  I aim to bridge the gap between theoretical frameworks and real-world
                  applications, fostering innovation and progress in the field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer (non trasparente) */}
      <footer className="absolute bottom-4 w-full text-center text-sm text-black z-10">
        <p>&copy; {new Date().getFullYear()} All rights are reserved to Alessandro Pignati. <br />
          Opinions are my own, and do not necessarily reflect the views of my employer. <br />
          No permission is given to scrape this site and its content to train AI models.</p>
      </footer>

    </div>
  );
}









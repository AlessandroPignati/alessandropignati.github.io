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
            backgroundImage: "url('/src/img/background.jpg')",
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
                <h1 className="text-5xl font-bold leading-tight ">
                  Alessandro Pignati
                </h1>
                <p className="text-xl mt-4 text-justify">
                  Welcome to my personal website! I am a Master's student in Computer Science and Engineering with a specialization in cybersecurity, passionate about research and dedicated to advancing knowledge in my field. With years of experience in cybersecurity, I am currently specializing in AI security.
                </p>
                  <p className="mt-4 text-justify">
                      My research interests include Adversarial Machine Learning, LLM security, Agentic AI security, and Federated Learning. I really like the AI security field and I continuously keep myself updated with the latest advancements in the field. Through my work, I aim to contribute meaningfully to AI security by researching novel attack techniques, developing robust defense mechanisms, and sharing my findings at conferences. I actively participate in the AI security community and enjoy collaborating with researchers and professionals to build a safer AI-driven future.
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









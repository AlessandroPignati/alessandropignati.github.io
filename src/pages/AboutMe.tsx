import { User } from "@phosphor-icons/react";

export default function AboutMe() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-5xl mx-auto pt-20 pb-12 px-4 flex-grow">


        {/* Intestazione */}
        <div className="flex items-center space-x-4 mb-12">
          <User size={32} className="text-black" />
          <h1 className="text-4xl font-bold">About Me</h1>
        </div>

        {/* Sezione Informazioni */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-black mb-4">Who Am I?</h2>
          <p className="text-black text-lg">
            Hi! I'm Alessandro Pignati, a passionate student researcher and cybersecurity enthusiast.
            Currently pursuing my Master's degree in Computer Science and Engineering, with a focus on Federated Learning, Adversarial Machine Learning, and AI Security. I enjoy working on innovative projects that address real-world problems in cybersecurity and AI.
          </p>
        </div>

        {/* Sezione Esperienze */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-black mb-4">My Journey</h2>
          <p className="text-black text-lg">
            My academic journey has been filled with both challenges and exciting milestones. I have completed several international programs, including internships and research positions, where I've deepened my knowledge in areas like network security, intrusion detection, and adversarial machine learning.
          </p>
          <ul className="mt-4 text-black list-disc pl-6">
            <li>Internship at Intesa Sanpaolo in Cybersecurity and Anti-Fraud Management</li>
            <li>Research on Adversarial Machine Learning, Federated Learning, Intrusion Detection Systems, Generative Adversarial Networks (GAN), AI Security</li>
            <li>Participation in international conferences such as BlackHat USA 2024, SecTor 2024, and InCyber Forum</li>
          </ul>
        </div>

        {/* Sezione Competenze */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-black mb-4">Skills & Expertise</h2>
          <p className="text-black text-lg">
            With a background in computer science and engineering and a special focus on cybersecurity, I specialize in the following areas:
          </p>
          <ul className="mt-4 text-black list-disc pl-6">
            <li>Federated Learning and Machine Learning Security</li>
            <li>Network Security and Intrusion Detection Systems</li>
            <li>Adversarial Machine Learning and Cybersecurity</li>
            <li>AI Security and Privacy Protection</li>
          </ul>
        </div>

        {/* Sezione Progetti */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-black mb-4">Recent Projects</h2>
          <p className="text-black text-lg">
            Here are a few of the projects I've worked on recently:
          </p>
          <ul className="mt-4 text-black list-disc pl-6">
            <li>
              <strong>Federated Learning for IoT Security:</strong> Developing a secure machine learning framework for distributed Internet of Things (IoT) networks.
            </li>
            <li>
              <strong>Adversarial Attack Detection in Machine Learning Models:</strong> Researching ways to defend against adversarial attacks and enhance the robustness of AI models.
            </li>
            <li>
              <strong>AI-Driven Intrusion Detection Systems:</strong> Creating AI-based models for identifying cyber threats in real-time.
            </li>
          </ul>
        </div>

        {/* Sezione Competenze */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-black mb-4">Bio and Headshot</h2>
          <p className="text-black text-lg font-medium">Short Bio</p>
          <p className="text-black text-justify">
            Alessandro Pignati holds a Bachelor's degree in Computer Science and Engineering from Politecnico di Milano,
            where he is currently completing his Master's in Computer Science and Engineering with a specialization in
            cybersecurity. He has extensive international experience, having studied at multiple universities worldwide.
            He speaks four languages and has interned in cybersecurity and anti-fraud management at Italy’s leading
            banking group. He also has research experience in adversarial machine learning, federated learning, and
            intrusion detection systems. His main interests lie in AI security and network security.
          </p>
          <p className="text-black text-lg font-medium">One-liner Bio</p>

          Alessandro Pignati, MSc student with a passion for cybersecurity and experience in both academia and industry,
          currently working in AI security.

          <p className="text-black text-lg font-medium mb-4">Headshot</p>
          <img src="/src/img/Headshot.jpg" alt="Alessandro Pignati" className="w-1/2 h-1/2"/>
        </div>
      </div>

      {/* Footer Section */}
      {/* Footer */}
      <div className="text-center py-4 text-black text-sm select-none">
        <p>&copy; {new Date().getFullYear()} All rights are reserved to Alessandro Pignati.</p>
        <p>Opinions are my own, and do not necessarily reflect the views of my employer.</p>
        <p>No permission is given to scrape this site and its content to train AI models.</p>
      </div>
    </div>
  );
}






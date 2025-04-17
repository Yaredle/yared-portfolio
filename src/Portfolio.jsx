
export default function Portfolio() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Yared Leul Hagos</h1>
        <p className="text-lg text-gray-600">RF and Microwave Engineer | PhD Researcher in Antenna Measurement Systems</p>
        <div className="flex justify-center space-x-4">
          <a href="mailto:y.l.hagos@tue.nl" className="text-blue-500 hover:underline">y.l.hagos@tue.nl</a>
          <a href="https://www.linkedin.com/in/yaredleul/" target="_blank" className="text-blue-500 hover:underline">LinkedIn</a>
        </div>
      </header>

      <section>
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p>
          I am a motivated PhD researcher at Eindhoven University of Technology, working on advanced sub-THz reverberation chambers
          for antenna measurements beyond 300 GHz as part of the IPCEI-6G project. With a strong background in RF and microwave
          engineering, I bring expertise in antenna design, measurement systems, and high-frequency simulation tools.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Education</h2>
        <ul className="list-disc list-inside">
          <li><strong>PhD, TU Eindhoven</strong> – Sub-THz Reverberation Chambers, 2024–2028</li>
          <li><strong>Erasmus Master EMIMEO</strong> – Limoges & Brescia, 2022–2024 (Top 2 in class)</li>
          <li><strong>BSc in Electrical and Computer Engineering</strong> – Addis Ababa University, 2015–2020 (GPA: 3.95/4.0)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Experience</h2>
        <ul className="space-y-2">
          <li><strong>Ericsson R&D, Paris</strong> – Master's Thesis (2024): Designed 40×40 phased antenna arrays for 5G NTN applications.</li>
          <li><strong>University of Brescia</strong> – Research Assistant (2023): Developed UWB patch antennas and performed radiation pattern measurements.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Projects</h2>
        <ul className="list-disc list-inside">
          <li>Antenna Array Synthesis for 5G MIMO Radar</li>
          <li>RIS Antenna Design for Q- and V-Band</li>
          <li>ANN for Radar-Based Gesture Recognition</li>
          <li>24 GHz URAD Radar Development</li>
          <li>Directional Coupler & Filter Design in HFSS</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Skills</h2>
        <p>CST Studio, Ansys HFSS, ADS, VNA, MATLAB, C++, Python, GitLab, LaTeX, Microsoft Project</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Certifications & Awards</h2>
        <ul className="list-disc list-inside">
          <li>Erasmus Mundus Scholarship (EUR 49,000)</li>
          <li>Best Bachelor Thesis Award – AAU</li>
          <li>Microwave Engineering – TU/e</li>
          <li>Machine Learning – Stanford University</li>
          <li>5G & 4G Network Fundamentals – Institut Mines-Télécom</li>
        </ul>
      </section>

      <footer className="text-center text-gray-500 mt-8">
        <p>&copy; 2025 Yared Leul Hagos. All rights reserved.</p>
      </footer>
    </div>
  );
}

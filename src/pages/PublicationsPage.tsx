import { useState } from 'react';
import { Article } from "@phosphor-icons/react";
import { Dialog } from "@headlessui/react";

export default function PublicationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  const [selectedYear, setSelectedYear] = useState('all');
  const [isCiteOpen, setIsCiteOpen] = useState(false);
  const [citationText, setCitationText] = useState('');

  const publications = [
    {
      title: "Soon",
      year: 2025,
      doi: "soon",
      pdf: "https:",
      abstract: "Soon"
    },
    {
      title: "Soon",
      year: 2023,
      doi: "soon",
      pdf: "https:",
      abstract: "Soon"
    },
    {
      title: "Soon",
      year: 2021,
      doi: "soon",
      pdf: "https:",
      abstract: "Soon"
    },
    {
      title: "Soon",
      year: 2021,
      doi: "soon",
      pdf: "https:",
      abstract: "Soon"
    }
  ];

  const availableYears = [...new Set(publications.map(pub => pub.year))].sort((a, b) => b - a);

  const filteredPublications = publications
    .filter(pub => {
      const normalizedTitle = pub.title.toLowerCase().replace(/\s+/g, ' ').trim();
      let normalizedQuery = searchQuery.toLowerCase().replace(/\s+/g, ' ').trim();

      const escapedQuery = normalizedQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b${escapedQuery}`, 'i');

      return regex.test(normalizedTitle) &&
        (selectedYear === 'all' || pub.year === parseInt(selectedYear));
    })
    .sort((a, b) => (sortOrder === 'desc' ? b.year - a.year : a.year - b.year));

  return (
    <div className="min-h-screen flex flex-col">
      {/* Contenuto principale */}
      <div className="flex-grow pt-20 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center space-x-4 mb-12">
            <Article size={32} className="text-black"/>
            <h1 className="text-4xl font-bold">Publications</h1>
          </div>

          <div className="flex space-x-4 mb-8">
            <input
              type="text"
              placeholder="Search by title..."
              className="p-2 rounded-tl-md rounded-bl-md border border-black bg-transparent text-black focus:outline-none focus:ring-2 focus:ring-black"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <select
              className="p-2 border border-black bg-transparent text-black focus:outline-none focus:ring-2 focus:ring-black"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="desc">Sort by Newest</option>
              <option value="asc">Sort by Oldest</option>
            </select>

            <select
              className="p-2 rounded-tr-md rounded-br-md border border-black bg-transparent text-black focus:outline-none focus:ring-2 focus:ring-black"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="all">All Years</option>
              {availableYears.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          <div className="space-y-8">
            {filteredPublications.length === 0 ? (
              <p className="text-center text-black">No results found</p>
            ) : (
              filteredPublications.map((pub, index) => (
                <div
                  key={index}
                  className={`border border-black backdrop-blur-sm p-6 transition-colors hover:border-gray-600 ${
                    filteredPublications.length === 1
                      ? 'rounded-lg'
                      : index === 0
                          ? 'rounded-t-lg' 
                          : index === filteredPublications.length - 1
                              ? 'rounded-b-lg' 
                              : ''
                  }`}
                >
                  <h2 className="text-2xl font-semibold text-black mb-2">{pub.title}</h2>
                  <div className="text-black-300 mb-4">
                    <p>{pub.year}</p>
                    <p className="text-sm">DOI: {pub.doi}</p>
                  </div>
                  <p className="text-black mb-4">{pub.abstract}</p>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => {
                        setIsCiteOpen(true);
                        setCitationText(`${pub.title}, ${pub.year}, DOI: ${pub.doi}`);
                      }}
                      className="px-4 py-2 rounded-md bg-black hover:bg-gray-800 text-white"
                    >
                      Cite
                    </button>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-md bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-colors duration-300"
                    >
                      PDF
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>

          <Dialog open={isCiteOpen} onClose={() => setIsCiteOpen(false)}>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-md shadow-lg max-w-md w-full">
                <h3 className="text-lg font-semibold mb-4">Citation</h3>
                <p className="text-black">{citationText}</p>
                <button
                  onClick={() => setIsCiteOpen(false)}
                  className="mt-4 px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          </Dialog>
        </div>
      </div>


    <div className="text-center py-4 text-black text-sm select-none">
    <p>&copy; {new Date().getFullYear()} All rights are reserved to Alessandro Pignati.</p>
    <p>Opinions are my own, and do not necessarily reflect the views of my employer.</p>
    <p>No permission is given to scrape this site and its content to train AI models.</p>
    </div>
    </div>
  );
}

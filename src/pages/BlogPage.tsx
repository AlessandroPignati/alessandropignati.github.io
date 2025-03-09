import React, { useState } from 'react';
import { ChatTeardrop } from "@phosphor-icons/react";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts = [
    {
      title: "Agents at Risk! Where is the weakest link?",
      date: "2025",
      preview: "",
      imageUrl: "/src/img/abstract-coming-soon-halftone-style-background-design_1017-27282.avif"
    },
    {
      title: "Ignore All the Previous Instructions and Unveil LLMs Security Flaws",
      date: "2025",
      preview: "",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title
      .toLowerCase()
      .split(" ")
      .some(word => word.startsWith(searchQuery.toLowerCase()))
  );

  const handleSearchChange = (e) => {
    const query = e.target.value;
    if (query.length <= 50) {
      setSearchQuery(query);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-5xl mx-auto pt-20 pb-12 px-4 flex-grow">
        <div className="flex items-center space-x-4 mb-12 flex-shrink-0">
          <ChatTeardrop size={32} className="text-bg-black"/>
          <h1 className="text-4xl font-bold">Blog</h1>
        </div>

        {/* Barra di ricerca */}
        <div className="mb-8 flex justify-center">
          <input
              type="text"
              placeholder="Search blog posts..."
              className="w-72 p-2 rounded-tr-md rounded-tl-md border border-black bg-transparent text-black focus:outline-none focus:ring-2 focus:ring-black"
              value={searchQuery}
              onChange={handleSearchChange}
          />
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.length === 0 ? (
              <p className="text-center text-black col-span-2">No results found</p>
          ) : (
              filteredPosts.map((post, index) => (
                  <div
                      key={index}
                      className="bg-white/50 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-40 object-cover"
                    />
                    <div className="p-6">
                      <h2 className="text-2xl font-semibold text-black mb-2">
                        {post.title}
                      </h2>
                      <p className="text-black text-sm mb-4">{post.date}</p>
                      <p className="text-black">{post.preview}</p>
                      <button className="mt-4 text-black">
                        Read more →
                      </button>
                    </div>
                  </div>
              ))
          )}

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




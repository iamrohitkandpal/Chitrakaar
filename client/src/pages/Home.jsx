import React, { useEffect, useState } from "react";
import { Loader, Card, FormField } from "../components";
import { API_BASE_URL } from "../config";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post, index) => (
      <div 
        key={post._id} 
        className="animate-fade-in" 
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <Card {...post} />
      </div>
    ));
  }

  return (
    <div className="col-span-full flex flex-col items-center justify-center py-16 animate-fade-in">
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 flex items-center justify-center mb-6">
        <svg className="w-12 h-12 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 text-center max-w-md">
        {title.includes('Search') ? 'Try different keywords or browse all images below.' : 'Be the first to share your AI-generated masterpiece with the community!'}
      </p>
    </div>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [searchedResults, setSearchedResults] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/image`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        setAllPosts(result.data.reverse());
      } else {
        console.error("Error fetching images:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const dataset = Array.isArray(allPosts) ? allPosts : [];
        const term = e.target.value.toLowerCase();
        const searchResults = dataset.filter(
          (item) =>
            item.name.toLowerCase().includes(term) || item.prompt.toLowerCase().includes(term)
        );

        setSearchedResults(searchResults);
      }, 300)
    );
  };

  const displayData = searchText ? searchedResults : allPosts;
  const resultsCount = displayData?.length || 0;

  return (
    <section className="max-w-7xl mx-auto animate-fade-in">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-white dark:to-gray-100 bg-clip-text text-transparent leading-tight mb-4">
          Community Showcase
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Discover amazing AI-generated artwork from our creative community. 
          Every image tells a unique story through the power of artificial intelligence.
        </p>
        
        {/* Stats */}
        <div className="flex justify-center items-center gap-8 mt-8 text-sm">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <span>{resultsCount} {resultsCount === 1 ? 'artwork' : 'artworks'}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Live updates</span>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="mb-12">
        <div className="max-w-xl mx-auto">
          <FormField 
            labelName="Search artworks" 
            type="text"
            name="search"
            placeholder="Search by artist name or description..."
            value={searchText}
            handleChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Results Section */}
      <div>
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <div className="mb-8 p-4 bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                      Search Results for "{searchText}"
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Found {resultsCount} {resultsCount === 1 ? 'result' : 'results'}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSearchText('');
                      setSearchedResults(null);
                    }}
                    className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200"
                  >
                    Clear search
                  </button>
                </div>
              </div>
            )}
            
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
              <RenderCards 
                data={displayData} 
                title={searchText ? "No matching artworks found" : "No artworks yet"} 
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;

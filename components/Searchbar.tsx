"use client";

import { scrapeAndStoreProduct } from "@/lib/actions";
import { useState } from "react";

const isValidAmazonProductUrl = (url: string) => {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;
    if (
      hostname.includes("amazon.com") ||
      hostname.includes("amazon.") ||
      hostname.includes("amazon")
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }
  return false;
};

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const isValidUrl = isValidAmazonProductUrl(searchPrompt);
    if (!isValidUrl) {
      setIsLoading(false);
      return alert("Please enter a valid Amazon product link");
    }

    try {
      // scrape amazon product page
      const product = await scrapeAndStoreProduct(searchPrompt);


      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder="Enter product link..."
        className="searchbar-input"
      />
      <button
        type="submit"
        disabled={searchPrompt === ""}
        className="searchbar-btn"
      >
        {isLoading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default Searchbar;

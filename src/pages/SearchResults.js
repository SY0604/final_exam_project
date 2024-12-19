import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchNewsByQuery } from '../services/newsApi';

const SearchResults = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q'); // Extract query from URL

    useEffect(() => {
        const loadSearchResults = async () => {
            setLoading(true);
            try {
                const articles = await fetchNewsByQuery(query);
                setNews(articles);
            } catch (error) {
                console.error('Error fetching search results:', error);
            } finally {
                setLoading(false);
            }
        };

        if (query) loadSearchResults();
    }, [query]);

    if (loading) return <p>Loading search results...</p>;

    return (
        <div className="container mt-5">
            <h1>Search Results for "{query}"</h1>
            <div className="row">
                {news.map((article, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card">
                            <img src={article.urlToImage} className="card-img-top" alt="News" />
                            <div className="card-body">
                                <h5 className="card-title">{article.title}</h5>
                                <p className="card-text">{article.description}</p>
                                <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;

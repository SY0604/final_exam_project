import React, { useEffect, useState } from 'react';
import { fetchTopHeadlines, fetchNewsByQuery } from '../services/newsApi';

const Home = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const loadNews = async () => {
            try {
                const articles = await fetchTopHeadlines('us'); // Fetch headlines for the US
                setNews(articles);
            } catch (err) {
                console.error(err);
                setError('Failed to load news. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        loadNews();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery) return;

        try {
            setLoading(true);
            const results = await fetchNewsByQuery(searchQuery);
            setNews(results);
        } catch (err) {
            console.error(err);
            setError('Failed to fetch search results. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <p>Loading news...</p>;
    if (error) return <p className="text-danger">{error}</p>;

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Top Headlines</h1>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="mb-4">
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Search news..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="form-control"
                    />
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
            </form>

            {/* News Grid */}
            <div className="row">
                {news.length > 0 ? (
                    news.map((article, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card">
                                <img
                                    src={article.urlToImage || 'https://via.placeholder.com/150'}
                                    className="card-img-top"
                                    alt="News"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{article.title}</h5>
                                    <p className="card-text">{article.description || 'No description available.'}</p>
                                    <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No news found. Try a different search query.</p>
                )}
            </div>
        </div>
    );
};

export default Home;

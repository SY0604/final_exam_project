import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchNewsById } from '../services/fauxApi';

const PostDetails = () => {
    const { id } = useParams();
    const [news, setNews] = useState(null);

    useEffect(() => {
        const loadNews = async () => {
            try {
                const data = await fetchNewsById(id);
                setNews(data);
            } catch (error) {
                console.error(error);
            }
        };

        loadNews();
    }, [id]);

    if (!news) return <p>Loading news...</p>;

    return (
        <div className="container mt-5">
            <h1>{news.title}</h1>
            <img src={news.urlToImage} alt="News" className="img-fluid" />
            <p>{news.description}</p>
        </div>
    );
};

export default PostDetails;

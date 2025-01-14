import React, { useState, useEffect } from 'react';
import './TopSeries.css';

function TopSeries() {
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSeries = async () => {
            try {
                const response = await fetch('https://api.tvmaze.com/shows');
                const data = await response.json();
                const topShows = data.sort((a, b) => b.rating.average - a.rating.average).slice(0, 20);
                setSeries(topShows);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchSeries();
    }, []);

    return (
        <main>
            <section>
                <h1>Top Seriale</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Imagine</th>
                                <th>Nume</th>
                                <th>Gen</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {series.map((serie) => (
                                <tr key={serie.id}>
                                    <td>
                                        <img
                                            src={serie.image?.medium || 'https://via.placeholder.com/100'} 
                                            alt={serie.name}
                                            width="100"
                                            height="auto"
                                        />
                                    </td>
                                    <td>{serie.name}</td>
                                    <td>{serie.genres.join(', ') || 'Unknown'}</td>
                                    <td>{serie.rating.average || 'N/A'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </section>
        </main>
    );
}

export default TopSeries;

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Anime {
    mal_id: string;
    title: string;
    images: { jpg: { image_url: string } };
    score: number;
}

export const Favorite = () => {
    const [favorites, setFavorites] = useState<Anime[]>([]);

    // Load favorites from localStorage 
    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    // Remove a favorite
    const removeFavorite = (mal_id: string) => {
        const updatedFavorites = favorites.filter((anime) => anime.mal_id !== mal_id);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold text-center mb-5">My Favorites</h1>
            {favorites.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {favorites.map((anime) => (
                        <div key={anime.mal_id} className="bg-white border border-gray-300 rounded-lg shadow p-3">
                            <Link to={`/detail/${anime.mal_id}`}>
                                <img
                                    className="rounded-lg mb-3"
                                    src={anime.images.jpg.image_url}
                                    alt={anime.title}
                                />
                                <h2 className="text-xl font-bold">{anime.title}</h2>
                            </Link>
                            <p className="text-gray-600">Score: {anime.score}</p>
                            <button
                                className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg"
                                onClick={() => removeFavorite(anime.mal_id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No favorites added yet.</p>
            )}
        </div>
    );
};

import { animeSeasonresponse } from '../../interface/animeSeason';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface AnimeCardProps {
    data: animeSeasonresponse | string;
}

export const AnimeCardSeason = ({ data }: AnimeCardProps) => {
    if (typeof data !== 'object' || !('mal_id' in data)) {
        console.error('Invalid data format:', data);
        return <div className="text-red-500">Error: Invalid anime data</div>;
    }

    const [isFavorite, setIsFavorite] = useState(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        return favorites.some((item: any) => item.mal_id === data.mal_id);
    });

    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        const isAlreadyFavorite = favorites.some((item: any) => item.mal_id === data.mal_id);

        const updatedFavorites = isAlreadyFavorite
            ? favorites.filter((item: any) => item.mal_id !== data.mal_id)
            : [...favorites, data];

        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setIsFavorite(!isFavorite);
    };

    const imageUrl = data.images?.jpg?.image_url || 'fallback-image-url.jpg';

    return (
        <div className="flex justify-center">
            <div className="w-72 h-100 bg-white border border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <Link to={`/detail/${data?.mal_id || 'unknown'}`}>
                    <img
                        className="p-10 rounded-t-lg h-200"
                        src={imageUrl}
                        alt={data?.title || 'Anime image'}
                    />
                </Link>
                <div className="px-5 pb-5">
                    <Link to={`/detail/${data?.mal_id || 'unknown'}`}>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {data?.title || 'Untitled'}
                        </h5>
                    </Link>
                    <div className="flex items-center mt-2.5 mb-5 justify-center">
                        <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                            Score: {data?.score || 'N/A'}
                        </span>
                    </div>
                    <div className="flex justify-center">
                        <button
                            className={`px-4 py-2 text-sm font-medium text-white rounded-lg ${isFavorite ? 'bg-red-500' : 'bg-gray-500'}`}
                            onClick={toggleFavorite}
                        >
                            {isFavorite ? 'Unfavorite' : 'Favorite'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

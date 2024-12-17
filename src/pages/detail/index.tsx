import { useEffect, useState } from "react";
import { animeDetailServices } from "../../services/animeDetail";
import { useParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";


const DetailPage = () => {
    const { mal_id } = useParams<{ mal_id: string }>();
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const callData = async (mal_id: string) => {
        setLoading(true);
        setError(null);
        try {
            const data = await animeDetailServices.getAnimeDetail(mal_id);
            setResult(data);
        } catch (err) {
            setError("Failed to fetch anime details.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (mal_id) {
            callData((mal_id));
        }
    }, [mal_id]);

    if (loading) return <p>Loading...<div className="flex justify-center items-center col-span-full">(<Oval
        visible={true}
        height="80"
        width="80"
        color="black"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
    />)</div>


    </p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (

        <div className="p-6 flex flex-col items-center bg-gray-100 min-h-screen">

            {result && (
                <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Picture */}
                        <div className="flex-1 flex justify-center">
                            <img
                                src={result.data?.images.jpg.large_image_url}
                                alt={result.data?.title}
                                className="rounded-lg shadow-md w-full max-w-sm"
                            />
                        </div>

                        {/* Data */}
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-4">{result.data?.title}</h2>
                            <p className="text-gray-600 text-sm mb-2">
                                <strong>Type:</strong> {result.data?.type || "N/A"}
                            </p>
                            <p className="text-gray-600 text-sm mb-2">
                                <strong>Episodes:</strong> {result.data?.episodes || "N/A"}
                            </p>
                            <p className="text-gray-600 text-sm mb-2">
                                <strong>Status:</strong> {result.data?.status || "N/A"}
                            </p>
                            <p className="text-gray-600 text-sm mb-2">
                                <strong>From:</strong>{" "}
                                {result.data?.aired?.prop?.from
                                    ? `${result.data.aired.prop.from.day}/${result.data.aired.prop.from.month}/${result.data.aired.prop.from.year}`
                                    : "N/A"}
                            </p>


                            <p className="text-gray-600 text-sm mb-2">
                                <strong>to:</strong>{" "}
                                {result.data?.aired?.prop?.to
                                    ? `${result.data.aired.prop.to.day}/${result.data.aired.prop.to.month}/${result.data.aired.prop.to.year}`
                                    : "N/A"}
                            </p>
                            <p className="text-gray-600 text-sm mb-2">
                                <strong>Score:</strong> {result.data?.score || "N/A"}
                            </p>
                            <p className="text-gray-600 text-sm mb-2">
                                <strong>Rating:</strong> {result.data?.rating || "N/A"}
                            </p>
                            <p className="mt-4 text-gray-700">{result.data?.synopsis}</p>
                        </div>
                    </div>

                    {/* Video */}
                    {result.data?.trailer?.url && (
                        <div className="mt-6">
                            <h3 className="text-xl font-bold">Trailer</h3>
                            <iframe
                                src={result.data?.trailer.embed_url}
                                title={`${result.data?.title} Trailer`}
                                className="w-full h-[500px] rounded-lg shadow-xl"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default DetailPage;

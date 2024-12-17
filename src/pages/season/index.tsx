import React, { useState } from "react";
import { animeSeasonServices } from "../../services/animeSeason";
import { animeSeasonresponse } from "../../interface/animeSeason";
import { AnimeCardSeason } from "../../components/Animecard/AnimeCardSeason";
import { Oval } from "react-loader-spinner";



const SeasonPage = () => {
    const [year, setYear] = useState<string>(""); // state for year
    const [season, setSeason] = useState<string>(""); // state season
    const [result, setResult] = useState<any>([]); // collect API data
    const [loading, setLoading] = useState<boolean>(false); //  Loading

    const callData = async (year: any, season: string) => {
        setLoading(true); // start
        try {
            const data = await animeSeasonServices.getAnimeSeason(year, season); // call API
            console.log("data", data.data);
            setResult(data.data.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false); //end
        }
    };





    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {   //event type form
        e.preventDefault();
        if (year && season) {
            callData(year, season); // input year and season
        } else {
            alert("Please select both Year and Season");
        }
    };

    return (
        <div className="">
            <div className="text-white bg-black text-2xl font-bold h-max w-max py-2">
                <h5>Anime by Season</h5>
            </div>

            {/* Form input data */}
            <div className="mt-10 mb-10 h-[30px] flex justify-center items-center space-x-4">
                <form onSubmit={onSubmit} className="flex space-x-4 items-center">
                    {/* select season */}
                    <div className="flex flex-col">
                        <label htmlFor="season" className="text-gray-700 font-bold mb-1">
                            Select Season
                        </label>
                        <select
                            id="season"
                            value={season}
                            onChange={(e) => setSeason(e.target.value)}
                            className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">-- Select Season --</option>
                            <option value="Winter">Winter</option>
                            <option value="Spring">Spring</option>
                            <option value="Summer">Summer</option>
                            <option value="Fall">Fall</option>
                        </select>
                    </div>

                    {/* select year */}
                    <div className="flex flex-col">
                        <label htmlFor="year" className="text-gray-700 font-bold mb-1">
                            Enter Year
                        </label>
                        <input
                            type="text"
                            id="year"
                            placeholder="Year"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* button Submit */}
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                        Search
                    </button>
                </form>
            </div>


            {/* output*/}
            <div className="grid grid-cols-3 gap-[20px] mt-[40px]">

                {loading ? (
                    <div className="flex justify-center items-center col-span-full">(<Oval
                        visible={true}
                        height="80"
                        width="80"
                        color="black"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />)</div>


                ) :
                    (
                        result.map((data: animeSeasonresponse, index: number) => (
                            <AnimeCardSeason key={index} data={data} />
                        ))
                    )}
            </div>
        </div>
    );
};

export default SeasonPage;

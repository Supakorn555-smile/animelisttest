import { useEffect, useState } from "react";
import { animeListServices } from '../../services/animeList'
import { AnimeCard } from '../../components/Animecard'
import { animeListresponse } from "../../interface/animeList";
import ReactPaginate from "react-paginate";
import { Oval } from "react-loader-spinner";

interface Pagination {
    current_page: number;
    has_next_page: boolean;
    item: {
        count: number;
        per_page: number;
        total: number;
    };
    last_visible_page: number;
}


const HomePage = () => {

    const [searchQuery, setSearchQuery] = useState<string>("");
    const [result, setResult] = useState<any>([]);
    const [curPage, setCurPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false); //  Loading
    const [pagination] = useState<Pagination>({
        current_page: 1,
        has_next_page: true,
        item: {
            count: 0,
            per_page: 25,
            total: 0,
        },
        last_visible_page: 5,
    });

    const handlePageClick = (event: any) => {
        console.log("event", event.selected + 1)
        callData(event.selected + 1, searchQuery)
        setCurPage(event.selected)
    };

    const callData = async (page: number, searchQuery?: string) => {
        try {
            const data = await animeListServices.getAnimeList(page, searchQuery);
            console.log('data', data.data);


            setResult(data.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {

        callData(1)
    }, [searchQuery]);

    const onSubmit = (e: any) => {
        e.preventDefault();
        setCurPage(1);
        callData(1, searchQuery);
    }

    return (

        <div className=" ">
            <div className="text-white  bg-black text-2xl font-bold h-max w-max  py-2   ">
                <h5>Anime Name Search</h5>
            </div>
            <div className="mt-10 mb-10 h-[30px] w-[200px]  ">
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        placeholder="Search Anime..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px- py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"

                    />                </form>
            </div>

            <div className="grid grid-cols-3 gap-[20px] mt-[40px]" >{setLoading}

                {loading ? (
                    <div className="flex justify-center items-center col-span-full">(<Oval
                        visible={true}
                        height="80"
                        width="80"
                        color="black"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />)</div>) :


                    (
                        result.map((data: animeListresponse, index: number,) => (
                            <AnimeCard key={index} data={data} />

                        ))
                    )}
            </div>
            <div>
                <hr></hr>
                <ReactPaginate className="flex gap-[10px] justify-center bg-black text-gray-300 text-xl  space-x-6"
                    breakLabel="..."
                    forcePage={curPage}
                    nextLabel="next >"

                    onPageChange={handlePageClick}


                    pageRangeDisplayed={1}


                    pageCount={pagination.last_visible_page}

                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                />




            </div>

        </div >
    );
}

export default HomePage



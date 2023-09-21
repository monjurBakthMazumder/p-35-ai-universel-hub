import { useLoaderData } from "react-router-dom";
import Ai from '../Ai/Ai/'

const AllAi = () => {
    const AllAi = useLoaderData();
    const ai = AllAi.data.tools
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5 md:px-[10%] my-10 gap-5">
            {
                ai.map(a=> 
                    <Ai
                        key={a.id}
                        a={a}
                    />
                )
            }
        </div>
    );
};

export default AllAi;
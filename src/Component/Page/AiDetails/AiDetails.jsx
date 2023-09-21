import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
const AiDetails = () => {
    const allData = useLoaderData()
    const data = allData.data
    const  {accuracy, description, features, image_link, input_output_examples,integrations, pricing, tool_name, use_cases, website} = data;
    const allFeature = Object.values(features)
    console.log(features);
    console.log(allFeature);

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1)
    }
    return (
    <div className="min-h-screen px-5 md:px-[10%] mb-10">
                <BsFillArrowLeftCircleFill
                    onClick={handleClick}
                    className='text-3xl cursor-pointer hover:text-gray-500 my-5'
                />
        <div className="flex flex-col md:flex-row justify-center gap-5 ">
            <div className="flex-1">
            <div className="carousel w-full">
                {
                    image_link.map((img,i)=> 
                        <>
                                <div id={`item${i}`} className="carousel-item w-full">
                                <img src={img} className="w-full"  alt={`image of ${tool_name}`}/>
                                </div>
                        </>
                    )
                }
            </div>
            </div>
            <div className="flex-1">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">{tool_name}</h1>
                <p className="text-[13px] my-1">WebSire : <Link to={website} target="_blank" className="font-bold underline ">{tool_name}</Link></p>
                <p>{description}</p>
                <h1 className="text-lg font-semibold underline mt-3 mb-1">Accuracy</h1>
                <p>Accuracy: {(accuracy.score)* 100}%</p>
                <p>{accuracy.description}</p>
                <h1 className="text-lg font-semibold underline mt-3 mb-1">Features</h1>
                {
                    allFeature.map((feature,i)=> 
                        <div key={i}>
                            <p>{++i}. {feature.feature_name}</p>
                            <p className="text-xs">{feature.description}</p>
                        </div>
                    )
                }
                <h1 className="text-lg font-semibold underline mt-3 mb-1">Integrations</h1>
                {
                    integrations.map((integration,i)=> <p key={i}>{++i}. {integration}</p>)
                }
                <h1 className="text-lg font-semibold underline mt-3 mb-1">Use cases</h1>
                {
                    use_cases.map((use_case,i)=> 
                    <div key={i} className="mb-2">
                            <p>{++i}. {use_case.name}</p>
                            <p className="text-xs">{use_case.description}</p>
                        </div>
                    )
                }
                <h1 className="text-lg font-semibold underline mt-3 mb-1">Pricing</h1>
                {
                    pricing.map((price,i) => 
                    <div key={i} className="text-xs my-1">
                            <span>{++i}. {price.plan}-</span>
                            <span>{price.price}</span>
                        </div>
                    )
                }
                <h1 className="text-lg font-semibold underline mt-3 mb-1">Input output examples</h1>
                {
                    input_output_examples.map((input_output_example,i) =>
                        <div key={i} className="mb-2">
                            <p>{++i}. Examples</p>
                            <p className="text-xs my-1"><span className="underline font-medium">Input:</span> {input_output_example.input}</p>
                            <p className="text-xs my-1"><span className="underline font-medium">Output:</span> {input_output_example.output}</p>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
    );
};

export default AiDetails;
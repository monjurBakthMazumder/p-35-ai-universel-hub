import PropTypes from 'prop-types';
import { LuCalendarDays } from 'react-icons/lu';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
const Ai = ({a}) => {
    const {image, name, id, published_in, features} = a;
    const navigate = useNavigate();
    const handleClick = ()=> {
        navigate(`/${id}`)
    }
    console.log(a);
    return (
        <div className='card card-compact bg-base-100 border flex flex-col'>
            <figure className="p-5 h-52"><img src={image} alt={`image of ${name}`} className="rounded-xl h-full w-full" /></figure>
            <div className="card-body flex-grow">
                <h2 className="text-lg font-semibold">Features</h2>
                {
                    features.map((feature, i)=> <p key={i} className='text-xs'>{++i}. {feature}</p>)
                }
            <hr/>
            <div className="flex justify-between items-center gap-2">
                <div className="">
                    <h2 className="text-xl font-semibold my-2">{id}. {name}</h2>
                    <p className="flex justify-start items-center gap-2">
                        <LuCalendarDays/> 
                        {published_in}</p>
                </div>
                <BsFillArrowRightCircleFill 
                    onClick={handleClick}
                    className='text-3xl cursor-pointer hover:text-gray-500'
                />
            </div>
            </div>
        </div>
    );
};

Ai.propTypes = {
    a : PropTypes.object
};

export default Ai;
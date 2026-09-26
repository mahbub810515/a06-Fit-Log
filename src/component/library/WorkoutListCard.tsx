import { WorkoutType } from '@/types/WorkoutType';
import { FaFire, FaRegStar } from 'react-icons/fa';
import { IoTimeSharp } from 'react-icons/io5';


type WorkoutsCardProps = {
    workout: WorkoutType;
};
const WorkoutListCard = ({ workout }: WorkoutsCardProps) => {
    return (
        <div className='m-2'>
            <ul className="list bg-base-100 rounded-box shadow-md">
                <li className="list-row">
                    <div><img className="size-10 rounded-box" alt="Tailwind CSS list item" src={workout.image} /></div>
                    <div>
                        <div className='font-bold text-2xl'>{workout.name}</div>
                        <div className="text-xs uppercase font-semibold opacity-60">{workout.muscleGroups}</div>
                        <div className="flex gap-2 text-xs uppercase font-semibold opacity-60">
                            <h2 className='flex gap-1 items-center font-bold text-2xl'>
                                <IoTimeSharp className='text-lime-500' /> {workout.duration}
                            </h2>
                            <h2 className='flex gap-1 items-center font-bold text-2xl'>
                                <FaFire className='text-lime-500'/>{workout.caloriesBurned}
                            </h2>
                            <h2 className='flex gap-1 items-center font-bold text-2xl'>
                                <FaRegStar className='text-lime-500' />{workout.rating}
                            </h2>
                        </div>
                    </div>
                    <button className="btn btn-success">
                        View Details
                    </button>
                    <button className="btn btn-primary">
                        Mark As A Done
                    </button>
                    <button className="btn btn-error">
                        X
                    </button>

                </li>

            </ul>
        </div>
    )
}

export default WorkoutListCard
import { useWorkout } from '@/context/WorkoutContext';
import { WorkoutType } from '@/types/WorkoutType';
import Link from 'next/link';
import { useState } from 'react';
import { FaFire, FaRegStar } from 'react-icons/fa';
import { IoTimeSharp } from 'react-icons/io5';


type WorkoutsCardProps = {
    workout: WorkoutType;
};
const WorkoutListCard = ({ workout }: WorkoutsCardProps) => {
    const [isCompleted, setIsCompleted] = useState(false);
    const context = useWorkout();

    return (
        <div className='m-2 '>
            <ul className="list bg-base-100 rounded-box shadow-md">
                <li className="list-row">
                    <div><img className="size-25 rounded-box" alt={workout.name} src={workout.image} /></div>
                    <div>
                        <div className='font-bold text-2xl'>{workout.name}</div>
                        <div className="text-xs uppercase font-semibold opacity-60">{workout.muscleGroups}</div>
                        <div className="flex gap-2 text-xs uppercase font-semibold opacity-60">
                            <h2 className='flex gap-1 items-center font-bold text-2xl'>
                                <IoTimeSharp className='text-lime-500' /> {workout.duration}
                            </h2>
                            <h2 className='flex gap-1 items-center font-bold text-2xl'>
                                <FaFire className='text-lime-500' />{workout.caloriesBurned}
                            </h2>
                            <h2 className='flex gap-1 items-center font-bold text-2xl'>
                                <FaRegStar className='text-lime-500' />{workout.rating}
                            </h2>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Link href={`workout/${workout.id}`} className="btn btn-success" >
                            View Details
                        </Link>
                        <button
                            onClick={() => setIsCompleted(!isCompleted)}
                            className={`btn ${isCompleted ? "btn-success" : "btn-primary"
                                }`}>
                            {isCompleted ? "Completed" : "Mark as Done"}
                        </button>
                        <button className="btn btn-error"
                            onClick={() => {
                                if (context?.isInTodayPlan(workout.id)) {
                                    context.removeFromTodayPlan(workout.id);
                                } else {
                                    context?.removeFromSavedWorkouts(workout.id);
                                }
                            }}
                        >   
                            {context?.isInTodayPlan(workout.id) ? "Remove from Plan" : "Remove from saved"} 
                        </button>
                    </div>

                </li>

            </ul>
        </div>
    )
}

export default WorkoutListCard
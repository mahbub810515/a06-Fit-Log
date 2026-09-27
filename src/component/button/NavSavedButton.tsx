'use client'    
import { useWorkout } from '@/context/WorkoutContext'


const NavSavedButton = () => {
    const workoutContext = useWorkout()
    return (
        <div>
           <button className="btn bg-slate-900 border-none hover:bg-slate-600 text-white">
                Saved {workoutContext.savedWorkouts.length > 0 && (
                    <span className="badge badge-sm badge-primary">{workoutContext.savedWorkouts.length}</span>
                )}
            </button>
        </div>
    )
}

export default NavSavedButton
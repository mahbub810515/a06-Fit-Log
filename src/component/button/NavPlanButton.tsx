'use client'    
import { useWorkout } from '@/context/WorkoutContext'

const NavPlanButton = () => {
    const workoutContext = useWorkout()
    return (
        <div>
            <button className="btn bg-slate-900 border-none hover:bg-slate-600 text-white">
                Plan {workoutContext.todayPlan.length > 0 && (
                    <span className="badge badge-sm badge-primary">{workoutContext.todayPlan.length}</span>
                )}
            </button>
        </div>
    )
}

export default NavPlanButton
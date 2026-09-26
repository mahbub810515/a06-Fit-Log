'use client'
import { useWorkout } from '@/context/WorkoutContext'
import { WorkoutType } from '@/types/WorkoutType'
import { toast } from 'react-toastify'

const SaveForLater = ({ workout }: { workout: WorkoutType }) => {
    const context = useWorkout();
    const { savedWorkouts, saveForLater } = context;
    const handleSaveForLater = () => {
        saveForLater(workout)
        toast.success("workout Saved successfully for Later");
    }
    return (
        <button onClick={() => handleSaveForLater()}
            className="btn btn-primary rounded-xl px-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Save For Later
        </button>
    )
}

export default SaveForLater
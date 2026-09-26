'use client'
import { useWorkout } from '@/context/WorkoutContext'
import { WorkoutType } from '@/types/WorkoutType'
import React from 'react'
import { toast } from 'react-toastify'

const AaddTodayPlan = ({ workout }: { workout: WorkoutType }) => {
    const context = useWorkout();
    const { todayPlan, addToTodayPlan } = context;
    const handleAddTodayPlan = () => {
        addToTodayPlan(workout)
        toast.success("workout added successfully to Today's plan");
    }
    return (
        <button onClick={() => handleAddTodayPlan()}
            className="btn btn-primary rounded-xl px-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Add to today's plan
        </button>
    )
}

export default AaddTodayPlan
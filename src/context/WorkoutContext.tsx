"use client";

import { WorkoutType } from "@/types/WorkoutType";
import {  createContext,ReactNode,useContext,useState,} from "react";



type WorkoutContextType = {
  todayPlan: WorkoutType[];
  savedWorkouts: WorkoutType[];

  addToTodayPlan: (workout: WorkoutType) => void;
  removeFromTodayPlan: (id: number) => void;

  saveForLater: (workout: WorkoutType) => void;
  removeFromSaved: (id: number) => void;

  isInTodayPlan: (id: number) => boolean;
  isSaved: (id: number) => boolean;
};

const WorkoutContext = createContext<WorkoutContextType | undefined>(
  undefined
);

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<WorkoutType[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<WorkoutType[]>([]);

  // Add workout to today's plan
  const addToTodayPlan = (workout: WorkoutType) => {
    setTodayPlan((prev) => {
      if (prev.some((item) => item.id === workout.id)) {
        return prev;
      }

      return [...prev, workout];
    });
  };

  // Remove workout from today's plan
  const removeFromTodayPlan = (id: number) => {
    setTodayPlan((prev) =>
      prev.filter((workout) => workout.id !== id)
    );
  };

  // Save workout for later
  const saveForLater = (workout: WorkoutType) => {
    setSavedWorkouts((prev) => {
      if (prev.some((item) => item.id === workout.id)) {
        return prev;
      }

      return [...prev, workout];
    });
  };

  // Remove from saved workouts
  const removeFromSaved = (id: number) => {
    setSavedWorkouts((prev) =>
      prev.filter((workout) => workout.id !== id)
    );
  };

  // Check today's plan
  const isInTodayPlan = (id: number) => {
    return todayPlan.some((workout) => workout.id === id);
  };

  // Check saved workouts
  const isSaved = (id: number) => {
    return savedWorkouts.some((workout) => workout.id === id);
  };

  return (
    <WorkoutContext.Provider
      value={{
        todayPlan,
        savedWorkouts,

        addToTodayPlan,
        removeFromTodayPlan,

        saveForLater,
        removeFromSaved,

        isInTodayPlan,
        isSaved,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;

export const useWorkout = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error(
      "useWorkout must be used inside WorkoutProvider"
    );
  }

  return context;
};
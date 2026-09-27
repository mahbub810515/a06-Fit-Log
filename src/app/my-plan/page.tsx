'use client'
import WorkoutListCard from '@/component/library/WorkoutListCard';
import { useWorkout } from '@/context/WorkoutContext'
import { WorkoutType } from '@/types/WorkoutType';
import { useState } from 'react';
import { FaBookmark, FaCalendarCheck, FaClock, FaDumbbell, FaFire } from 'react-icons/fa';


const MyPlan = () => {
  const context = useWorkout();
  const { todayPlan, savedWorkouts, } = context;
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">("duration");

  const sortedWorkouts = (workouts: WorkoutType[]) => {
    switch (sortBy) {
      case "duration":
        return workouts.sort((a, b) => b.duration - a.duration);
      case "calories":
        return workouts.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
      case "rating":
        return workouts.sort((a, b) => b.rating - a.rating);
      default:
        return workouts;
    }
  };

  return (
    <div className="bg-slate-900  min-h-screen py-10">
      <div className="container mx-auto max-w-6xl px-4">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-content">
              <FaDumbbell />
            </div>

            <h1 className="text-3xl text-white font-bold tracking-tight">
              My Plan
            </h1>
          </div>

          <p className="text-white">
            Stay consistent, follow your workout plan, and reach your fitness
            goals.
          </p>
        </div>

        {/* Workout Summary */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

          {/* Minutes */}
          <div className="flex items-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <FaClock className="text-xl" />
            </div>

            <div>
              <p className="text-sm text-base-content/60">
                Minutes
              </p>
              <h2 className="text-2xl font-bold">
                {activeTab === "today" ? todayPlan.reduce((total: number, workout: WorkoutType) => total + workout.duration, 0) : savedWorkouts.reduce((total: number, workout: WorkoutType) => total + workout.duration, 0)}
              </h2>
            </div>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-error/10 text-error">
              <FaFire className="text-xl" />
            </div>

            <div>
              <p className="text-sm text-base-content/60">
                Calories
              </p>
              <h2 className="text-2xl font-bold">
                {activeTab === "today" ? todayPlan.reduce((total: number, workout: WorkoutType) => total + workout.caloriesBurned, 0) : savedWorkouts.reduce((total: number, workout: WorkoutType) => total + workout.caloriesBurned, 0)}
              </h2>
            </div>
          </div>

          {/* Exercises */}
          <div className="flex items-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/10 text-success">
              <FaDumbbell className="text-xl" />
            </div>

            <div>
              <p className="text-sm text-base-content/60">
                Exercises
              </p>
              <h2 className="text-2xl font-bold">
                {activeTab === "today" ? todayPlan.length : savedWorkouts.length}
              </h2>
            </div>
          </div>

        </div>

        {/* Workout Tabs */}
        <div className="flex rounded-2xl border border-base-300 bg-base-100 p-2 shadow-sm">
          
          <div className="tabs tabs-box">

            {/* Today's Plan */}
            <input
              type="radio"
              name="my_plan_tabs"
              className="tab"
              aria-label="Today's Plan"
              checked={activeTab === "today"}
              onChange={() => setActiveTab("today")}
            />

            <div className="tab-content p-5 sm:p-6">

              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <FaCalendarCheck className="text-primary" />

                    <h2 className="text-xl font-bold">
                      Today's Plan
                    </h2>
                  </div>

                  <p className="mt-1 text-sm text-base-content/60">
                    Complete your scheduled workouts for today.
                  </p>
                </div>

                <span className="badge badge-primary">
                  {activeTab === "today" ? todayPlan.length : savedWorkouts.length} Exercises
                </span>
              </div>

              {/* Workout List */}
              {todayPlan.length > 0 || savedWorkouts.length > 0 ? (
                <div className="space-y-4">
                  {sortedWorkouts(activeTab === "today" ? todayPlan : savedWorkouts).map((workout) => (
                    <WorkoutListCard
                      key={workout.id}
                      workout={workout}
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-base-300 p-10 text-center">
                  <FaDumbbell className="mx-auto mb-3 text-3xl text-base-content/30" />

                  <h3 className="font-semibold">
                    No workouts planned
                  </h3>

                  <p className="mt-1 text-sm text-base-content/60">
                    Add a workout to your today's plan.
                  </p>
                </div>
              )}
            </div>

            {/* Saved Workouts */}
            <input
              type="radio"
              name="my_plan_tabs"
              className="tab"
              aria-label="Saved"
              checked={activeTab === "saved"}
              onChange={() => setActiveTab("saved")}
            />

            <div className="tab-content p-5 sm:p-6">

              <div className="mb-6 flex items-center gap-2">
                <FaBookmark className="text-primary" />

                <div>
                  <h2 className="text-xl font-bold">
                    Saved Workouts
                  </h2>

                  <p className="text-sm text-base-content/60">
                    Your workouts saved for later.
                  </p>
                </div>
              </div>

              {savedWorkouts.length > 0 ? (
                <div className="space-y-4">
                  {sortedWorkouts(savedWorkouts).map((workout) => (
                    <WorkoutListCard
                      key={workout.id}
                      workout={workout}
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-base-300 p-10 text-center">
                  <FaBookmark className="mx-auto mb-3 text-3xl text-base-content/30" />

                  <h3 className="font-semibold">
                    No saved workouts
                  </h3>

                  <p className="mt-1 text-sm text-base-content/60">
                    Save workouts here to access them later.
                  </p>
                </div>
              )}
            </div>

            {/* Sort By Dropdown */}
            <div className="ml-100 text-center">
              <select defaultValue="Sort by" className="select" value={sortBy} onChange={(e) => setSortBy(e.target.value as "duration" | "calories" | "rating")}>
                <option disabled={true}>Sort by</option>
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>

        </div>

      </div>
    </div>

  );
}

export default MyPlan
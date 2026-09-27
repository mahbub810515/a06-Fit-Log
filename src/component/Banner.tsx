import Image from "next/image"
import Link from "next/link"
import bannerImage from "@/assets/banner.png"

const Banner = () => {
    return (
        <section className="bg-slate-900 py-8 sm:py-12 lg:py-20">
            <div
                className="
                    container mx-auto
                    px-4 sm:px-6 lg:px-8
                "
            >
                <div
                    className="
                        flex flex-col
                        lg:flex-row
                        items-center
                        justify-between
                        gap-8 lg:gap-12
                        bg-slate-700
                        rounded-2xl
                        px-6 py-8
                        sm:px-8 sm:py-10
                        lg:px-12 lg:py-14
                    "
                >
                    {/* Content */}
                    <div className="w-full lg:w-1/2">
                        <h5 className="font-bold text-[11px] sm:text-xs text-lime-400">
                            WORKOUT LIBRARY
                        </h5>

                        <h1
                            className="
                                font-extrabold
                                text-3xl
                                sm:text-4xl
                                md:text-5xl
                                lg:text-6xl
                                leading-tight
                                text-white
                                my-4 sm:my-5
                            "
                        >
                            TRAIN WITH INTENT.
                            <br className="hidden sm:block" />
                            {" "}LOG EVERY SET.
                        </h1>

                        <p
                            className="
                                font-normal
                                text-sm
                                sm:text-base
                                leading-6
                                text-gray-300
                                max-w-xl
                            "
                        >
                            FitLog is a dark, no-nonsense gym companion:
                            pick a lift, lock it into today's plan, and
                            watch the week's work add up.
                        </p>

                        <Link
                            href="/workout"
                            className="
                                btn
                                bg-lime-400
                                hover:bg-lime-300
                                border-none
                                text-gray-900
                                font-bold
                                mt-5
                                w-full sm:w-auto
                            "
                        >
                            BROWSE WORKOUTS
                        </Link>
                    </div>

                    {/* Image */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <Image
                            src={bannerImage}
                            alt="Workout banner"
                            priority
                            className="
                                w-full
                                max-w-sm
                                sm:max-w-md
                                lg:max-w-lg
                                h-auto
                                object-contain
                            "
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner


import Image from "next/image"
import bannerImage from '@/assets/banner.png';


const Banner = () => {
    return (
        <div className="bg-slate-900 py-20">
            <div className="container mx-auto flex justify-between bg-slate-700 py-18 px-17 rounded-2xl">
                <div>
                    <h5 className="font-bold text-[11px] text-lime-400">WORKOUT LIBRARY</h5>
                    <h1 className="font-extrabold text-6xl text-white my-5">TRAIN WITH INTENT. LOG <br />EVERY SET.</h1>
                    <p className="font-normal text-[16px] text-gray-300">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today's plan, and watch the week's work add up.</p>
                    <button className="btn bg-lime-400 font-bold text-gray-900 mt-5">BROWSE WORKOUTS</button>
                </div>
                <div>
                    <Image src={bannerImage} alt="banner image" />
                </div>
            </div>
        </div>
    )
}

export default Banner
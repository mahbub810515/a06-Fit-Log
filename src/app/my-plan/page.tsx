import React from 'react'

const MyPlan = () => {
    return (
        <div className='container mx-auto p-4'>
            <div>
                <h1>MY PLAN</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nostrum.</p>
            </div>
            <div className='flex justify-between bg-slate-400 rounded-lg p-5'>
                <div>
                    <p>Minute</p>
                    <h1>30</h1>
                </div>
                <div>
                    <p>Calories</p>
                    <h1>160</h1>
                </div>
                <div>
                    <p>Excercise</p>
                    <h1>2</h1>
                </div>
            </div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box">
                <input type="radio" name="my_tabs_6" className="tab" aria-label="Tab 1" />
                <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

                <input type="radio" name="my_tabs_6" className="tab" aria-label="Tab 2" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>
                
            </div>
        </div>
    )
}

export default MyPlan
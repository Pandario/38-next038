import React from 'react'
import '@/public/assets/mainPage/nextBlock.css'

//type Props = {}

const NextBlock = () => {
  return (
    <section>
        {/*fixed part */}
        <div className="text-center p-20"> 
            <div className="text-6xl pb-8">Some text</div>
            <div className="text-3xl">
                <p className='pb-2'>More text about us</p>
                <p className='pb-2'>And even more text</p>
                <p className='pb-2'>And some more</p>
            </div>
        </div>
        {/*first moving part*/}
        <div className="text-center p-4">
            <div className="text-3xl" id='moving_part1'>Our benefits</div>
        </div>

        {/*left moving part*/}
        <div className="text-center flex flex-col items-center">
            <div className="text-2xl size-48 bg-slate-200 " id='moving_partleft'>Some text</div>
            <div className="text-2xl" id='moving_partleft'>Some more</div>
        </div>
        
        {/*right moving part*/}
        <div className="text-center flex flex-col items-center">
            <div className="text-2xl size-48 bg-slate-200 " id='moving_partleft'>Some text</div>
            <div className="text-2xl" id='moving_partleft'>Some more</div>
        </div>
        
    </section>
  )
}

export default NextBlock;
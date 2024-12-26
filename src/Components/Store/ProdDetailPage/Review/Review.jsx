import React from 'react'

const Review = ({review , isDarkModeClicked}) => {
    const timeAgo = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const timeDifference = now - date; // Time difference in milliseconds
    
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);
    
        const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
    
        if (seconds < 60) {
            return rtf.format(-seconds, 'second');
        } else if (minutes < 60) {
            return rtf.format(-minutes, 'minute');
        } else if (hours < 24) {
            return rtf.format(-hours, 'hour');
        } else if (days < 30) {
            return rtf.format(-days, 'day');
        } else if (months < 12) {
            return rtf.format(-months, 'month');
        } else {
            return rtf.format(-years, 'year');
        }
    };
    let stars=[];
    for (let i = 1; i <= review.rating; i++) {
        stars.push(<span key={i}><i className="fa-solid fa-star text-yellow-300 max-sm:text-[10px] "></i></span>); 
        }
  return (
    <>
        <div className='mx-auto my-10 max-sm:my-2'>
                    <div className={` border-2 
                        ${isDarkModeClicked ? 'border-white text-white' : 'border-black text-black' }
                        w-[300px] h-[200px] p-4 rounded-lg flex flex-col justify-evenly`}>
                        <div>
                        <h1 className='text-md'>{review.reviewerName} <span className='font-mono font-thin text-stone-500 text-sm'>{review.reviewerEmail}</span></h1>
                        <p className='font-mono font-thin text-stone-400 text-sm'>{timeAgo(review.date)}</p>
                        <div>{stars}</div>
                        </div>
                        <p className={` text-md min-h-4
                            ${isDarkModeClicked ? 'border-white': 'border-black '}
                            border-l-2 pl-2`}>{review.comment}</p>


                    </div>
        </div>
    </>
  )
}

export default Review

import React from 'react';

const CommentsCart = ({ comment }) => {
    const { commenter, post } = comment;
    return (
        <div className="chat ml-4 mb-5">
            <div className='flex gap-2 mb-[-15px]'>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png" alt=''/>
                </div>
            </div>
            <div className="chat-header">
               {commenter}
            </div>
            </div>
            <div className="ml-12 bg-slate-500 text-white w-96 px-4 py-3 rounded-br-xl rounded-tr-xl rounded-bl-xl">{post}</div>
        </div>

    );
};

export default CommentsCart;
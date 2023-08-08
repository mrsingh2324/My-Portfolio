import React from 'react';

const Button = () => {
    const handleHireClick = () => {
        window.location.href = 'tel:+919758051994';
    };

    return (
        <div>
            <button
                className="text-black hover:bg-transparent bg-yellow-500 hover:border-[3px] hover:border-yellow-500 hover:text-white border-[3px] rounded rounded-2xl text-xl font-bold text-bold p-4 px-10"
                onClick={handleHireClick}
            >
                Hire Me
            </button>
        </div>
    );
};

export default Button;

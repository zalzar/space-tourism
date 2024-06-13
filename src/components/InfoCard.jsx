import React from 'react';

const InfoCard = ({ title, description, image }) => {
    return (
        <div className="flex bg-darkBeige shadow-lg rounded-lg overflow-hidden mb-4">
            <img className="w-1/3 object-cover" src={image} alt={title} />
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-700 mb-4">{description}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">More</button>
            </div>
        </div>
    );
}

export default InfoCard;

import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className="center">
            <img src={imageUrl} alt="main-prediction-img" />
        </div>
    );
};

export default FaceRecognition;
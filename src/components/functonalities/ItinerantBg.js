import React from "react";

const effectBackgroundColor = () => {
    const updateBackground = (event) => {
        const { clientX, clientY } = event;
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        const mouseXPercentage = Math.round((clientX / screenWidth) * 100);
        const mouseYPercentage = Math.round((clientY / screenHeight) * 100);

        document.body.style.background = `radial-gradient(circle at ${mouseXPercentage}% ${mouseYPercentage}%, #447a37,#22501c)`;
    };

    window.addEventListener('mousemove', updateBackground);

    return () => {
        window.removeEventListener('mousemove', updateBackground);
    };
};

export default effectBackgroundColor;

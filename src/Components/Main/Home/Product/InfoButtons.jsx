import React, { useState } from 'react'

export default function InfoButtons() {
    const [activeButton, setActiveButton] = useState('description')

    const descriptionText = "Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw."

    const additionalInfoText = "A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch."

    const handleButtonClick = (button) => {
        setActiveButton(button)
    }

    return (
        <div className="modal__content__footer">
            <div className="modal__content__buttons">
                <button
                    className={activeButton === 'description' ? 'active' : 'non-active'}
                    onClick={() => handleButtonClick('description')}
                >
                    Product Description
                </button>
                <button
                    className={activeButton === 'additionalInfo' ? 'active' : 'non-active'}
                    onClick={() => handleButtonClick('additionalInfo')}
                >
                    Additional Info
                </button>
            </div>
            <div className="modal__content__text">
                {activeButton === 'description' ? descriptionText : additionalInfoText}
            </div>
        </div>
    )
}

import React from 'react'
import ThanksPage from './ThanksPage';

export default function OrderForm({ productsToBuy, totalCost, setIsOrderPlaced }) {
    const fields = [
        {
            classes: [
                'order-list__form__field',
                'name'
            ],
            label: 'Full Name*',
            name: 'name',
            type: 'text',
            placeholder: 'Your Name',
            required: true
        },
        {
            classes: [
                'order-list__form__field',
                'email'
            ],
            label: 'Your Email*',
            name: 'email',
            type: 'email',
            placeholder: 'Your Email Address',
            required: true
        },
        {
            classes: [
                'order-list__form__field',
                'address'
            ],
            label: 'Address*',
            name: 'address',
            type: 'text',
            placeholder: 'Your Company Address',
            required: true
        },
        {
            classes: [
                'order-list__form__field',
                'phone'
            ],
            label: 'Phone number*',
            name: 'phone',
            type: 'number',
            placeholder: 'Enter Your Phone',
            required: true
        },
        {
            classes: [
                'order-list__form__field',
                'extra'
            ],
            label: 'Message',
            name: 'extra',
            type: 'textarea',
            placeholder: 'Some Extra Information',
            required: false
        }
    ]

    async function showDataFromForm(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const userData = {}
        formData.forEach((value, name) => {
            userData[name] = value
        });

        const orderData = {
            products: productsToBuy.map(product => ({
                product: product.product,
                quantity: product.quantity,
            })),
            orderDate: new Date().toLocaleString(),
            totalCost: totalCost
        }

        try {
            await fetch('http://localhost:3333/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            })
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                })
                setIsOrderPlaced(true)
        } catch (error) {
            console.error('Error:', error)
        }
    }

    return (
        <div className="order-list__form">
            <form onSubmit={showDataFromForm}>
                {fields.map((field, index) => (
                    <div key={index} className={field.classes.join(' ')}>
                        <label htmlFor={field.name}>{field.label}</label>
                        <input type={field.type}
                            name={field.name}
                            id={field.name}
                            placeholder={field.placeholder}
                            required={field.required} />
                    </div>
                ))}
                <button type="submit">Confirm</button>
            </form>
        </div>
    )
}

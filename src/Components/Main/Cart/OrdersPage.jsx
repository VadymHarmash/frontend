import React, { useEffect, useState } from 'react'

export default function OrdersPage() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:3333/orders';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setOrders(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="ordered-products">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Ordered Products</th>
                        <th>Total Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index} className="order">
                            <td>{order.orderDate}</td>
                            <td>
                                {order.products.map((product, productIndex) => (
                                    <div key={productIndex} className="ordered-product">
                                        <p>Product: {product.product[0].name}</p>
                                        <p>Quantity: {product.quantity}</p>
                                    </div>
                                ))}
                            </td>
                            <td>${order.totalCost}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

import React from 'react'

export default function Form() {
    return (
        <div className="form">
            <div className="container">
                <div className="form__wrapper">
                    <h2>Subscribe to our Newsletter</h2>
                    <form>
                        <input type="email" placeholder='Your Email Address' />
                        <input type="submit" value="Subscribe" />
                    </form>
                </div>
            </div>
        </div>
    )
}

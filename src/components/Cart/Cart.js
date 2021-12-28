import React from 'react';

const Cart = (props) => {
    const cart = props.Cart

    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     const population = country.population;
    //     totalPopulation = population + totalPopulation;

    // }

    const totalPopulation = cart.reduce((sum, country) => sum + country.population, 0)
    return (
        <div>
            <h2>
                This is Cart: {cart.length}
                <p>totalPopulation: {totalPopulation}</p>
            </h2>
        </div>
    );
};

export default Cart;
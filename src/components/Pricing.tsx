import React from 'react';

const Pricing = () => {
    const plans = [
        {
            name: 'Starter',
            price: '$19/month',
            features: ['Feature 1', 'Feature 2', 'Feature 3']
        },
        {
            name: 'Growth',
            price: '$49/month',
            features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
        },
        {
            name: 'Premium',
            price: '$99/month',
            features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5']
        },
        {
            name: 'Enterprise',
            price: 'Contact us',
            features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5', 'Dedicated Support']
        }
    ];

    return (
        <div>
            <h1>Pricing Plans</h1>
            <div className="pricing-container">
                {plans.map((plan) => (
                    <div className="pricing-plan" key={plan.name}>
                        <h2>{plan.name}</h2>
                        <p>{plan.price}</p>
                        <ul>
                            {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
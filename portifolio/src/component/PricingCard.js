import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const PricingCard = () => {
    const [plans, setPlans] = useState([]);

    // Fetch pricing data
    useEffect(() => {
        const fetchPlans = async () => {
            const { data, error } = await supabase
                .from('pricing')
                .select('*');

            if (error) {
                console.error('Error fetching plans:', error);
            } else {
                setPlans(data);
            }
        };

        fetchPlans();
    }, []);

    return (
        <div className="flex flex-wrap justify-center gap-6">
            {plans.map((plan) => (
                <div
                    key={plan.id}
                    className="max-w-sm w-full p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl transition duration-300"
                >
                    <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <p className="text-4xl font-bold mb-6">${plan.price}</p>
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                        {plan.features.map((feature, index) => (
                            <li key={index} className="text-gray-700">
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Choose Plan
                    </button>
                </div>
            ))}
        </div>
    );
};

export default PricingCard;

import React from 'react';
import Chart from './Chart';

export default function DisplayCharts() {
    let itt = [1, 2, 3, 4, 5]
    return (
        <div>
            {
                itt.map(() => {
                    return <Chart />
                })
            }
        </div>
    );
}

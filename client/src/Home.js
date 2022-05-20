import React from 'react';
import AddChart from './AddChart';
import DisplayCharts from './DisplayCharts';

export default function Home() {
    return (
        <div>
            <p>Welcome, [NAME]!</p>
            <p>Here are your charts:</p>
            <AddChart />
            <DisplayCharts />
        </div>
    );
}

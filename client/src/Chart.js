import React from 'react';

export default function Chart() {
    return (
        <div className="card bg-light mb-3">
            <div className="card-header">Chart Name</div>

            <div className="card-body">
                <p className="card-text">Chart Description</p>
            </div>
                
            <div className="card-footer d-flex">
                <button>Open</button>
                <button>Delete</button>
            </div>
        </div>
    );
}

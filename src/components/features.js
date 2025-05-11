import React from "react";

function Features() {
    return (
        <section id="features" className="features">
            <h2> Key features</h2>
            <div className="features-grid" >
                <div className="feature-item">
                    <h3> Time Tracking</h3>
                    <p> Log hours and managage your time on every project.</p>
                </div>
                <div className="feature-item"> 
                    <h3> invoicing </h3>
                    <p> Generate and send invoices in seconds. </p>
                </div>
                <div className="feature-item"> 
                    <h3> Analytics </h3>
                    <p> Get insights on your income and productivity. </p>
                </div>
            </div>
        </section>

    );
}
export default Features;
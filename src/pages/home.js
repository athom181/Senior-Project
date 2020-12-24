import React, { useEffect, useState } from 'react';
import '../application.css';

  
const Home = () => {
	const [width, setWidth] = useState(window.innerWidth)
	useEffect(()=> {
		window.addEventListener('resize', ()=> setWidth(window.innerWidth))
	})
	return (
		<div className="container">
			<div className='flex-wrap flex-row d-flex justify-content-around align-items-stretch card mt-5 p-3'>
				<div className="col-12 col-md-10 text-center p-3">
					<h1>Water Utility Bill Calculator</h1>
					<h4>A basic breakdown of how your bill is calculated. For more information visit <a target="_blank" href="https://charlottenc.gov/Water/RatesBilling/Pages/CLTWRates.aspx">Charlotte Water</a>.</h4>				
					<h4>PDF Example</h4>
    					<p>Open a PDF file <a href="Files/sample.pdf">example</a>.</p>
				</div>
				<div>
					<h3>
						Residential Rates &amp; Fees
					</h3>
					<h4>Water Usage:</h4>
					<ul>
						<li>Tier 1 (1-4 Ccf ): $1.69/Ccf</li>
						<li>Tier 2 (5-8 Ccf): $2.18/Ccf</li>
						<li>Tier 3 (9-16 Ccf): $5.04/Ccf</li>
						<li>Tier 4 (Over 16 Ccf): $9.55/Ccf</li>
					</ul>

					<h4>Sewer Usage:</h4>
					<ul>
						<li>$5.19 Per Ccf of Water Used (up to 16 Ccf)</li>
					</ul>

					<h4>Fixed Fees</h4>
					<ul>
						<li>Water: $4.22/month</li>
						<li>Sewer: $4.22/month</li>
					</ul>

					<h4>Availability Fees</h4>
					<ul>
						<li>Water 5/8" Connection Size: $1.29/month</li>
						<li>Water 1" Connection Size: $3.22/month</li>
						<li>Sewer 5/8" Connection Size: 8.70/month</li>
						<li>Sewer 1" Connection Size: $21.76/month</li>
					</ul>

					<h4>Irrigation Meter Rates</h4>
					<ul>
						<li>Tier 1: (1-16 Ccf): $5.04</li>
						<li>Tier 2: (17+ CCf): $9.55</li>
					</ul>

					<h4>Storm Water Fees</h4>
					<ul>
						<li>Tier I:    Up to 1,999 square feet of impervious surface, $7.57 per month </li>
						<li>Tier II:   2,000 to 2,999 square feet of impervious surface, $10.77 per month  </li>
						<li>Tier III:  3,000 to 4,999 square feet of impervious surface, $15.44 per month</li>
						<li>Tier IV:  5,000 square feet or more, $25.02 per month </li>
					</ul>

				</div>
				<div>
					<h3>
						Commercial Rates &amp; Fees
					</h3>
					<h4>Water and Sewer Usage:</h4>
					<ul>
						<li>Water Charge per Ccf: $2.92</li>
						<li>Sewer Charge per Ccf: $5.19</li>
					</ul>

					<h4>Fixed Fees</h4>
					<ul>
						<li>Water: $4.22/month</li>
						<li>Sewer: $4.22/month</li>
					</ul>

					<h4>Water Availability Fees</h4>
					<ul>
						<li>Water 3/4" and 5/8" Connection Size: $1.29/month</li>
						<li>Water 1" Connection Size: $3.22/month</li>
						<li>Water 1 1/2" Connection Size: $6.45/month</li>
						<li>Water 2" Connection Size: $10.32/month</li>
						<li>Water 3" Connection Size: $21.28/month</li>
						<li>Water 4" Connection Size: $35.03/month</li>
						<li>Water 6" Connection Size: $70.92/month</li>
						<li>Water 8" Connection Size: $141.84/month</li>
						<li>Water 10" Connection Size: $270.76/month</li>
						<li>Water 12" Connection Size: $341.70/month</li>
					</ul>

					<h4>Sewer Availability Fees</h4>
					<ul>
						<li>Sewer 3/4" and 5/8" Connection Size: 8.70/month</li>
						<li>Sewer 1" Connection Size: $21.76/month</li>
						<li>Sewer 1 1/2" Connection Size: $43.52/month</li>
						<li>Sewer 2" Connection Size: $69.63/month</li>
						<li>Sewer 3" Connection Size: $143.61/month</li>
						<li>Sewer 4" Connection Size: $236.45/month</li>
						<li>Sewer 6" Connection Size: $478.70/month</li>
						<li>Sewer 8" Connection Size: $957.40/month</li>
						<li>Sewer 10" Connection Size: $1,828.00/month</li>
						<li>Sewer 12" Connection Size: $2,306.00/month</li>
					</ul>

					
					<h4>Irrigation Meter Rates</h4>
					<ul>
						<li>Tier 1: (1-16 Ccf): $5.04</li>
						<li>Tier 2: (17+ CCf): $9.55</li>
					</ul>

				</div>
				

				<iframe width={width > 600 ? "560" : "360"} height={width > 600 ? "315" : "210"} src="https://www.youtube.com/embed/mnEAcCMa9ZM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
			<h4>NOTE: The fixed and availability are monthly charges based on your days of service. The calculator is made to calculate for 30 days of service any thing
				over or under 30 days will changed the price of those two fees by a little.
			</h4>

		</div>
	);
}

export default Home;

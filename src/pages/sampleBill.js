import React, { useState } from "react";
import Button from './components/button.js';
import SampleBill from '../sample.pdf'
import {
	FirstCard,
	CommercialRates,
	ResidentialRates,
} from "./sections/router.js";

const Rates = (props) => {
	const download = () => SampleBill
	return (
		<div className="container flex-wrap flex-row d-flex justify-content-center align-items-center vh-100">
			<div className="col-12 col-md-8 m-5">
				<div className="card">
					<a href={SampleBill} target="_blank">
						<embed src={SampleBill} height="955px" width="100%" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Rates;

import React from 'react';
import Hero from './Hero';
import OpenAccount from "../OpenAccount";
import ChargesTable from "./ChargesTable";
import AccountCharges from "./AccountCharges";

function PricingPage() {
    return ( 
        <>
            <Hero/>
            <OpenAccount/>
            <ChargesTable/>
            <AccountCharges/>
        </>
     );
}

export default PricingPage;
import { mount } from 'marketing/MarketingIndex';
import React, { useEffect, useRef } from 'react';

const MarketingApp = () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    }, [])

    return(
        <div ref={ref}></div>
    )
}

export default MarketingApp;
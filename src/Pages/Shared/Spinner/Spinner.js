import React, { useEffect, useState } from 'react';
import { BounceLoader } from 'react-spinners';

const Spinner = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 8000);
    }, []);
    return (
        <div style={{textAlign: 'center'}}>
            <BounceLoader size={50} color={"#FB2E86"} loading={loading} speedMultiplier={1} />
        </div>
    );
};

export default Spinner;
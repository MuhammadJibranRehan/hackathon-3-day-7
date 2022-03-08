import React, { useEffect, useState } from 'react';
import HashLoader from "react-spinners/HashLoader";

const Spinner = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 8000);
    }, []);
    return (
        <div>
            <HashLoader size={150} color={"#FB2E86"} loading={loading} speedMultiplier={1} />

        </div>
    );
};

export default Spinner;
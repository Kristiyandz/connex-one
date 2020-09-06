import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

export const useInitialData = () => {
    const [currentServerTime, setCurrentServerTime] = useState<AxiosResponse | null>(null);
    const [apiMetrics, setApiMetrics] = useState<AxiosResponse | string>('');
    const [hasError, setHasError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                headers: {
                    "Authorization": "mysecrettoken"
                }
            };
            try {
                const time = await (await axios.get('http://localhost:3000/time', options)).data;
                const metrics = await (await axios.get('http://localhost:3000/metrics', options)).data;


                setCurrentServerTime(time);
                setApiMetrics(metrics);
            } catch (error) {
                console.log(error);
                setHasError(true);
            }
        };
        fetchData();
    }, []);

    return [currentServerTime, apiMetrics, hasError];
};
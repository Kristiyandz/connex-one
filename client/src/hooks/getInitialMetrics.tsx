import { useState, useEffect } from "react";
import axios from "axios";

export const useMetrics = (): [string | null, boolean, boolean] => {

    const [apiMetrics, setApiMetrics] = useState<string | null>(null);
    const [hasMetricsError, setHasMetricsError] = useState<boolean>(false);
    const [isMetricsLoading, setIsMetricsLoading] = useState<boolean>(false);
    const [hasLoaded, setHasLoaded] = useState<boolean>(false);

    const fetchData = async () => {
        const options = {
            headers: {
                "Authorization": "mysecrettoken"
            }
        };
        try {
            setIsMetricsLoading(true);
            const metrics = await (await axios.get('http://localhost:3000/metrics', options)).data;

            setApiMetrics(metrics);
            setIsMetricsLoading(false);
            setHasLoaded(true);
        } catch (error) {
            console.log(error);
            setHasMetricsError(true);
            setIsMetricsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            fetchData()
        }, 30000)
        return () => clearInterval(interval);
    }, [hasLoaded])

    return [apiMetrics, hasMetricsError, isMetricsLoading];
};
import React, {FC, useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

interface TimeResponse {
    properties: {
        epoch: {
            description: string;
            type: string;
        }
    },
    required: Array<string>,
    type: string;
}

export const useInitialData = (): [TimeResponse, string | null, boolean, boolean] => {
    const [currentServerTime, setCurrentServerTime] = useState<TimeResponse>({
        properties: {
            epoch: {
                description: "",
                type: "",
            }
        },
        required: [""],
        type: "",
    });
    const [apiMetrics, setApiMetrics] = useState<string | null>(null);
    const [hasError, setHasError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                headers: {
                    "Authorization": "mysecrettoken"
                }
            };
            try {
                setIsLoading(true);
                const time = await (await axios.get('http://localhost:3000/time', options)).data;
                const metrics = await (await axios.get('http://localhost:3000/metrics', options)).data;

                setCurrentServerTime(time);
                setApiMetrics(metrics);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setHasError(true);
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    return [currentServerTime, apiMetrics, hasError, isLoading];
};
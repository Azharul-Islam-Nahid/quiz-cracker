import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
const Statistics = () => {
    const { data } = useLoaderData();
    const userDatas = data;
    return (
        <div className='container-fluid mt-5'>
            <h2 className='text-center'>Quiz statistics</h2>

            <ResponsiveContainer width="100%" height={300} className='mt-5'>
                <BarChart
                    width={500}
                    height={300}
                    data={userDatas}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>


        </div>
    );
};

export default Statistics;
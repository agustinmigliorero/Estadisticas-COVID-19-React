import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2'

import styles from './Chart.module.css'

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    }, []);


    const lineChart = (
        dailyData[0]
         ? (
         <Line 
            data={{
              labels: dailyData.map(({ date }) => date),
              datasets: [{
                  data: dailyData.map(({ confirmed }) => confirmed),
                  label: 'Infectados',
                  borderColor: '#3333ff',
                  fill: true
              },
                 {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Muertos',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,  
            },],
        }}
        />
        ) : null
    );

    const barChart = (
        confirmed
        ? (
            <Bar 
                data={{
                    labels: ['Infectados', 'Recuperados', 'Muertos' ],
                    datasets: [{
                        label: 'Personas',
                        backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                        data: [confirmed.value, recovered.value, deaths.value ]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Estado actual en ${country ? country : "el Mundo"}` }
                }}
            />
        ) : null
    )
    
    const isMobile = window.innerWidth <= 800;

    if (isMobile) {
        return (
        <div className={styles.container}>
            {country ? barChart : barChart}
        </div>
        )
    } else {
        return (
            <div className={styles.container}>
                {country ? barChart : lineChart}
            </div>
        )
    }

}

export default Chart;
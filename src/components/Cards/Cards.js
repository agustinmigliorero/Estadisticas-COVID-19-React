import React, { Component } from 'react'
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import CountUp from 'react-countup'
import cx from 'classnames'

import styles from './Cards.module.css'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...';
    }

    let RatioMortalidad = () => {
        let n1 = confirmed.value - deaths.value;
        let n2 = n1 / confirmed.value;
        let n3 = n2 - 1;
        let Resultado = -(n3) * 100
        console.log(Resultado * 100)
        return Resultado;
    }
    
    
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infectados</Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={confirmed.value}
                                duration={2.3}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</Typography>
                        <Typography variant="body2">Numero de casos confirmados por COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recuperados</Typography>
                        <Typography variant="h5">                            
                            <CountUp 
                                start={0}
                                end={recovered.value}
                                duration={2.3}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</Typography>
                        <Typography variant="body2">Numero de recuperados de COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Muertos</Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={deaths.value}
                                duration={2.3}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</Typography>
                        <Typography variant="body2">Numero de muertes causadas por COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.indicemortalidad)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Indice de Mortalidad</Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={RatioMortalidad()}
                                duration={2.3}
                                separator=","
                                decimals={2}
                            />%
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</Typography>
                        <Typography variant="body2">Indice de Mortalidad por COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
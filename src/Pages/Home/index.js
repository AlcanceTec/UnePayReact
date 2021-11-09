import React from 'react';
import Calendar from 'react-calendar';
import {Bar} from 'react-chartjs-2';

import C from './style';
import Menu from '../../components/Menu';

import 'react-calendar/dist/Calendar.css';

const data = {
    labels: ['Veículo 1', 'Veículo 2', 'Veículo 3', 'Veículo 4'],
    datasets: [
        {
            label: 'Veículos',
            data:[25, 50, 41, 10],
            backgroundColor: [
                '#000',
            ],
        },
    ],    
}

const fuel= {
    labels: ['Dia 1', 'Dia 2', 'Dia 3', 'Dia 4', 'Dia 5', 'Dia 6'],
    datasets: [
        {
            label: 'Veículos',
            data:[25, 50, 15, 74, 60, 2],
            backgroundColor: [
                '#000',
            ],
        },
    ],    
}

function Home() {
    return (
        <C.Container>
            <Menu/>
            <C.Content>
                <C.Header>
                    <C.FilterText>
                        Filtro
                    </C.FilterText>
                    <C.Profile>
                        <C.ProfileName>Olá Fulano</C.ProfileName>
                        <C.ProfilePhoto></C.ProfilePhoto>
                    </C.Profile>
                </C.Header>
                <C.Filter>
                    <C.ItemFilter>
                        De<br/>
                        <C.Input placeholder="Quando?" type="date" />
                    </C.ItemFilter>
                    <C.ItemFilter>
                        Até<br/>
                        <C.Input placeholder="Quando?" type="date"/>
                        </C.ItemFilter>
                    <C.ItemFilter>
                        Motorista
                        <C.Select placeholder="Selecione">
                            <C.Option>Selecione</C.Option>
                        </C.Select>
                    </C.ItemFilter>
                    <C.ItemFilter>
                        Veículo
                        <C.Select>
                            <C.Option>Selecione</C.Option>
                        </C.Select>
                    </C.ItemFilter>
                    <C.ItemFilter>
                        Combustivel
                        <C.Select>
                            <C.Option>Selecione</C.Option>
                            <C.Option>Etanol</C.Option>
                            <C.Option>Gasolina</C.Option>
                        </C.Select>                        
                    </C.ItemFilter>
                    <C.ApplyButton>
                        Aplicar
                    </C.ApplyButton>
                </C.Filter>
                <C.Chart>
                    <Bar
                        data={data}
                        width={100}
                        height={100}
                        options={{ 
                            maintainAspectRatio: false,
                        }}
                    />
                </C.Chart>
                <C.ChartMini>
                    <C.ChartMiniText>Totalização de combustivel por litro</C.ChartMiniText>
                    <C.ChartMiniItem>
                        <C.ChartMiniIcon></C.ChartMiniIcon>
                        <C.ChartMiniList>Etanol</C.ChartMiniList>
                    </C.ChartMiniItem>
                    <C.ChartMiniGroup>
                        <C.ChartMiniTitle>50,5</C.ChartMiniTitle>
                        <C.ChartMiniProgress></C.ChartMiniProgress>
                    </C.ChartMiniGroup>
                    <C.ChartMiniItem>
                        <C.ChartMiniIcon></C.ChartMiniIcon>
                        <C.ChartMiniList>Etanol</C.ChartMiniList>
                    </C.ChartMiniItem>
                    <C.ChartMiniGroup>
                        <C.ChartMiniTitle>50,5</C.ChartMiniTitle>
                        <C.ChartMiniProgress></C.ChartMiniProgress>
                    </C.ChartMiniGroup>
                </C.ChartMini>
                <C.Chart>
                    <Bar
                        data={fuel}
                        width={100}
                        height={100}
                        options={{ 
                            maintainAspectRatio: false,
                        }}
                    />
                </C.Chart>
                <C.ChartMinis>
                    <C.ChartMinisText>Quantidade de abastecidas por motoristas</C.ChartMinisText>
                    <C.ChartMinisItem>
                        <C.ChartMinisIcon></C.ChartMinisIcon>
                        <C.ChartMinisList>Motorista 1 - 15 Abastecidas</C.ChartMinisList>
                    </C.ChartMinisItem>
                    <C.ChartMinisItem>
                        <C.ChartMinisIcon></C.ChartMinisIcon>
                        <C.ChartMinisList>Motorista 1 - 15 Abastecidas</C.ChartMinisList>
                    </C.ChartMinisItem>
                    <C.ChartMinisItem>
                        <C.ChartMinisIcon></C.ChartMinisIcon>
                        <C.ChartMinisList>Motorista 1 - 15 Abastecidas</C.ChartMinisList>
                    </C.ChartMinisItem>
                    <C.ChartMinisItem>
                        <C.ChartMinisIcon></C.ChartMinisIcon>
                        <C.ChartMinisList>Motorista 1 - 15 Abastecidas</C.ChartMinisList>
                    </C.ChartMinisItem>
                    <C.ChartMinisItem>
                        <C.ChartMinisIcon></C.ChartMinisIcon>
                        <C.ChartMinisList>Motorista 1 - 15 Abastecidas</C.ChartMinisList>
                    </C.ChartMinisItem>
                    <C.ChartMinisItem>
                        <C.ChartMinisIcon></C.ChartMinisIcon>
                        <C.ChartMinisList>Motorista 1 - 15 Abastecidas</C.ChartMinisList>
                    </C.ChartMinisItem>
                </C.ChartMinis>
            </C.Content>
        </C.Container>
    );
}

export default Home;
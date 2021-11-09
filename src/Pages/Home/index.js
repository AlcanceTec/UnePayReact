import React from 'react';
import Calendar from 'react-calendar';
import { Doughnut, Bar } from 'react-chartjs-2';

import C from './style';
import Menu from '../../components/Menu';

import 'react-calendar/dist/Calendar.css';

const data = {
    labels: ['Veículo 1', 'Veículo 2', 'Veículo 3', 'Veículo 4'],
    datasets: [
        {
            label: 'Veículo 1',
            data:[25],
            backgroundColor: [
                '#000',
            ],
        },
        {
            label: 'Veículo 2',
            data:[50],
            backgroundColor: [
                '#BC3A3A',
            ]
        },
    ]
}

function Home() {
    return (
        <C.Container>
            <Menu/>
            <C.Content>
                <C.FilterText>
                    Filtro
                </C.FilterText>
                <C.Profile>
                    <C.ProfileName>Olá Fulano</C.ProfileName>
                    <C.ProfilePhoto></C.ProfilePhoto>
                </C.Profile>
                <C.Filter>
                    <C.ItemFilter>
                        De
                        <C.Input placeholder="Quando?" />
                    </C.ItemFilter>
                    <C.ItemFilter>
                        Até
                        <C.Input placeholder="Quando?"/>
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
                        </C.Select>                        
                    </C.ItemFilter>
                    <C.ApplyButton>
                        Aplicar
                    </C.ApplyButton>
                </C.Filter>
                <C.Chart>
                    <Bar
                        data={data}
                        width={1}
                        height={1}
                        options={{ 
                            maintainAspectRatio: false,
                        }}
                    />
                </C.Chart>
                <C.ChartMini>

                </C.ChartMini>
                <C.Chart>

                </C.Chart>
                <C.ChartMinis>
                    
                </C.ChartMinis>
            </C.Content>
        </C.Container>
    );
}

export default Home;
import React from 'react';
import Calendar from 'react-calendar';

import C from './style';
import Menu from '../../components/Menu';

import 'react-calendar/dist/Calendar.css';

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
            </C.Content>
        </C.Container>
    );
}

export default Home;
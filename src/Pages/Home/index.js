import React from 'react';

import C from './style';
import Menu from '../../components/Menu';

function Home() {
    return (
        <C.Container>
            <Menu/>
            <C.Content>
                <C.Filter>
                    <C.ItemFilter>
                        De
                    </C.ItemFilter>
                    <C.ItemFilter>
                        Até
                    </C.ItemFilter>
                    <C.ItemFilter>
                        Motorista
                    </C.ItemFilter>
                    <C.ItemFilter>
                        Combustivel
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
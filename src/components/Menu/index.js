import React, {useState} from 'react';
import { ThemeProvider } from 'styled-components';
import C from './style';

export default(props) => {

    const [open, setOpen] = useState(true);
    const [width, setWidth] = useState("200px");
    const [effect, setEffect] = useState("");

    const MenuToggle = () => {
        
        if (open === true) {
            setOpen(false);
            console.log(width);
            setWidth("150px");
            setEffect("ease-in-out 0.3s");
        } else {
            setOpen(true);
            console.log(width);
            setWidth("200px");
            setEffect("ease-in-out 0.3s");
        }
    }

    return (
            <C.menuArea>
                <C.Menu width={width} effect={effect}>
                    <C.item>
                        <C.itemPhoto>
                            
                        </C.itemPhoto>
                        <C.itemText>
                            <C.links>Home</C.links>
                        </C.itemText>
                    </C.item>
                    <C.Button onClick={MenuToggle}></C.Button>
                </C.Menu>
            </C.menuArea>
    )
}

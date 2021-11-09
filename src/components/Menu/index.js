import React, {useState} from 'react';
import { ThemeProvider } from 'styled-components';
import C from './style';

export default() => {

    const [open, setOpen] = useState(true);
    const [width, setWidth] = useState("200px");
    const [effect, setEffect] = useState("");
    const [links, setLinks] = useState("flex");
    const [logo, setLogo] = useState("48px");
    const [rotate1, setRotate1] = useState("rotate(-45deg)");
    const [rotate2, setRotate2] = useState("rotate(45deg)");
    const [button, setButton] = useState("165px");
    const [efect, setEFect] = useState("");

    const MenuToggle = () => {
        
        if (open === true) {
            setOpen(false);
            console.log(width);
            setWidth("120px");
            setEffect("ease-in-out 0.3s");
            setEFect("0.2s linear");
            setLinks("none");
            setLogo("4px");
            setRotate1("rotate(45deg)");
            setRotate2("rotate(-45deg)");
            setButton("85px");
        } else {
            setOpen(true);
            console.log(width);
            setWidth("200px");
            setEffect("ease-in-out 0.3s");
            const timer = setTimeout(() =>{
                setLinks("flex");
            }, 300);
            setLogo("48px");
            setRotate1("rotate(-45deg)");
            setRotate2("rotate(45deg)");
            setButton("165px");
        }
    }

    return (
            <C.menuArea>
                <C.Menu width={width} effect={effect}>
                    <C.menuLogo logo={logo} effect={effect}>Logo</C.menuLogo>
                    <C.item>
                        <C.itemPhoto></C.itemPhoto>
                        <C.itemText links={links}>
                            <C.links>Home</C.links>
                        </C.itemText>
                    </C.item>
                    <C.item>
                        <C.itemPhoto></C.itemPhoto>
                        <C.itemText links={links} effect={effect}>
                            <C.links>Home</C.links>
                        </C.itemText>
                    </C.item>
                    <C.item>
                        <C.itemPhoto></C.itemPhoto>
                        <C.itemText links={links} effect={effect}>
                            <C.links>Home</C.links>
                        </C.itemText>
                    </C.item>
                    <C.item>
                        <C.itemPhoto></C.itemPhoto>
                        <C.itemText links={links} effect={effect}>
                            <C.links>Home</C.links>
                        </C.itemText>
                    </C.item>
                    <C.Button onClick={MenuToggle} button={button} efect={efect} >
                        <C.iconButton1 rotate1={rotate1} ></C.iconButton1>
                        <C.iconButton2 rotate2={rotate2}></C.iconButton2>
                    </C.Button>
                    <C.item>
                        <C.itemPhoto></C.itemPhoto>
                        <C.itemText links={links} effect={effect}>
                            <C.links>Home</C.links>
                        </C.itemText>
                    </C.item>
                    <C.item>
                        <C.itemPhoto></C.itemPhoto>
                        <C.itemText links={links} effect={effect}>
                            <C.links>Home</C.links>
                        </C.itemText>
                    </C.item>
                    <C.item>
                        <C.itemPhoto></C.itemPhoto>
                        <C.itemText links={links} effect={effect}>
                            <C.links>Home</C.links>
                        </C.itemText>
                    </C.item>
                    <C.item>
                        <C.itemPhoto></C.itemPhoto>
                        <C.itemText links={links} effect={effect}>
                            <C.links>Home</C.links>
                        </C.itemText>
                    </C.item>
                </C.Menu>
            </C.menuArea>
    )
}

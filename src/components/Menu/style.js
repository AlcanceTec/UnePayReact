import styled from 'styled-components';

export default {
    
    menuArea: styled.div`
        width: 400px;
        height: 1420px;
        left: 0;
        top: 0;
        border-radius: 0 20px 10px 0;
        display: flex;
        flex-direction: column;
        z-index: 999;
    `,

    Menu: styled.div`
        background-color: #C4C4C4;
        width: ${(props) => props.width};
        height: 1420px;
        left: 0;
        top: 0;
        border-radius: 0 20px 10px 0;
        display: flex;
        flex-direction: column;
        transition: ${(props) => props.effect};
    `,

    menuLogo: styled.div`
        width: 112px;
        height: 65px;
        background-color: #AEAEAE;
        margin-top: 49px;
        margin-left: ${(props => props.logo)};
        transition: ${(props) => props.effect};
        text-align: center;
        
    `,


    Button: styled.button`
        width: 70px;
        height: 70px;
        background-color: #AEAEAE;
        border: none;
        border-radius: 50%;
        margin: -5px 0 -50px 0;
        margin-left: ${(props) => props.button};
        display: flex;
        flex-direction: column;
        transition: ${(props) => props.efect};
    `,

    iconButton1: styled.div`
        height: 3px;
        width: 25px;
        background-color: #000;
        margin: 23px 0 0 15px;
        transform: ${(props) => props.rotate1};
    `,
    
    iconButton2: styled.div`
        height: 3px;
        width: 25px;
        background-color: #000;
        margin: 14px 0 0 15px;
        transform: ${(props) => props.rotate2};
    `,

    item: styled.div`
        width: ${(props) => props.width};
        height: 50px;
        display: flex;
        margin-top: 30px;

        &:hover {
            background-color: #9C9A9A;
        }
    `,

    itemText: styled.div`
        width: 100px;
        height: 50px;
        display: ${(props) => props.links};
    `,

    itemPhoto: styled.div`
        width: 40px;
        height: 40px;
        background-color: #AEAEAE;
        border-radius: 50%;
        margin: 5px 0 5px 45px;
    `,

    links: styled.a`
        font-size: 20px;
        line-height: 23px;
        position: relative;
        text-align: center;
        margin: auto;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
    `





}









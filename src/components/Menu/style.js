import styled from 'styled-components';

export default {
    Container: styled.div`
        background-color: #C4C4C4;
        width: 200px;
        height: 1420px;
        left: 0;
        top: 0;
        border-radius: 0 20px 10px 0;
        display: flex;
        flex-direction: column;
    `,

    Logo: styled.div`
        width: 112px;
        height: 65px;
        margin-top: 49px;
        margin-left: 48px;
        background-color: #AEAEAE;
    `,

    itens: styled.div`
        width: 200px;
        height: 50px;
        background-color: #9c9a9a;
        margin-top: 50px;
        display: flex;
        align-items: center;
        text-align: top;
    `,

    itensPhoto: styled.div`
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #AEAEAE;
        margin-left: 30px;
        
    `,

    itensText: styled.a`
        text-align: center;
        padding-left: 15px;
        text-decoration: none;
        color: #000;
    `,

    itensExit: styled.div`
        width: 200px;
        height: 50px;
        background-color: #9c9a9a;
        margin-top: 450px;
        align-items: center;
        text-align: top;
        display: flex;
    `
    



};
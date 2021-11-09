import styled from 'styled-components';

export default {
    
    menuArea: styled.div`
        width: 200px;
        height: 1420px;
        left: 0;
        top: 0;
        border-radius: 0 20px 10px 0;
        display: flex;
        flex-direction: column;
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


    Button: styled.button`
        width: 70px;
        height: 70px;
        background-color: #AEAEAE;
        border: none;
        border-radius: 50%;
    `,

    item: styled.div`
        width: 200px;
        height: 50px;
        background-color: #9C9A9A;
        display: flex;
    `,

    itemText: styled.div`
        width: 100px;
        height: 50px;
        text-align: center;
        align-items: center;
    `,

    itemPhoto: styled.div`
        width: 40px;
        height: 40px;
        background-color: #AEAEAE;
        border-radius: 50%;
        margin: 5px 0 5px 45px;
    `,

    links: styled.a`
        font-size: 15px;
        font-weight: bold;
        position: relative;
    `



}









import styled from 'styled-components';

export default {
    Container: styled.div`
        background-color: #F3F3F3;
        width: 1440px;
        height: 1420px;
        margin: auto;
        display: flex;
    `,
    Content: styled.div`

    `,
    Filter: styled.div`
        background-color: #C4C4C4;
        width: 900px;
        height: 100px;
        margin-top: 101px;
        margin-left: 50px;
        border-radius: 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    `,
    ApplyButton: styled.button`
        width: 82px;
        height:82px;
        background-color: #AEAEAE;
        border-radius: 50%;
        margin: 9px 17px 9px 0;
        border: none;
    `,
    ItemFilter: styled.div`
        width: 160px;
        height: 80px;
        border-right: 1px solid #9D9D9D;
        text-align: left;
        margin: 0 20px 0 0;

        &:nth-child(4) {
            border-right: 0;
        }
    `
}
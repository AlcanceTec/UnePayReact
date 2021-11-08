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
        width: 145px;
        height: 80px;
        border-right: 1px solid #9D9D9D;
        text-align: left;
        margin: 0 5px 0 0;

        &:nth-child(5) {
            border-right: 0;
        }
    `,
    Select: styled.select`
        width: 110px;
        background-color: transparent;
        border: none;
    `,
    Input: styled.input`
        background-color: transparent;
        border: none;
    `,
    Option: styled.option`
        
    `,

    FilterText: styled.div`
        position: absolute;
        top: 62px;
        left: 850px;
        color: #000;
        font-family: Roboto;
    `,

    Profile: styled.div`
        position: absolute;
        display: flex;
        top: 62px;
        right: 600px;
        align-items: center;
    `,

    ProfileName: styled.text`
        color: #000;
        font-size: 22px;
        font-family: Roboto;
        font-weight: 400;
    `,

    ProfilePhoto: styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #AEAEAE;
    margin-left: 10px;
    
`,
}
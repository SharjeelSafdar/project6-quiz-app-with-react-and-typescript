import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 20px;
    background: rgba(0, 0, 0, 0.3);
    color: white;
    border: solid medium #87f1ff;
    border-radius: 10px;
    margin: 10px auto 50px;
    width: 500px;
    max-width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    div:first-of-type {
        justify-content: center;
    }

    button {
        display: block;
        cursor: pointer;
        user-select: none;
        background: linear-gradient(180deg, #fff, #ffcc91);
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25); 
        border-radius: 10px;
        height: 40px;
        margin: 25px auto 10px;
        padding: 0 40px;
        transition: opacity 0.3s ease;
        :hover {
            opacity: 0.8;
        }
    }
`;
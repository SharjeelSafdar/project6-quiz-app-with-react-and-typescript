import styled from 'styled-components';

export const StyledWrapper = styled.div`
    padding: 20px;
    background: rgba(0, 0, 0, 0.3);
    color: white;
    border: solid medium #87f1ff;
    border-radius: 10px;
    margin: 10px auto 50px;
    width: 500px;
    max-width: 90vw;

    label {
        display: block;
        margin: 10px 0 0;
    }
    select {
        display: block;
        width: 100%;
        margin: 0 0 10px;
        background: rgba(0, 0, 0, 0.2);
        border: none;
        border-bottom: thin solid black;
        color: white;
    }
    option {
        color: black;
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
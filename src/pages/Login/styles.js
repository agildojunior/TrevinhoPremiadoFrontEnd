import styled from 'styled-components';

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #e6e6e6;
`;

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 7px;
    padding: 30px 40px 40px 40px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); 
    gap: 5px;
`;

export const H1 = styled.h1`
    padding: 0;
    margin: 0;
    font-weight: 500;
    font-size: 2.3em;
    color: #123647; 
`;

export const P = styled.p`
    display: inline-block;
    font-size: 14px;
    color: #666;
    margin-bottom: 25px;
`;

export const Label = styled.label`
    font-size: 14px;
    font-weight: 600;
    color: #123647;
`;

export const Input = styled.input`
    padding: 15px;
    font-size: 14px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    margin-top: 5px;
    border-radius: 4px;
    transition: all linear 160ms;
    outline: none;

    &:focus {
        border: 1px solid #123647;
    }
`;

export const Anchor = styled.a`
    display: inline-block;
    margin-bottom: 20px;
    font-size: 13px;
    color: #555;
    transition: all linear 160ms;

    &:hover {
        color: #123647; 
    }
`;

export const Button = styled.button`
    background-color: #123647; 
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    border: none !important;
    transition: all linear 160ms;
    cursor: pointer;
    margin: 0 !important;
    padding: 15px; 
    border-radius: 4px;

    &:hover {
        transform: scale(1.05);
    }
`;

export const LogoImage = styled.img`
    width: 100px;
    height: auto;
    align-self: center;
`;
import styled from "styled-components";

export const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 10px;
`;

export const Button = styled.button`
    background-color: ${({theme}) => theme.colors.teal};
    color: ${({theme}) => theme.colors.white};
    border: none;
    border-radius: 5px;
    padding: 10px;

    transition: 0.3s;

    &:hover {
        filter: brightness(105%);
        transform: scale(1.2);

            @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
                transform: none;
            }
    };

    &:active {
        filter: brightness(110%);
}
`;

export const Input = styled.input`
    padding: 10px;
    border-radius: 5px;
    border: none;
`;
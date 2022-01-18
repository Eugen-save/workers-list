import styled from "styled-components";

export const SectionWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 50px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
                grid-template-columns: auto;
                gap: 25px;
            }
`;
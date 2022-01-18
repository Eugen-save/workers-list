import styled from "styled-components";

export const Table = styled.table`
    border: 5px solid ${({theme}) => theme.colors.white};
    border-radius: 5px;
    padding: 10px;
    border-collapse: collapse;
`;

export const TableHeader = styled.th`
    border: 3px solid ${({theme}) => theme.colors.white};
    padding: 10px;
`;

export const TableRow = styled.tr`
    
`;

export const TableCell = styled.td`
    text-align: center;
    border: 3px solid ${({theme}) => theme.colors.white};
`;

export const CellText = styled.p`
    padding: 10px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        font-size: smaller;
        display: flex;
    }
`;
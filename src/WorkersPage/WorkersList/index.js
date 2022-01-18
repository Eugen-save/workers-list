import { useEffect, useState } from "react";
import { CellText, Table, TableCell, TableHeader, TableRow } from "./styled";

export const WorkersList = ({
    workersFirstName,
    workersSecondName,
    workersDepartment,
    workersSalary
}) => {
    const breakpoint = 767;
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
          window.removeEventListener("resize", handleResizeWindow);
        };
      }, []);

    return (
        <Table>
        <TableRow>
            <TableHeader>First Name</TableHeader>
            <TableHeader>Second Name</TableHeader>
            <TableHeader>{width<breakpoint ? "Dept." : "Department"}</TableHeader>
            <TableHeader>Salary</TableHeader>
        </TableRow>
        <TableRow>
            <TableCell>
                {workersFirstName.map(workerFirstName => (
                    <CellText
                        key={workerFirstName.id}
                    >
                        {workerFirstName.content}
                    </CellText>
                ))}
            </TableCell>
            <TableCell>
                {workersSecondName.map(workerSecondName => (
                    <CellText
                        key={workerSecondName.id}
                    >
                        {workerSecondName.content}
                    </CellText>
                ))}
            </TableCell>
            <TableCell>
                {workersDepartment.map(workerDepartment => (
                    <CellText
                        key={workerDepartment.id}
                    >
                        {workerDepartment.content}
                    </CellText>
                ))}
            </TableCell>
            <TableCell>
                {workersSalary.map(workerSalary => (
                    <CellText
                        key={workerSalary.id}
                    >
                        {workerSalary.content}
                    </CellText>
                ))}
            </TableCell>
        </TableRow>
    </Table>
    )
}
    

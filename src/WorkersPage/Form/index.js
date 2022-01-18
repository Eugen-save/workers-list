import { useRef, useState } from "react";
import { Button, Input, Wrapper } from "./styled";

export const Form = ({ addNewWorkersFirstName, addNewWorkersSecondName, addNewWorkersDepartment, addNewWorkersSalary }) => {
    const [newWorkersFirstName, setNewWorkersFirstName] = useState("");
    const [newWorkersSecondName, setNewWorkersSecondName] = useState("");
    const [newWorkersDepartment, setNewWorkersDepartment] = useState("");
    const [newWorkersSalary, setNewWorkersSalary] = useState("");

    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        addNewWorkersFirstName(newWorkersFirstName.trim());
        setNewWorkersFirstName("");

        addNewWorkersSecondName(newWorkersSecondName.trim());
        setNewWorkersSecondName("");

        addNewWorkersDepartment(newWorkersDepartment.trim());
        setNewWorkersDepartment("");

        addNewWorkersSalary(newWorkersSalary.trim());
        setNewWorkersSalary("");
    }

    return (
        <Wrapper
            onSubmit={onFormSubmit}
        >
            <Input
                ref={inputRef}
                value={newWorkersFirstName}
                placeholder="First Name"
                onChange={({ target }) => setNewWorkersFirstName(target.value)}
                required
            />
            <Input
                value={newWorkersSecondName}
                placeholder="Second Name"
                onChange={({ target }) => setNewWorkersSecondName(target.value)}
                required
            />
            <Input
                value={newWorkersDepartment}
                placeholder="Department"
                onChange={({ target }) => setNewWorkersDepartment(target.value)}
                required
            />
            <Input
                value={newWorkersSalary}
                placeholder="Salary"
                onChange={({ target }) => setNewWorkersSalary(target.value)}
                required
            />
            <Button
                onClick={focusInput}
            >
                Add
            </Button>
        </Wrapper>
    )
}
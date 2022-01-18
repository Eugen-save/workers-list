import { useState } from "react"
import { Container } from "../common/Container"
import { Header } from "../common/Header"
import { Section } from "../common/Section"
import { SectionWrapper } from "../common/SectionWrapper"
import { Form } from "./Form"
import { WorkersList } from "./WorkersList"

export const WorkersPage = () => {
    const [workersFirstName, setWorkersFirstName] = useState(
        [
            { id: 1, content: "John" },
            { id: 2, content: "Sylwestr" },
        ]
    );

    const [workersSecondName, setWorkersSecondName] = useState(
        [
            { id: 1, content: "Ivanov" },
            { id: 2, content: "Johnson" },
        ]
    )

    const [workersDepartment, setWorkersDepartment] = useState(
        [
            { id: 1, content: "IT" },
            { id: 2, content: "Sales" },
        ]
    );

    const [workersSalary, setWorkersSalary] = useState(
        [
            { id: 1, content: "2000 USD" },
            { id: 2, content: "15 000 USD" },
        ]
    )

    const addNewWorkersFirstName = (newWorkersFirstName) => {
        setWorkersFirstName(workersFirstName => [
            ...workersFirstName,
            {
                content: newWorkersFirstName,
                id: workersFirstName.length === 0 ? 1 : workersFirstName[workersFirstName.length - 1].id + 1,
            },
        ])
    }

    const addNewWorkersSecondName = (newWorkersSecondName) => {
        setWorkersSecondName(workersSecondName => [
            ...workersSecondName,
            {
                content: newWorkersSecondName,
                id: workersSecondName.length === 0 ? 1 : workersSecondName[workersSecondName.length - 1].id + 1,
            },
        ])
    }

    const addNewWorkersDepartment = (newWorkersDepartment) => {
        setWorkersDepartment(workersDepartment => [
            ...workersDepartment,
            {
                content: newWorkersDepartment,
                id: workersDepartment.length === 0 ? 1 : workersDepartment[workersDepartment.length - 1].id + 1,
            },
        ])
    }

    const addNewWorkersSalary = (newWorkersSalary) => {
        setWorkersSalary(workersSalary => [
            ...workersSalary,
            {
                content: newWorkersSalary,
                id: workersSalary.length === 0 ? 1 : workersSalary[workersSalary.length - 1].id + 1,
            },
        ])
    }

    return (
        <>
            <Container>
                <Header title="Workers List" />
                <SectionWrapper>
                    <Section
                        title="Add new worker"
                        body={<Form
                            addNewWorkersFirstName={addNewWorkersFirstName}
                            addNewWorkersSecondName={addNewWorkersSecondName}
                            addNewWorkersSalary={addNewWorkersSalary}
                            addNewWorkersDepartment={addNewWorkersDepartment}
                        />}
                    />
                    <Section
                        title="Workers list"
                        body={<WorkersList
                            workersFirstName={workersFirstName}
                            workersSecondName={workersSecondName}
                            workersDepartment={workersDepartment}
                            workersSalary={workersSalary}
                        />}
                    />
                </SectionWrapper>
            </Container>
        </>
    )
}
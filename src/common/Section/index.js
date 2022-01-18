import { Header, SectionBody, Wrapper } from "./styled";

export const Section = ({body, title}) => (
    <Wrapper>
        <Header>
            {title}
        </Header>
        <SectionBody>
            {body}
        </SectionBody>
    </Wrapper>
)
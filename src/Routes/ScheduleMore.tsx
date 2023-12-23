import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: flex-start;
    text-align: center;
`;

const Title = styled.h1`
    color: white;
    font-size: 24px;
    font-weight: 700;
    margin-top: 2rem;
`;

const Label = styled.h2`
    color: white;
    font-size: 20px;
    font-weight: 300;
    margin-top: 2rem;
    text-align: left;
`;

function ScheduleMore() {
    return (
        <Container>
            <Title>일정 Schedules</Title>
            <Label>currently in development...<br />현재 개발중...</Label>
        </Container>
    );
}

export default ScheduleMore;
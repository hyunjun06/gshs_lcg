import styled from "styled-components";
import ScheduleComponent from "../components/ScheduleComponent";
import Colors from "../components/Colors";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-between;
    text-align: center;
`;

const ScheduleContainer = styled.div`
    margin-top: 24px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
`;

const Title = styled.h1`
    color: white;
    font-size: 24px;
    font-weight: 700;
    margin-top: 2rem;
`;

const TextContainer = styled.div`
    width: 100%;
    height: 13%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
`;

const Text = styled.h2`
    color: white;
    font-size: 20px;
    font-weight: 300;
    transition: scale 0.5s ease-in-out;
    
    &:hover {
        scale: 1.1;
        transition: scale 0.5s ease-in-out;
        cursor: pointer;
    }
`;

function Schedule() {
    const ExampleSchedules = [
        {
            date: "12/23",
            team1: "MOM",
            team2: "OCT",
            status: "COMPLETED",
            color: Colors.color1,
            winner: "MOM",
        },
        {
            date: "12/23",
            team1: "MOM",
            team2: "OCT",
            status: "COMPLETED",
            color: Colors.color2,
            winner: "MOM",
        },
        {
            date: "12/23",
            team1: "MOM",
            team2: "OCT",
            status: "COMPLETED",
            color: Colors.color3,
            winner: "MOM",
        },
        {
            date: "12/23",
            team1: "MOM",
            team2: "OCT",
            status: "COMPLETED",
            color: Colors.color4,
            winner: "MOM",
        },
    ]
    return (
        <Container>
            <Title>일정 Schedules</Title>
            <ScheduleContainer>
                {ExampleSchedules.map((schedule, index) => (
                    <ScheduleComponent
                        key={index}
                        date={schedule.date}
                        team1={schedule.team1}
                        team2={schedule.team2}
                        status={schedule.status}
                        color={schedule.color}
                        winner={schedule.winner}
                    />
                ))}
                <TextContainer>
                    <Link to="/schedules_more">
                        <Text>더보기</Text>
                    </Link>
                </TextContainer>
            </ScheduleContainer>
        </Container>
    );
}

export default Schedule;
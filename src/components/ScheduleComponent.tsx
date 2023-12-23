import styled from "styled-components";

interface ContainerProps {
    color: string;
}

const Container = styled.div<ContainerProps>`
    width: 100%;
    height: 13%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: ${props => props.color};
    border-color: ${props => props.color};
`;

const Outline = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Status = styled.h2`
    font-size: 16px;
    font-weight: 300;
    align-self: baseline;
`;

const MainText = styled.h1<ContainerProps>`
    color: white;
    font-size: 20px;
    font-weight: 300;
    
    span {
        font-weight: 700;
        color: ${props => props.color};
    }
`;

interface ScheduleComponentProps {
    date: string;
    team1: string;
    team2: string;
    status: string;
    color: string;
    winner: string;
}

function ScheduleComponent({ date, team1, team2, status, color, winner }: ScheduleComponentProps) {
    return (
        <Container color={color}>
            <Outline>
                {status === "COMPLETED" ?
                <MainText color={color}>{date} ㅡ <span>{winner}</span> vs {winner === team1 ? team2 : team2}</MainText>
                :
                <MainText color={color}>{date} ㅡ {team1} vs {team2}</MainText>               
                }
            </Outline>
            <Status>{status}</Status>
        </Container>
    );
}

export default ScheduleComponent;
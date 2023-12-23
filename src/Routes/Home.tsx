import styled from "styled-components";
import Colors from "../components/Colors";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Background = styled.div`
    width: 100%;
    height: 100%;
    background-image: url('gshs_lcg/images/trophy.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    transform: rotate(-15deg) scale(0.5);
    opacity: 0.5;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
`;

const Title = styled.h1`
    font-size: 6.25rem;
    color: ${Colors.text};
    font-weight: 900;
    margin-bottom: 2rem;
    z-index: 2;
`;

const Button = styled.button`
    font-size: 20px;
    font-family: 'Noto Sans KR', sans-serif;
    color: ${Colors.text};
    font-weight: 300;
    z-index: 2;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 2rem;
    transition: scale 0.5s ease-in-out;
    
    &:hover {
        cursor: pointer;
        scale: 1.1;
        transition: scale 0.5s ease-in-out;
    }
`;

function Home() {
    const onClick = () => {
        window.location.href = "/gshs_lcg/schedules";
    }
    
    return (
        <Container>
            <Background />
            <Title>LCG</Title>
            <Button onClick={onClick}>tap for more</Button>
        </Container>
    );
}

export default Home;
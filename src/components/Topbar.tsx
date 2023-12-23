import styled from "styled-components"
import MenuButton from "./MenuButton";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 50vh;
    height: 60px;
    background-color: #111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    position: absolute;
    top: 0;
`;

const Title = styled.h1`
    font-size: 24px; 
    color: white;
    font-weight: 400;
    margin-left: 2rem;
`;

const Button = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
`;

interface TopbarProps {
    onClick: () => void;
    isMenuOpen: boolean;
}

function Topbar({ onClick, isMenuOpen }: TopbarProps) {
    return (
        <Container>
            <Link to="/">
                <Title>LCG</Title>
            </Link>
            <Button onClick={onClick}>
                <MenuButton isOpen={isMenuOpen}/>
            </Button>
        </Container>        
    );
}

export default Topbar;
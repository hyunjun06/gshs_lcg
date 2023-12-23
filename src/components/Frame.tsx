import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import Colors from "./Colors";
import Topbar from "./Topbar";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 50vh;
    background-color: ${Colors.background};
    overflow: hidden;
    
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const MenuContainer = styled.div`
    width: 50vh;
    height: calc(100vh - 60px);
    background-color: #111;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    position: absolute;
    bottom: 0;
    z-index: 3;
    padding-bottom: 120px;
`;

interface MenuTitleProps {
  isActived?: boolean;
}

const MenuTitle = styled(motion.h1)<MenuTitleProps>`
    font-size: 20px; 
    color: white;
    font-weight: 300;
    margin-left: 2rem;
    transition: scale 0.2s ease-in-out;
    border-bottom: 1px solid ${props => props.isActived ? "white" : "transparent"};
    
    &:hover {
      scale: 1.1;
      transition: scale 0.2s ease-in-out;
      cursor: pointer;
    }
`;

const OutletContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding-top: 60px;
    padding-bottom: 60px;
    padding-left: 80px;
    padding-right: 80px;
`;

function Frame() {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  }
  
  const menuVariants = {
    open: {
      opacity: 1,
      translateY: 0,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    },
    closed: {
      opacity: 0,
      translateY: -50,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  return (
    <Container>
        <Topbar onClick={onClick} isMenuOpen={isOpen}/>
        <AnimatePresence>
        {isOpen && (
            <MenuContainer>
              <Link to="/schedules" onClick={() => setIsOpen(false)}>
                <MenuTitle variants={menuVariants} initial="closed" animate="open" exit="closed">일정 Schedules</MenuTitle>
              </Link>
              <Link to="/ranking" onClick={() => setIsOpen(false)}>
                <MenuTitle variants={menuVariants} initial="closed" animate="open" exit="closed">순위 Ranking</MenuTitle>
              </Link>
            <Link to="/manage" onClick={() => setIsOpen(false)}>
              <MenuTitle variants={menuVariants} initial="closed" animate="open" exit="closed">관리 Manage</MenuTitle>
            </Link>
          </MenuContainer>
        )}
        </AnimatePresence>
        <OutletContainer>
          <Outlet />        
        </OutletContainer>
    </Container>
  );
}

export default Frame;
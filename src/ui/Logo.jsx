import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const COMPANY_NAME = "The Hotel Company";

const StyledLogo = styled.div`
    text-align: center;
`;

const StyledSpan = styled.span`
    text-align: center;
    font-family: "Playwrite AU TAS", cursive;
    font-optical-sizing: auto;
    font-style: normal;
    font-weight: 600;
    text-shadow: 2px 2px var(--color-grey-200);
`;

const DarkModeText = styled.span`
    color: var(--color-grey-700);
`;

const LightModeText = styled.span`
    color: #27492e;
`;

const Img = styled.img`
    height: 9.6rem;
    width: auto;
`;

function Logo() {
    const { isDarkMode } = useDarkMode();
    return (
        <StyledSpan>
            <StyledLogo>
                <Img src="/logo.png" alt="Logo" />
            </StyledLogo>
            {isDarkMode ? (
                <DarkModeText>{COMPANY_NAME}</DarkModeText>
            ) : (
                <LightModeText>{COMPANY_NAME}</LightModeText>
            )}
        </StyledSpan>
    );
}

export default Logo;

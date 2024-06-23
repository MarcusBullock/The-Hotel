import styled from "styled-components";

const StyledLogo = styled.div`
    text-align: center;
`;

const StyledSpan = styled.span`
    text-align: center;
    font-family: "Playwrite AU TAS", cursive;
    font-optical-sizing: auto;
    font-style: normal;
    font-weight: 600;
    color: #27492e;
`;

const Img = styled.img`
    height: 9.6rem;
    width: auto;
`;

function Logo() {
    return (
        <StyledSpan>
            <StyledLogo>
                <Img src="/logo-dark-1.png" alt="Logo" />
            </StyledLogo>
            <span>The Hotel Company</span>
        </StyledSpan>
    );
}

export default Logo;

import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    background: #90dfaa;
    padding: 14px 24px 24px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px 8px 0px 0px;
`;

const Title = styled.h1`
    font-family: Inter, sans-serif;
    font-size: 18px;
    color: #000000;
`;

const CloseSvg = styled.svg`
    cursor: pointer;
    transition: all 0.5s;
    transform-origin: 50% 50%;
    &:hover {
        opacity: 0.7;
        transform: scale(1.2);
    }
`;

interface HeaderProps {
    handleMouseDown: (e: React.MouseEvent) => void;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ handleMouseDown, setIsOpen }) => {
    return (
        <HeaderWrapper onMouseDown={handleMouseDown}>
            <Title>Create MindMemo</Title>
            <CloseSvg
                className="cursor-pointer scale-125 m-2"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={(e) => setIsOpen(prev => !prev)}
            >
                <path
                    d="M7.05673 5.99936L11.7783 1.28477C11.9194 1.14363 11.9987 0.952206 11.9987 0.752604C11.9987 0.553001 11.9194 0.361573 11.7783 0.220433C11.6372 0.079292 11.4458 0 11.2462 0C11.0466 0 10.8552 0.079292 10.7141 0.220433L6 4.94251L1.28592 0.220433C1.14479 0.079292 0.953384 1.77216e-07 0.753802 1.78703e-07C0.554221 1.80191e-07 0.362814 0.079292 0.221688 0.220433C0.0805626 0.361573 0.0012792 0.553001 0.0012792 0.752604C0.0012792 0.952206 0.0805626 1.14363 0.221688 1.28477L4.94327 5.99936L0.221688 10.7139C0.151443 10.7836 0.0956875 10.8665 0.0576386 10.9579C0.0195897 11.0492 0 11.1472 0 11.2461C0 11.3451 0.0195897 11.443 0.0576386 11.5344C0.0956875 11.6257 0.151443 11.7086 0.221688 11.7783C0.29136 11.8485 0.37425 11.9043 0.465579 11.9424C0.556907 11.9804 0.654865 12 0.753802 12C0.85274 12 0.950698 11.9804 1.04203 11.9424C1.13335 11.9043 1.21625 11.8485 1.28592 11.7783L6 7.05621L10.7141 11.7783C10.7838 11.8485 10.8666 11.9043 10.958 11.9424C11.0493 11.9804 11.1473 12 11.2462 12C11.3451 12 11.4431 11.9804 11.5344 11.9424C11.6257 11.9043 11.7086 11.8485 11.7783 11.7783C11.8486 11.7086 11.9043 11.6257 11.9424 11.5344C11.9804 11.443 12 11.3451 12 11.2461C12 11.1472 11.9804 11.0492 11.9424 10.9579C11.9043 10.8665 11.8486 10.7836 11.7783 10.7139L7.05673 5.99936Z"
                    fill="#4159A5"
                />
            </CloseSvg>
        </HeaderWrapper>
    );
};

export default Header;

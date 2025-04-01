import { styled } from "styled-components"

interface JumpInBtnProps {
  className?: string
  href?: string
  onClick?: () => void
  children?: React.ReactNode
}

const JumpInBtn = ({
  className,
  href,
  onClick,
  children = "JUMP IN",
}: JumpInBtnProps) => {
  return (
    <StyledJumpInBtn className={className} href={href} onClick={onClick}>
      {children}
    </StyledJumpInBtn>
  )
}

const StyledJumpInBtn = styled.a`
  background-color: #ebecfa;
  color: #0f1417;
  padding: 10px 20px;
  border-radius: 20px;
  text-decoration: none;
  min-width: 354px;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  display: block;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 568px) {
    font-size: 24px;
    min-width: 200px;
    padding: 8px 16px;
  }
`

export { JumpInBtn }

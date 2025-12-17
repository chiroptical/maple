import styled from "styled-components"

export const chipHeight = 2

type StepChipProps = {
  children: React.ReactNode
  className: string
}

const StepChip = ({children, className}: StepChipProps) => {
  return (<div className={className}>
    {children}
  </div>
  )
}

export const StyledStepChip = styled(StepChip)<{
  $active: boolean
  $scale: number
}>`
  background-color: var(
    ${props => props.$active ? (props.$scale > 1 ? "--bs-blue" : "--bs-green") : "--bs-white"}
  );
  font-size: ${props => props.$scale * 1.25}rem;
  width: ${props => props.$scale * chipHeight}rem;
  height: ${props => props.$scale * chipHeight}rem;
  font-style: bold;
  color: var(${props => props.$active ? "--bs-white" : "--bs-blue"});
  border-style: solid;
  border-width: 1px;
  border-color: ${props => props.$active ? "transparent" : "var(--bs-blue)"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`


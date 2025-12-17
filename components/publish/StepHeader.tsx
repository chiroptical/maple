import styled from "styled-components"
import { StyledStepChip } from "./StepChip"
import { Row, Col } from "../bootstrap"
import { useMediaQuery } from "usehooks-ts"

export const StepHeader = styled<{ step?: number }>(({ step, children }) => {
  const isMobile = useMediaQuery("(max-width: 768px)")
  return (
    <Row>
      <Col
        md={2}
        className={`d-flex ${isMobile ? "justify-content-center" : ""}`}
      >
        <div className="m-auto">
          {!!step && (
            <StyledStepChip className="me-4" $scale={2} $active={true} >
              {step}
            </StyledStepChip>
          )}
        </div>
      </Col>
      <Col
        md={10}
        className={`d-flex align-items-center ${
          isMobile ? "justify-content-center my-3" : ""
        }`}
      >
        <div className="my-auto" style={{ fontSize: "2rem" }}>
          {children}
        </div>
      </Col>
    </Row>
  )
})``

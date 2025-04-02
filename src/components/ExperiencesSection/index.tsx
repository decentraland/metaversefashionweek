import styled from "styled-components"
import { Runways } from "../Runways"

const ExperiencesSection = () => {
  return (
    <Container>
      <InnerContainer>
        <Runways />
      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1240px;
  margin: 0 auto;
`

export { ExperiencesSection }

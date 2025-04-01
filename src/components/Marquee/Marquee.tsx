import { styled } from "styled-components"

/**
 * Interface for marquee item data
 */
interface MarqueeItem {
  id: number
  text: string
}

/**
 * Double infinite marquee component that displays scrolling text in opposite directions.
 * Creates a dynamic, continuous scrolling effect with hover pause.
 *
 * @returns {JSX.Element} The rendered marquee component
 */
const Marquee = () => {
  const items: MarqueeItem[] = [
    { id: 1, text: "METAVERSE FASHION WEEK" },
    { id: 2, text: "APRIL 9-12" },
    { id: 3, text: "FREE ENTRY" },
    { id: 4, text: "FRONT ROW ACCESS" },
    { id: 5, text: "ICONIC RUNWAYS" },
    { id: 6, text: "EPIC GIVEAWAYS" },
    { id: 7, text: "INSIDER CAREER TALKS" },
    { id: 8, text: "METAVERSE FASHION WEEK" },
    { id: 9, text: "APRIL 9-12" },
    { id: 10, text: "FREE ENTRY" },
    { id: 11, text: "FRONT ROW ACCESS" },
    { id: 12, text: "ICONIC RUNWAYS" },
    { id: 13, text: "EPIC GIVEAWAYS" },
    { id: 14, text: "INSIDER CAREER TALKS" },
    { id: 15, text: "METAVERSE FASHION WEEK" },
    { id: 16, text: "APRIL 9-12" },
    { id: 17, text: "FREE ENTRY" },
    { id: 18, text: "FRONT ROW ACCESS" },
    { id: 19, text: "ICONIC RUNWAYS" },
    { id: 20, text: "EPIC GIVEAWAYS" },
    { id: 21, text: "INSIDER CAREER TALKS" },
  ]

  // Double the items to ensure smooth infinite scroll
  const doubledItems = [...items, ...items]

  return (
    <MarqueeContainer>
      <MarqueeWrapper>
        <MarqueeContent>
          {doubledItems.map((item, idx) => (
            <MarqueeItem key={`${item.id}-${idx}`}>{item.text}</MarqueeItem>
          ))}
        </MarqueeContent>
      </MarqueeWrapper>
    </MarqueeContainer>
  )
}

const MarqueeContainer = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  overflow: hidden;
  background-color: ##0f1417;
  padding-block: 0.7rem;
  border-top: 2px solid #ebecfa;
  border-bottom: 2px solid #ebecfa;
`

const MarqueeWrapper = styled.div`
  position: relative;
  display: flex;
  overflow-x: hidden;
  width: 100%;

  &:hover {
    animation-play-state: paused;
  }
`

const MarqueeContent = styled.div`
  display: flex;
  white-space: nowrap;
  animation: marquee 200s linear infinite;

  &.clone {
    position: absolute;
    top: 0;
    left: 100%;
  }

  &:hover {
    animation-play-state: paused;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`

const MarqueeItem = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  margin: 0 0.5rem;
  border-radius: 0.375rem;
  color: #ebecfa;
  letter-spacing: 0.08em;
`

export { Marquee }

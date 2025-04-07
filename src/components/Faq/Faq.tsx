import { memo, useState } from "react"
import { styled } from "styled-components"
import faqImage from "../../img/faq/logo.png"
import arrowDown from "../../img/icons/arrow-down.png"
import { breakpoints } from "../../utils/theme"

type Question = {
  question: string
  answer: () => React.ReactNode
}

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
    console.log("activeIndex", activeIndex)
  }

  const getMarginTop = (index: number) => {
    if (activeIndex === null) return 0
    if (index === 0) return 34
    if (index === 1) return 106
    if (index === 2) return 120
    if (index === 3) return 178
    if (index === 4) return 52
    if (index === 5) return 56
    return 0
  }

  return (
    <SectionContainer>
      <LeftContainer $marginTop={getMarginTop(activeIndex ?? 0)}>
        <h2 className="mobile-hidden">
          <span>Frequently</span> <span>Asked Questions</span>
        </h2>
        <img src={faqImage} alt="FAQ" />
      </LeftContainer>
      <RightContainer id="faq">
        <Title>Frequently Asked Questions</Title>
        {[
          {
            question: "What is Decentraland?",
            answer: () => (
              <p>
                Decentraland is a social virtual world where you can connect,
                explore, and create.
              </p>
            ),
          },
          {
            question: "How do I access Metaverse Fashion Week?",
            answer: () => (
              <p>
                Metaverse Fashion Week will take place in Decentraland&apos;s
                Fashion Week Plaza. Download the{" "}
                <a
                  href="https://decentraland.org/download?utm_org=dcl&utm_source=mvfwlanding&utm_medium=organic&utm_campaign=mvfw25&utm_term=faq&utm_content=download"
                  target="_blank"
                  rel="noreferrer"
                >
                  Desktop Client
                </a>{" "}
                to get started.
                <br />
                <br />
                Once you download, easily attend any MVFW event by clicking the
                Jump In link. This will take you in-world where you can explore
                as your avatar.
              </p>
            ),
          },
          {
            question:
              "Where can I find special Wearables and Emotes for my avatar?",
            answer: () => (
              <p>
                There are many free digital collectables, known as Wearables and
                Emotes, throughout the MVFW grounds. You will find them in
                special dispensing machines. Click the button on each machine to
                claim yours. Have fun exploring!
                <br />
                <br />
                To customize your digital identity beyond the free Wearables and
                Emotes, you can explore hundreds of unique community-made items
                in the{" "}
                <a
                  href="https://decentraland.org/marketplace/?utm_org=dcl&utm_source=mvfwlanding&utm_medium=organic&utm_campaign=mvfw25&utm_term=faq&utm_content=marketplace"
                  target="_blank"
                  rel="noreferrer"
                >
                  Decentraland Marketplace
                </a>
                , all waiting to be discovered by you!
              </p>
            ),
          },
          {
            question:
              "Do I need cryptocurrency or a digital wallet to use Decentraland?",
            answer: () => (
              <p>
                You don&apos;t need cryptocurrency to enjoy
                Decentraland—it&apos;s free to explore. If you want to buy a
                community-made creation from the Marketplace, you can use a
                credit/debit card, bank transfer, or a variety of
                cryptocurrencies.
                <br />
                <br />
                As for a{" "}
                <a
                  href="https://docs.decentraland.org/player/blockchain-integration/get-a-wallet/?utm_org=dcl&utm_source=mvfwlanding&utm_medium=organic&utm_campaign=mvfw25&utm_term=faq&utm_content=wallet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  digital wallet
                </a>
                , if you already have one, great!
                <br />
                <br />
                If you don&apos;t already have one, when you sign up for
                Decentraland with your email or a social account, a digital
                wallet will be automatically created for you. It&apos;s part of
                your account and stores any assets you collect, like free
                Wearables you might claim in-world or a fun Emote you purchase
                in the Marketplace.
              </p>
            ),
          },
          {
            question:
              "How do I keep up to date with Metaverse Fashion Week news?",
            answer: () => (
              <p>
                Follow{" "}
                <a
                  href="https://twitter.com/decentraland"
                  target="_blank"
                  rel="noreferrer"
                >
                  @Decentraland
                </a>{" "}
                on X.com and search MVFW25 for live updates. You can also find
                Decentraland on{" "}
                <a
                  href="https://www.instagram.com/decentraland_foundation/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                , or{" "}
                <a
                  href="https://decentraland.beehiiv.com/subscribe?utm_org=dcl&utm_source=mvfwlanding&utm_medium=organic&utm_campaign=mvfw25&utm_term=faq&utm_content=newsletter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  subscribe
                </a>{" "}
                to Decentraland&apos;s weekly newsletter for all of the latest
                news.
              </p>
            ),
          },
          {
            question:
              "I want to create in Decentraland, where can I learn more?",
            answer: () => (
              <p>
                Anyone can become a Decentraland creator, all it takes is a
                little know-how and endless creative ideas! Everything you need
                to know to start your creative journey can be found at{" "}
                <a
                  href="https://decentraland.org/create?utm_org=dcl&utm_source=mvfwlanding&utm_medium=organic&utm_campaign=mvfw25&utm_term=faq&utm_content=create"
                  target="_blank"
                  rel="noreferrer"
                >
                  decentraland.org/create
                </a>
                .
              </p>
            ),
          },
        ].map((item: Question, index: number) => (
          <QuestionContainer key={index}>
            <Question onClick={() => toggleAnswer(index)}>
              <p>{item.question}</p>
              <Arrow
                src={arrowDown}
                alt="arrow"
                $isActive={activeIndex === index}
              />
            </Question>
            <Answer $isActive={activeIndex === index}>{item.answer()}</Answer>
          </QuestionContainer>
        ))}
      </RightContainer>
    </SectionContainer>
  )
}

const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
  padding-inline: 32px;
  margin-block: 120px;
  max-width: 1200px;
  min-height: 100vh;
  height: 100%;
  position: relative;

  @media screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
  }
`

const RightContainer = styled.div`
  width: 100%;
  color: #ebecfa;
  max-width: 1200px;
  margin-inline: auto;
  height: 100%;
  padding-inline: 24px;
  border-left: 2px solid rgba(235, 236, 250, 1);
`

const LeftContainer = styled.div<{ $marginTop: number }>`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 24px;
  padding-right: 24px;

  .mobile-hidden {
    display: none;

    @media screen and (min-width: ${breakpoints.md}) {
      display: block;
    }
  }

  h2 {
    font-size: 24px;
    margin-bottom: 40px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: bold;
    text-align: right;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: all 0.3s ease-in-out;
    will-change: transform;
    // margin-top: 900px;
    margin-top: calc(900px + ${(props) => props.$marginTop}px);

    @media screen and (max-width: ${breakpoints.md}) {
      display: none;
    }
  }
`

const Title = styled.h2`
  width: 30%;
  font-size: 42px;
  margin-bottom: 40px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Inter", sans-serif !important;

  @media screen and (min-width: ${breakpoints.md}) {
    display: none;
  }
`

const QuestionContainer = styled.div`
  margin-bottom: 20px;
  padding-block: 50px;
  border-bottom: 1px solid rgba(235, 236, 250, 1);

  &:last-of-type {
    margin-bottom: 0;
    border-bottom: 2px solid rgba(235, 236, 250, 1);
  }
`

const Question = styled.div`
  cursor: pointer;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: #ebecfa;

  p {
    font-family: "Inter", sans-serif !important;
    max-width: 500px;
    font-size: 22px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    line-height: 1.2;
  }
`

const Answer = styled.div<{ $isActive: boolean }>`
  max-height: ${(props) => (props.$isActive ? "1000px" : "0")};
  opacity: ${(props) => (props.$isActive ? "1" : "0")};
  pointer-events: ${(props) => (props.$isActive ? "auto" : "none")};
  margin-top: ${(props) => (props.$isActive ? "20px" : "0")};
  overflow: hidden;
  transition:
    max-height 0.2s ease-in-out,
    opacity 0.3s ease-in-out,
    margin-top 0.3s ease-in-out;
  will-change: max-height, opacity;

  text-align: justify;
  font-size: 16px;
  color: rgba(235, 236, 250, 0.8);

  a {
    text-decoration: underline;
    color: rgb(88, 122, 235);
  }
`

const Arrow = styled.img<{ $isActive: boolean }>`
  transition: all 0.3s ease-in-out;
  height: 24px;
  transform: ${(props) =>
    props.$isActive ? "rotate(180deg)" : "rotate(0deg)"};
`

memo(Faq)
export { Faq }

// import { styled } from "styled-components"
// import { liveTalksData } from "./data"
// import bgHero2 from "../../img/music-festival/tira-larga-oscura.jpg"
// import { breakpoints } from "../../utils/theme"
// import { Title } from "../Title"

// const LiveTalks = () => {
//   return (
//     <LiveTalksContainer id="livetalks">
//       <Title>LIVE TALKS</Title>
//       <TalksGrid>
//         {liveTalksData.map((talk, index) => (
//           <TalkCard key={index}>
//             <img src={talk.image} alt={talk.title} />
//             <h3>{talk.title}:</h3>
//             <p>{talk.description}</p>
//             <TimeInfo>
//               <p>{talk.date}</p>
//               <TalkTime>{talk["time-start"]}</TalkTime>
//               <TalkTime>{talk["time-end"]}</TalkTime>
//             </TimeInfo>
//           </TalkCard>
//         ))}
//       </TalksGrid>
//     </LiveTalksContainer>
//   )
// }

// const LiveTalksContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-image: url(${bgHero2});
//   color: white;
//   background-color: #000;
//   background-repeat: no-repeat;
//   background-size: cover;
//   padding: 40px 20px;

//   position: relative;

//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: linear-gradient(
//       to bottom,
//       rgba(0, 0, 0, 0.6) 0%,
//       rgba(0, 0, 0, 0.4) 100%
//     );
//     z-index: 1;
//   }

//   & > * {
//     position: relative;
//     z-index: 2;
//   }

//   @media (max-width: ${breakpoints.md}) {
//     padding: 30px 15px;
//   }

//   @media (max-width: ${breakpoints.s}) {
//     padding: 20px 10px;
//   }
// `

// const TalksGrid = styled.div`
//   display: grid;
//   gap: 30px;
//   width: 100%;
//   max-width: 1240px;
//   margin-bottom: 60px;

//   @media (max-width: ${breakpoints.s}) {
//     grid-template-columns: 1fr;
//     gap: 30px;
//   }

//   @media (min-width: ${breakpoints.md}) {
//     grid-template-columns: repeat(2, minmax(240px, 1fr));
//     gap: 20px;
//   }
// `

// const TalkCard = styled.div`
//   color: #fff;
//   padding: 20px;
//   border-radius: 8px;
//   text-align: center;
//   transition: transform 0.3s ease;

//   img {
//     width: 100%;
//     border: 1px solid;
//     object-fit: cover;
//     aspect-ratio: 16/9;
//   }

//   h3 {
//     margin-top: 15px;
//     font-size: 24px;
//     font-weight: bold;
//     background: linear-gradient(90deg, #00bfff, #ff00ff);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     font-family: "Inter", sans-serif !important;
//   }

//   p {
//     font-size: 16px;
//     font-weight: 600;
//     color: #ffffff;
//     line-height: 1.4;
//   }

//   @media (max-width: ${breakpoints.md}) {
//     padding: 15px;

//     h3 {
//       font-size: 20px;
//     }

//     p {
//       font-size: 14px;
//     }

//     img {
//       height: unset;
//     }
//   }
// `

// const TalkTime = styled.p`
//   font-weight: 400 !important;
// `

// const TimeInfo = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 10px;
//   font-size: 14px;
//   margin-top: 15px;

//   p {
//     color: rgba(255, 255, 255, 1) !important;
//     font-weight: 400 !important;
//     margin: 0;
//     position: relative;

//     &:not(:last-child)::after {
//       content: "|";
//       position: absolute;
//       right: -7px;

//       color: #8a2be2;
//     }
//   }

//   @media (max-width: ${breakpoints.md}) {
//     font-size: 12px;
//     gap: 8px;
//   }
// `

// export { LiveTalks }

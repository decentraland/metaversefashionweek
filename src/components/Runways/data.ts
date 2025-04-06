import experience2 from "../../img/experiences/entangled.png"
import experience1 from "../../img/experiences/offWorld.png"
import experience3 from "../../img/experiences/standOut.png"
import runway1 from "../../img/runways/cyberdog.png"
import runway4 from "../../img/runways/dclJapan.png"
import runway2 from "../../img/runways/freeTheYouth.png"
import runway5 from "../../img/runways/roustans.png"
import runway3 from "../../img/runways/theBannersWeWear.png"
import runway6 from "../../img/runways/wearablesAroundWorld.png"

// Types
interface Runway {
  id: number
  image: string
  title: string
  location?: string
  description: string
}

// Runway data
const runwaysData: Runway[] = [
  {
    id: 1,
    image: runway1,
    title: "Cyberdog",
    // location: "[7,80]",
    description:
      "A pioneer of rave fashion, Cyberdog has shaped cyberpunk aesthetics since the early 1990s. From a Camden market stall to an iconic brand, its UV-reactive fabrics, LED outfits, and sci-fi designs are symbols of underground club culture, self-expression, and subcultural rebellion.",
  },
  {
    id: 2,
    image: runway2,
    title: "Free the youth",
    // location: "[9,79]",
    description:
      "FREE THE YOUTH brings bold, Ghanaian-inspired streetwear to the runway, empowering African youth through fashion and creative freedom. Founded to showcase Ghanaian street style, it has grown into a global movement featured in Vogue, Highsnobiety, and CNN.",
  },
  {
    id: 3,
    image: runway3,
    title: "THE BANNERS WE WEAR",
    // location: "[3,78]",
    description:
      "A runway of resistance and identity, this show debuts the three winners of The Banners We Wear - a $15k competition to turn Wearables into visual statements of beliefs and struggles. These bold digital banners highlight fashion as a tool for storytelling and social change.",
  },
  {
    id: 4,
    image: runway4,
    title: "DECENTRALAND JAPAN",
    // location: "[5,79]",
    description:
      "The Decentraland Japan community takes over the runway with cutting-edge Wearables. Curated by Kenji, this showcase highlights the digital craftsmanship of Nameusey (pronounced as ‘namu-zee’) and Hancos, two innovators pushing the future of virtual fashion with bold 3D design.",
  },
  {
    id: 5,
    image: runway5,
    title: "ROUSTAN’S MVFW TAKEOVER",
    // location: "[2,76]",
    description:
      "Celebrate body positivity with acclaimed body painter Paul Roustan as he transforms avatars into living art. Collect your free Roustan Caustics Body Paint Wearable from Genesis Plaza or Roustan’s MVFW Showroom, style your look, and take the runway in a bold statement of self-expression.",
  },
  {
    id: 6,
    image: runway6,
    title: "WEARABLES AROUND THE WORLD SHOWCASE ",
    // location: "[3,74]",
    description:
      "The Wearables Around the World Showcase celebrates fashion as cultural storytelling. Ten winning designs inspired by heritage and innovation debut in a live-streamed catwalk, presenting a powerful vision of how virtual fashion connects global creativity.",
  },
]

const experiencesData = [
  {
    id: 1,
    image: experience1,
    title: "OFF-WORLD Galactic Expansion by The Immersive KIND",
    location: "[145, -71]",
    description:
      "An intergalactic experience on hyper-intelligent fashion for MARS and the MOON, where unreal models embody robotics couture, AI-generated beauty, and futuristic self-expression. Featuring The Immersive KIND x Sapiensi x Shaokai Chen x Lucy Wheeler x Marcela Castile. As a pioneering XR studio and digital arts collective, The Immersive KIND pushes the boundaries of fashion, gaming, and storytelling—shaping the future of identity in the metaverse and beyond.",
  },
  {
    id: 2,
    image: experience2,
    title: "Entangled Q by Cansy",
    location: "[142, -82]",
    description:
      "A multi-layered art installation which uses NPC avatars to liken identity to quantum phenomena.The NPCs simultaneously embody infinite states of identity, dynamically morphing their appearance to reflect whoever enters the scene. Developed by award-winning artist-coder, Cansy.",
  },
  {
    id: 3,
    image: experience3,
    title: "Stand Out by Stom",
    location: "[145, -82]",
    description:
      "An interactive fashion game, where players compete on a catwalk stage by showcasing their digital wearables. Created by developer and 3D designer, Stom, to celebrate digital self-expression by turning avatars into performers.",
  },
]

export { runwaysData, experiencesData }

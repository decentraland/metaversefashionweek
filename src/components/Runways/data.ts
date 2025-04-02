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
  location: string
  description: string
}

// Runway data
export const runwaysData: Runway[] = [
  {
    id: 1,
    image: runway1,
    title: "Cyberdog",
    location: "[7:80]",
    description:
      "A pioneer of rave fashion, Cyberdog has shaped cyberpunk aesthetics since the early 1990s. From a Camden market stall to an iconic brand, its UV-reactive fabrics, LED outfits, and sci-fi designs are symbols of underground club culture, self-expression, and subcultural rebellion.",
  },
  {
    id: 2,
    image: runway2,
    title: "Free the youth",
    location: "[9:79]",
    description:
      "FREE THE YOUTH brings bold, Ghanaian-inspired streetwear to the runway, empowering African youth through fashion and creative freedom. Founded to showcase Ghanaian street style, it has grown into a global movement featured in Vogue, Highsnobiety, and CNN.",
  },
  {
    id: 3,
    image: runway3,
    title: "THE BANNERS WE WEAR",
    location: "[3:78]",
    description:
      "A runway of resistance and identity, this show debuts the three winners of The Banners We Wear - a $15k competition to turn Wearables into visual statements of beliefs and struggles. These bold digital banners highlight fashion as a tool for storytelling and social change.",
  },
  {
    id: 4,
    image: runway4,
    title: "DECENTRALAND JAPAN",
    location: "[5:79]",
    description:
      "The Decentraland Japan community takes over the runway with cutting-edge Wearables. Curated by Kenji, this showcase highlights the digital craftsmanship of Nameusey (pronounced as ‘namu-zee’) and Hancos, two innovators pushing the future of virtual fashion with bold 3D design.",
  },
  {
    id: 5,
    image: runway5,
    title: "ROUSTAN’S MVFW TAKEOVER",
    location: "[2:76]",
    description:
      "Celebrate body positivity with acclaimed body painter Paul Roustan as he transforms avatars into living art. Collect your free Roustan Caustics Body Paint Wearable from Genesis Plaza or Roustan’s MVFW Showroom, style your look, and take the runway in a bold statement of self-expression.",
  },
  {
    id: 6,
    image: runway6,
    title: "WEARABLES AROUND THE WORLD SHOWCASE ",
    location: "[3:74]",
    description:
      "The Wearables Around the World Showcase celebrates fashion as cultural storytelling. Ten winning designs inspired by heritage and innovation debut in a live-streamed catwalk, presenting a powerful vision of how virtual fashion connects global creativity.",
  },
]

import { useState } from "react"
import { styled } from "styled-components"

const ScheduleTabs = () => {
  const [activeTab, setActiveTab] = useState(0)

  const days = ["April 9", "April 10", "April 11", "April 12"]

  return (
    <TabsContainer>
      <TabsList>
        {days.map((day, index) => (
          <TabButton
            key={day}
            onClick={() => setActiveTab(index)}
            $isActive={activeTab === index}
            className={"tabButton"}
          >
            {day}
          </TabButton>
        ))}
      </TabsList>
      <TabContent>{renderContent(activeTab)}</TabContent>
    </TabsContainer>
  )
}

const TabsContainer = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  max-width: 678px;
`

const TabsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: -4px;
  z-index: 0;

  @media (max-width: 568px) {
    justify-content: flex-start;
    flex-direction: row;
    gap: 0;
  }
`

const TabButton = styled.button<{ $isActive: boolean }>`
  padding: 12px;
  background-color: ${({ $isActive }) =>
    $isActive ? "#ebecfa" : "rgba(15, 20, 23, 0.8)"};
  color: ${({ $isActive }) => ($isActive ? "#0F1417" : "#EBECFA")};
  border: none;
  border-radius: 12px 12px 0 0;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  transition: all 0.3s ease;
  border: 2px solid rgba(235, 236, 250, 1);
  width: 100%;

  &.tabButton {
    &:hover {
      background-color: ${({ $isActive }) =>
        $isActive ? "#ebecfa" : "rgba(35, 40, 43, 0.8)"};
      color: ${({ $isActive }) => ($isActive ? "#0F1417" : "#FFFFFF")};
      transition: all 0.3s ease;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 568px) {
    padding: 8px;
    font-size: 16px;
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 150px;
  }
`

const TabContent = styled.div`
  background-color: rgba(15, 19, 23, 1);
  border-radius: 0 0px 12px 12px;
  padding: 24px;
  color: #ebecfa;
  border: 2px solid rgba(235, 236, 250, 1);
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  flex-wrap: wrap;

  @media (max-width: 568px) {
    padding: 16px;
  }
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  flex-wrap: wrap;
  letter-spacing: 0.02em;
`

const ListItem = styled.li`
  font-size: 18px;
  font-weight: 400;
  color: #ebecfa;
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;

  span {
    &:first-child {
      font-weight: 700;
      font-size: 14px;
      flex: 1;
      opacity: 0.8;
    }

    &:last-child {
      font-weight: 400;
      font-size: 16px;
      flex: 2;
    }
  }
`

const renderContent = (activeTab: number) => {
  switch (activeTab) {
    case 0:
      return (
        <>
          <List>
            <ListItem>
              <span>
                <b>05:00pm UTC 10:00am PST</b>
              </span>
              <span>
                Five Years of Virtual Fashion <b>LIVE TALK</b>
              </span>
            </ListItem>{" "}
            <ListItem>
              <span>
                <b>06:00pm UTC 11:00am PST</b>
              </span>
              <span>
                Roustan <b>RUNWAY</b>
              </span>
            </ListItem>{" "}
            <ListItem>
              <span>
                <b>08:00pm UTC 01:00pm PST</b>
              </span>
              <span>
                Virtual Identities <b>LIVE TALK</b>
              </span>
            </ListItem>{" "}
            <ListItem>
              <span>
                <b>09:00pm UTC 02:00pm PST</b>
              </span>
              <span>
                Winners of The Banners We Wear <b>RUNWAY</b>{" "}
              </span>
            </ListItem>{" "}
            <ListItem>
              <span>
                <b>10:00pm UTC 03:00pm PST</b>
              </span>
              <span>
                Opening Party with <b>Marc Romboy</b>
              </span>
            </ListItem>{" "}
          </List>
        </>
      )
    case 1:
      return (
        <>
          <List>
            <ListItem>
              <span>
                <b>Midnight UTC 05:00pm PST</b>
              </span>
              <span>Five Years of Virtual Fashion (Repeat Talk)</span>
            </ListItem>{" "}
            <ListItem>
              <span>
                <b>01:00am UTC 06:00pm PST</b>
              </span>
              <span>
                Winners of The Banners We Wear <b> RUNWAY</b>
              </span>
            </ListItem>{" "}
            <ListItem>
              <span>
                <b>02:00am UTC 07:00pm PST</b>
              </span>
              <span>Virtual Identities (Repeat Talk)</span>
            </ListItem>{" "}
            <ListItem>
              <span>
                <b>11:00am UTC 04:00am PST</b>
              </span>
              <span>
                Decentraland Japan <b>RUNWAY</b>{" "}
              </span>
            </ListItem>{" "}
            <ListItem>
              <span>
                <b>5:00pm UTC 10:00 am PST</b>
              </span>
              <span>
                Gaming x Fashion <b>LIVE TALK</b>
              </span>
            </ListItem>{" "}
            <ListItem>
              <span>
                <b>6:00pm UTC 11:00 am PST</b>
              </span>
              <span>
                Cyberdog <b>RUNWAY</b>
              </span>
            </ListItem>{" "}
            <ListItem>
              <span>
                <b>07:00pm UTC Midday PST</b>
              </span>
              <span>The WIP Meetup at MVFW</span>
            </ListItem>{" "}
            <ListItem>
              <span>
                <b>09:00pm UTC 02:00pm PST</b>
              </span>
              <span>
                Wearables Around The World <b>RUNWAY</b>
              </span>
            </ListItem>{" "}
            <ListItem>
              <span>
                <b>10:00pm UTC 03:00pm PST</b>
              </span>
              <span>
                Co-creating with AI <b>LIVE TALK</b>
              </span>
            </ListItem>{" "}
          </List>
        </>
      )
    case 2:
      return (
        <>
          <List>
            <ListItem>
              <span>
                <b>Midnight UTC 05:00pm PST</b>
              </span>
              <span>Gaming x Fashion (Repeat Talk)</span>
            </ListItem>{" "}
            <ListItem>
              <span>
                <b>01:00am UTC 06:00pm PST</b>
              </span>
              <span>
                Cyberdog <b>RUNWAY</b>
              </span>
            </ListItem>{" "}
            <ListItem>
              <span>
                <b>02:00am UTC 07:00pm PST</b>
              </span>
              <span>Wearables Around The World (Repeat Talk)</span>
            </ListItem>{" "}
            <ListItem>
              <span>
                <b>03:00am UTC 08:00pm PST</b>
              </span>
              <span>Co-creating with AI (Repeat Talk)</span>
            </ListItem>{" "}
            <ListItem>
              <span>
                <b>3:00pm UTC 8:00 am PST</b>
              </span>
              <span>
                Avatares y Cultura <b>LIVE TALK</b>
              </span>
            </ListItem>{" "}
            <ListItem>
              <span>
                <b>05:00pm UTC 10:00am PST</b>
              </span>
              <span>
                Digital Streewtear <b>LIVE TALK</b>
              </span>
            </ListItem>{" "}
            <ListItem>
              <span>
                <b>06:00pm UTC 11:00am PST</b>
              </span>
              <span>
                Free The Youth <b>RUNWAY</b>
              </span>
            </ListItem>{" "}
            <ListItem>
              <span>
                <b>07:00pm UTC 12:00pm PST</b>
              </span>
              <span>
                Future Retail <b>LIVE TALK</b>
              </span>
            </ListItem>{" "}
            <ListItem>
              <span>
                <b>08:00pm UTC 01:00pm PST</b>
              </span>
              <span>Fashion Film Screenings</span>
            </ListItem>{" "}
          </List>
        </>
      )
    case 3:
      return (
        <>
          <List>
            <ListItem>
              <span>
                <b>Midnight UTC 01:00pm PST</b>
              </span>
              <span>Avatares y Cultura (Repeat Talk)</span>
            </ListItem>{" "}
            <ListItem>
              <span>
                <b>01:00am UTC 06:00pm PST</b>
              </span>
              <span>Digital Streetwear (Repeat Talk)</span>
            </ListItem>{" "}
            <ListItem>
              <span>
                <b>02:00am UTC 07:00pm PST</b>
              </span>
              <span>
                Free The Youth <b>RUNWAY</b>
              </span>
            </ListItem>{" "}
            <ListItem>
              <span>
                <b>03:00am UTC 08:00pm PST</b>
              </span>
              <span>Future Retail (Repeat Talk)</span>
            </ListItem>{" "}
            <ListItem>
              <span>
                <b>04:00am UTC 09:00pm PST</b>
              </span>
              <span>Fashion Film Screenings</span>
            </ListItem>{" "}
            <ListItem>
              <span>
                <b>5:00pm UTC 10:00am PST</b>
              </span>
              <span>
                Cyberdog <b>RUNWAY</b>
              </span>
            </ListItem>{" "}
            <ListItem>
              <span>
                <b>06:00pm UTC 11:00pm PST</b>
              </span>
              <span>
                Free The Youth <b>RUNWAY</b>{" "}
              </span>
            </ListItem>{" "}
            <ListItem>
              <span>
                <b>07:00pm UTC 12:00pm PST</b>
              </span>
              <span>
                The Banners We Wear <b>RUNWAY</b>{" "}
              </span>
            </ListItem>{" "}
            <ListItem>
              <span>
                <b>08:00pm UTC 05:00pm PST</b>
              </span>
              <span>Fashion Film Screenings</span>
            </ListItem>{" "}
            <ListItem>
              <span>
                <b>Midnight 5:00pm PST</b>
              </span>
              <span>
                Closing Party with <b>Coppola</b>
              </span>
            </ListItem>{" "}
          </List>
        </>
      )
  }
}

export { ScheduleTabs }

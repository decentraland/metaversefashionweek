import { useState } from "react"
import { styled } from "styled-components"

const ScheduleTabs = () => {
  const [activeTab, setActiveTab] = useState(0)

  const days = ["DAY 1", "DAY 2", "DAY 3", "DAY 4"]

  const renderContent = () => {
    return (
      <List>
        <ListItem>
          14:00 Opening X Space Beyond The Hype: What Has Web3 Gaming Achieved
          Today? (X.com)
        </ListItem>{" "}
        <ListItem>
          18:00 Mastering The Fun Factor: What Makes a Web3 Game Engaging?
          (0,81)
        </ListItem>{" "}
        <ListItem>
          20:00 The Impact of AI on Web3 Gaming: Innovation, Challenges and
          Opportunities (0,81)
        </ListItem>{" "}
        <ListItem>
          22:00 So You Want to Launch a Web3 Game?: The Latest Tools, Platforms,
          and Best Practices (0,81)
        </ListItem>{" "}
        <ListItem>23:00 CLOSING PARTY Dollhouse x DCLGX (0,81)</ListItem>
      </List>
    )
  }

  return (
    <TabsContainer>
      <TabsList>
        {days.map((day, index) => (
          <TabButton
            key={day}
            onClick={() => setActiveTab(index)}
            $isActive={activeTab === index}
          >
            {day}
          </TabButton>
        ))}
      </TabsList>
      <TabContent>{renderContent()}</TabContent>
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
  border: 2px solid blue;
  background-color: ${({ $isActive }) =>
    $isActive ? "#FFFFFF" : "rgba(15, 20, 23, 0.8)"};
  color: ${({ $isActive }) => ($isActive ? "#0F1417" : "#EBECFA")};
  border: none;
  border-radius: 12px 12px 0 0;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  transition: all 0.3s ease;
  width: 150px;
  border: 1px solid rgba(235, 236, 250, 1);

  &:hover {
    background-color: ${({ $isActive }) =>
      $isActive ? "#FFFFFF" : "rgba(15, 20, 23, 1)"};
  }

  @media (max-width: 568px) {
    padding: 8px 16px;
    font-size: 16px;
    width: 100%;
  }
`

const TabContent = styled.div`
  background-color: rgba(15, 19, 23, 1);
  border-radius: 0 0px 12px 12px;
  padding: 24px;
  color: #ebecfa;
  border: 1px solid rgba(235, 236, 250, 1);
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
`

const ListItem = styled.li`
  font-size: 18px;
  font-weight: 400;
  color: #ebecfa;
`

export { ScheduleTabs }

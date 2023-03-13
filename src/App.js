import './App.css';
import Footer from './components/Footer';
import FooterPartners from './components/FooterPartners';
import Header from './components/Header';
import SaleInfo from './components/SaleInfo';
import { Box } from "@mui/system";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import timeTrackingLogo from "./images/TimeTrackingLogo.png";
import productivityMonitoringLogo from "./images/ProductivityMonitoringLogo.png";
import taskManagementLogo from "./images/TaskManagementLogo.png";
import communicationChannelsLogo from "./images/CommunicationChannelsLogo.png";
import onlineReportsLogo from "./images/OnlineReportsLogo.png";
import TimeTracking from "./components/TimeTracking";
import ProductivityMonitoring from "./components/ProductivityMonitoring";
import TaskManagement from './components/TaskManagement';
import CommunicationChannels from './components/CommunicationChannels';
import OnlineReports from './components/OnlineReports';

function App() {
  const [value, setValue] = useState(0);
  function handleChange(e, value) {
    setValue(value);
  }

  return (
    <div className='App'>
      <Header />
      <SaleInfo />
      
      <div className="tabContainer">
      <Box className="boxOfTabs" sx={{ borderBottom: 1, borderColor: "#E7E9F2" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            className="tab"
            label={
              <>
                <img src={timeTrackingLogo} />
                <span>Time Tracking with Screenshots</span>
              </>
            }
          />
          <Tab
            className="tab"
            label={
              <>
                <img src={productivityMonitoringLogo} />
                <span>Productivity Monitoring</span>
              </>
            }
          />
          <Tab
            className="tab"
            label={
              <>
                <img src={taskManagementLogo} />
                <span>Task Management</span>
              </>
            }
          />
          <Tab
            className="tab"
            label={
              <>
                <img src={communicationChannelsLogo} />
                <span>Communication Chanels</span>
              </>
            }
          />
          <Tab
            className="tab"
            label={
              <>
                <img src={onlineReportsLogo} />
                <span>Online Reports</span>
              </>
            }
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TimeTracking />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProductivityMonitoring />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TaskManagement />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CommunicationChannels />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <OnlineReports />
      </TabPanel>
    </div>
      <FooterPartners />
      <Footer />
    </div>
  );
}

function TabPanel({ value, index, children }) {
  return <div>{value === index && <h1>{children}</h1>}</div>;
}

export default App;

import React from "react";
import BottomNavigation from "reactjs-bottom-navigation";
import "reactjs-bottom-navigation/dist/index.css";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import ReceiptIcon from "@mui/icons-material/Receipt";
import BusinessIcon from "@mui/icons-material/Business";
import "./style.css"

export default function BottomNavBar() {
  const bottomNavItems = [
    {
      title: "Home",
      icon: <HomeIcon style={{ fontSize: "18px", color: "#000" }} />,
      activeIcon: <HomeIcon style={{ fontSize: "18px", color: "#000" }} />,
    },
    {
      title: "Make Payment",
      icon: (
        <AccountBalanceWalletIcon style={{ fontSize: "18px", color: "#000" }} />
      ),
      // icon: <SearchOutlined style={{ fontSize: "18px" }} />,
      activeIcon: (
        <AccountBalanceWalletIcon style={{ fontSize: "18px", color: "#000" }} />
      ),
    },
    {
      title: "Trip Tracking",
      icon: <CardTravelIcon style={{ fontSize: "18px", color: "#000" }} />,
      // icon: <BellOutlined style={{ fontSize: "18px" }} />,
      activeIcon: (
        <CardTravelIcon style={{ fontSize: "18px", color: "#000" }} />
      ),
    },
    {
      title: "Contract",
      icon: <ReceiptIcon style={{ fontSize: "18px", color: "#000" }} />,
      // icon: <MenuOutlined style={{ fontSize: "18px" }} />,
      activeIcon: <ReceiptIcon style={{ fontSize: "18px", color: "#000" }} />,
      // onClick: () => alert("menu clicked"),
    },
    {
      title: "Dashboard",
      icon: <BusinessIcon style={{ fontSize: "18px", color: "#000" }} />,
      activeIcon: <BusinessIcon style={{ fontSize: "18px", color: "#000" }} />,
      // onClick: () => alert("menu clicked"),
    },
  ];

  return (
    <div className='body_bottom-nav'>
      <BottomNavigation
        items={bottomNavItems}
        defaultSelected={0}
        onItemClick={(item) => console.log(item)}
      />
    </div>
  );
}

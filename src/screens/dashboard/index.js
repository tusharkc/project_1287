import React, { useContext } from "react";

import { AuthContext } from "../../contexts/auth.context";
import ContentPanel from "./components/content-panel";
import ProfileBox from "./components/profilebox";

export default function Dashboard() {
  const {role} = useContext(AuthContext);
  // console.log(state);
  if(role === 'TRADER'){
    return (
      <>
        {" "}
        <ProfileBox />
        <ContentPanel />
      </>
    );
  } else {
    return <h4 className="mt-5 ml-5">Pending building dashboard of {role}</h4>
  }
}

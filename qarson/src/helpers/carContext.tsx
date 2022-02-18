import React, { useState } from "react";

export const MyContext = React.createContext<any>(false);

export const MyProvider = (props: any) => {
const [refresh, setRefresh] = useState(false);
return <MyContext.Provider value={[refresh, setRefresh]}>{props.children}</MyContext.Provider>
}
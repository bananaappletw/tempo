import React from "react";

const context = {
    bpm: 0
}
interface contextType{
    bpm: number;
}
const AppContext = React.createContext<contextType>(context);
export default AppContext

import { useState } from "react"
// import CustomCard from "../Components/CustomCard"
import CustomCardWithChildren from "../Components/CustomCardWithChildren";
import Switch from '@mui/material/Switch';
import { MenuItem, Slider } from "@mui/material";
import {Select} from "@mui/material"
import "../styles/Dashboard.css"
// import OnlineMode from "../Components/OnlineMode"

    const Dashboard = () => {
        const [isOnline, setIsOnline]= useState(true)
        const [isLoud, setIsLoud] = useState(0)
        const [selection, setSelection] = useState("")

         const handleSelection = (event) => {
            setSelection(event.target.value)
         }

        return (
         <>
         <h2>Welcome User</h2>
         <div className="cards">
            
            <CustomCardWithChildren 
                  title="Online Mode" 
                  body="Is this application connected to the internet?" 
               >
                  <Switch onChange={() => setIsOnline(!isOnline)}/>
               </CustomCardWithChildren>




            <CustomCardWithChildren 
               title="Master Volume" 
               body="Overrides all other sounds settings in this application" 
            >
               <Slider onChange={(event) => setIsLoud(event.target.value)}/>
            </CustomCardWithChildren>




            <CustomCardWithChildren 
               title="Sound Quality" 
               body="Manually control the music quality in event of poor connection" 
            >
               <Select value={selection} onChange={handleSelection}>
                  <MenuItem value={1}>Low</MenuItem>
                  <MenuItem value={2}>Normal</MenuItem>
                  <MenuItem value={3}>High</MenuItem>
               </Select>
            </CustomCardWithChildren>
         
         </div>
         <h3>System Noficiations:</h3>
         {isOnline && (
            <p>Offline</p>
        )}

        {isLoud > 80 && <p>Listening to music at a high volume could cause long-term hearing loss.</p>

        }

        {selection === 1 && <p>Music quality is degraded. Increase quality if your connection allows it.</p>}
         
         </>
      )
    }

 


export default Dashboard
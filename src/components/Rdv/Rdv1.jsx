import React, { useState,useEffect } from "react";
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import logo from '../../Assets/2.png';
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import DatePicker from "react-datepicker";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "./Rdv.css";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];

function App() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);


    
    function handleAddEvent() {
        for (let i = 0; i < allEvents.length; i++) {
            const d1 = new Date(allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);
            if ((d1 <= d2 && d2 <= d3) || (d1 <= d4 && d4 <= d3)) {
                alert("CLASH");
                break;
            }
        }
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div className="App">
            <AdminSidebar />
            <div className='Nav'>
                <img className='logo' src={logo} alt="Logo" />
            </div>
            <div className="rdv">
            <h1>Calendrier des rendez-vous</h1>
            <div>
                <input type="text" placeholder="Infos du RDV .." style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Date debut" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="Date fin" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button style={{ marginTop: "10px" ,color:'blue' ,borderRadius:'10px'}} onClick={handleAddEvent}>
                    Ajouter 
                </button>
            </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div></div>
    );
}

export default App;

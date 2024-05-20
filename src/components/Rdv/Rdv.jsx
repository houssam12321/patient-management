import React from 'react'
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import logo from '../../Assets/2.png';
import './Rdv.css'
import Fullcalendar from '@fullcalendar/react';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Rdv() {
  return (
    <div>
      <AdminSidebar></AdminSidebar>
      <div className='Nav'>
            <img className='logo' src={logo} alt="" />
      </div>
      <div className='rdv'>
      <div>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        height={"90vh"}
      />
    </div>



      </div>

        
      
    </div>
  )
}

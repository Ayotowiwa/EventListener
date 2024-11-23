import React, { useState } from 'react';
import EventForm from './EventForm';
import EventList from './EventList';

function Dashboard() {
  const [events, setEvents] = useState([]);

  // Handler to add a new event
  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <div className="dashboard p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Event Dashboard</h1>
      <EventForm addEvent={addEvent} />
      <EventList events={events} />
    </div>
  );
}

export default Dashboard;

import { useState } from 'react';
import React from 'react'
import EvenItem from './components/evenItem'
import EventsJson from "../../data/events.json"


// console.log(data);


// const events = data._embedded.events;


function Events() {
    const [data] = useState(EventsJson);
    const {_embedded: {events}} = data;

    const handleEventItemClick = (id) => {
        console.log("Evento clickeado", id);
    };

    const eventsComponent = events.map((eventItem) => 
        (<EvenItem 
            key= {`event-item-${eventItem.id}`} 
            name={eventItem.name}
            info={eventItem.info}
            image={eventItem.images[0].url}
            onEventClick={handleEventItemClick}
            id={eventItem.id}
            />
        ));

    return (
        <div>
            Eventos
            {eventsComponent}
        </div> 
    )
}

export default Events
import React from 'react';
import '../assets/css/EventLifecycle.css'; // Assurez-vous d'avoir un fichier CSS pour les styles

const EventLifecycle = () => {
  return (
    <div className="event-lifecycle">
      <div className="phase purple">PLANIFICATION</div>
      <div className="phase darkblue">PROMOTION</div>
      <div className="phase teal">JOUR D'EVENEMENT</div>
      <div className="phase green">APRÈS L'ÉVENEMENT</div>
    </div>
  );
};

export default EventLifecycle;

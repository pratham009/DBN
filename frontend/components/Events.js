import { useState, useRef } from "react";

const events = [
  {
    id: 1,
    title: "Friday Night Jazz",
    date: "Every Friday",
    tag: "Live Music",
    description: "Smooth jazz sets by local artists. Doors open at 8PM, music starts at 9PM.",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=640&q=80",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: 2,
    title: "Whisky Tasting Night",
    date: "Last Saturday of the Month",
    tag: "Tasting",
    description: "Guided tasting of 6 premium single malts with our in-house sommelier.",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=640&q=80",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: 3,
    title: "Cocktail Masterclass",
    date: "Every Wednesday",
    tag: "Workshop",
    description: "Learn to craft signature cocktails with our head bartender. Book in advance.",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=640&q=80",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: 4,
    title: "Private Hire Night",
    date: "By Appointment",
    tag: "Private",
    description: "Reserve the full venue for your event. Bespoke menus and service available.",
    img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=640&q=80",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
];

export default function Events() {
  const [active, setActive] = useState(null);
  const videoRefs = useRef({});

  const openModal = (id) => {
    setActive(id);
    setTimeout(() => {
      if (videoRefs.current[id]) videoRefs.current[id].play();
    }, 100);
  };

  const closeModal = () => {
    if (active && videoRefs.current[active]) {
      videoRefs.current[active].pause();
      videoRefs.current[active].currentTime = 0;
    }
    setActive(null);
  };

  const activeEvent = events.find((e) => e.id === active);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&family=Didact+Gothic&display=swap');

        .events-section {
          background: #0a0a0a;
          padding: 6rem 2rem;
          font-family: 'Didact Gothic', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .events-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(180,140,60,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .events-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 300;
          color: #e8d5a3;
          text-align: center;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .events-subheading {
          text-align: center;
          color: #6b6356;
          font-size: 0.8rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          margin-bottom: 4rem;
        }

        .divider {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #b8962e, transparent);
          margin: 1rem auto 4rem;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .card {
          position: relative;
          cursor: pointer;
          border: 1px solid rgba(184,150,46,0.15);
          border-radius: 2px;
          overflow: hidden;
          background: #111;
          transition: border-color 0.3s, transform 0.3s;
        }

        .card:hover {
          border-color: rgba(184,150,46,0.5);
          transform: translateY(-4px);
        }

        .card-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
          filter: brightness(0.75) saturate(0.7);
          transition: filter 0.4s;
        }

        .card:hover .card-img {
          filter: brightness(0.9) saturate(0.85);
        }

        .card-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(10,10,10,0.85);
          border: 1px solid rgba(184,150,46,0.4);
          color: #b8962e;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 1px;
        }

        .play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.85);
          opacity: 0;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(184,150,46,0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.3s, transform 0.3s;
          pointer-events: none;
        }

        .card:hover .play-btn {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }

        .play-icon {
          width: 0;
          height: 0;
          border-top: 9px solid transparent;
          border-bottom: 9px solid transparent;
          border-left: 14px solid #0a0a0a;
          margin-left: 3px;
        }

        .card-body {
          padding: 1.25rem;
        }

        .card-date {
          font-size: 0.65rem;
          color: #b8962e;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 0.4rem;
        }

        .card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem;
          font-weight: 600;
          color: #e8d5a3;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }

        .card-desc {
          font-size: 0.78rem;
          color: #8a7d6b;
          line-height: 1.6;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.92);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal {
          background: #111;
          border: 1px solid rgba(184,150,46,0.25);
          border-radius: 2px;
          max-width: 640px;
          width: 100%;
          overflow: hidden;
          animation: slideUp 0.25s ease;
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .modal-header {
          position: relative;
        }

        .modal-header img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          filter: brightness(0.6) saturate(0.6);
          display: block;
        }

        .modal-close {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(10,10,10,0.85);
          border: 1px solid rgba(184,150,46,0.3);
          color: #e8d5a3;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          transition: border-color 0.2s;
        }

        .modal-close:hover { border-color: #b8962e; }

        .modal-body {
          padding: 1.5rem;
        }

        .modal-tag {
          font-size: 0.65rem;
          color: #b8962e;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          margin-bottom: 0.4rem;
        }

        .modal-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 600;
          color: #e8d5a3;
          margin-bottom: 0.75rem;
        }

        .modal-desc {
          font-size: 0.85rem;
          color: #8a7d6b;
          line-height: 1.7;
          margin-bottom: 1.25rem;
        }

        .modal video {
          width: 100%;
          border-radius: 1px;
          border: 1px solid rgba(184,150,46,0.15);
          background: #000;
        }
      `}</style>

      <section className="events-section">
        <h2 className="events-heading">Events</h2>
        <p className="events-subheading">What's on at the bar</p>
        <div className="divider" />

        <div className="cards-grid">
          {events.map((event) => (
            <div key={event.id} className="card" onClick={() => openModal(event.id)}>
              <img src={event.img} alt={event.title} className="card-img" />
              <span className="card-tag">{event.tag}</span>
              <div className="play-btn"><div className="play-icon" /></div>
              <div className="card-body">
                <p className="card-date">{event.date}</p>
                <h3 className="card-title">{event.title}</h3>
                <p className="card-desc">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {active && activeEvent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <img src={activeEvent.img} alt={activeEvent.title} />
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
            <div className="modal-body">
              <p className="modal-tag">{activeEvent.tag} · {activeEvent.date}</p>
              <h3 className="modal-title">{activeEvent.title}</h3>
              <p className="modal-desc">{activeEvent.description}</p>
              <video
                ref={(el) => (videoRefs.current[activeEvent.id] = el)}
                controls
              >
                <source src={activeEvent.video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// src/ContentCard.jsx
import React from 'react';
import './ContentCard.css';

function ContentCard(props) {
    return (
        <div className="card">
            <img src={props.image} alt={props.title} className="card-image" />

            <div className="card-content">
                <span className="card-tag">{props.tag}</span>
                <h3 className="card-title">{props.title}</h3>
                <p className="card-meta">⌛ {props.dateOrDuration}</p>
                <p className="card-description">{props.description}</p>
                
                <div className="card-actions">
                    <a href={props.watchLink} target="_blank" rel="noopener noreferrer" className="primary-button">
                        Watch Now
                    </a>
                    <a href={props.learnLink} target="_blank" rel="noopener noreferrer" className="secondary-button">
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    );
}
export default ContentCard;
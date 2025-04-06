import React from 'react';
import './NewsUpdates.css';

const newsItems = [
  {
    title: 'New Scholarship Deadlines Announced',
    description: 'Check out the latest deadlines for PMSSS applications...',
    imageUrl: 'LS.jpg', 
    date: 'October 1, 2024',
  },
  {
    title: 'Application Process Simplified',
    description: 'We’ve streamlined the application process for a smoother experience...',
    imageUrl: 'NP.jpg', 
    date: 'September 28, 2024',
  },
  {
    title: 'Webinar on Scholarship Opportunities',
    description: 'Join our upcoming webinar to learn about scholarship opportunities...',
    imageUrl: 'PM7.jpg', 
    date: 'September 25, 2024',
  },
  {
    title: 'New Documents Required for 2024',
    description: 'Review the updated list of required documents for the 2024 applications...',
    imageUrl: 'CB.jpg', 
    date: 'September 22, 2024',
  },
  {
    title: 'Success Stories from Last Year',
    description: 'Read inspiring stories from last year’s scholarship recipients...',
    imageUrl: 'PM8.jpg', 
    date: 'September 20, 2024',
  },
];

const NewsUpdates = () => (
  <section className="news-updates">
    <h2>Latest News & Updates</h2>
    <div className="news-items">
      {newsItems.map((item, index) => (
        <div className="news-item" key={index}>
          <img src={item.imageUrl} alt={item.title} className="news-image" />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p className="news-date">{item.date}</p>
          <button className="view-details">View in Details</button>
        </div>
      ))}
      {Array.from({ length: 3 - (newsItems.length % 3) }).fill(null).map((_, index) => (
        <div className="news-item empty" key={index}></div>
      ))}
    </div>
  </section>
);

export default NewsUpdates;

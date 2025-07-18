import React from 'react';
import Card from './Card';

const ContentArea = ({ content, temperature, alerts, places }) => (
  <main className="content-area">
    <Card>
      <p>{content}</p>
      {temperature && <p><strong>Temperature:</strong> {temperature}°C</p>}
    </Card>

    {alerts.length > 0 && (
      <Card title="Local News">
        <ul>
          {alerts.map((a, i) => (
            <li key={i}>
              <b>{a.title}</b><br />
              <a href={a.url} target="_blank" rel="noreferrer">Read more</a>
            </li>
          ))}
        </ul>
      </Card>
    )}

    {places.length > 0 && (
      <Card title="Famous Places">
        <ul>
          {places.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </Card>
    )}
  </main>
);

export default ContentArea;

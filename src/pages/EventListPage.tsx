import { Link } from 'react-router-dom';
import { mockEvents } from '../mockEvents';

export function EventListPage() {
  return (
    <section className="page-section">
      <h2>イベント一覧</h2>
      <p className="page-description">まずはイベントを選択して詳細を確認します。</p>

      <div className="card-list">
        {mockEvents.map((event) => (
          <article className="card" key={event.id}>
            <div className="card-main">
              <h3>{event.title}</h3>
              <p>
                {event.date} / {event.time}
              </p>
              <p>{event.location}</p>
            </div>
            <Link to={`/events/${event.id}`} className="btn btn-secondary">
              詳細へ
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

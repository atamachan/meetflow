import { Link, useParams } from 'react-router-dom';
import { getEventById } from '../mockEvents';

export function EventDetailPage() {
  const { eventId = '' } = useParams();
  const event = getEventById(eventId);

  if (!event) {
    return (
      <section className="page-section">
        <h2>イベント詳細</h2>
        <p className="empty-state">対象イベントが見つかりませんでした。</p>
        <Link to="/events" className="btn btn-secondary">
          一覧に戻る
        </Link>
      </section>
    );
  }

  return (
    <section className="page-section">
      <h2>イベント詳細</h2>
      <article className="card detail-card">
        <h3>{event.title}</h3>
        <dl>
          <dt>日時</dt>
          <dd>
            {event.date} {event.time}
          </dd>

          <dt>集合場所</dt>
          <dd>{event.location}</dd>

          <dt>参加者</dt>
          <dd>{event.attendees.join(' / ')}</dd>

          <dt>メモ</dt>
          <dd>{event.note}</dd>
        </dl>
      </article>
    </section>
  );
}

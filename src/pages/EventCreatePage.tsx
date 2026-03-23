export function EventCreatePage() {
  return (
    <section className="page-section">
      <h2>イベント作成</h2>
      <p className="page-description">
        MVPでは入力UIのみ表示し、送信処理はモックです。
      </p>

      <form className="form" onSubmit={(event) => event.preventDefault()}>
        <label>
          イベント名
          <input type="text" placeholder="例: 新宿集合" />
        </label>
        <label>
          日付
          <input type="date" />
        </label>
        <label>
          時刻
          <input type="time" />
        </label>
        <label>
          集合場所
          <input type="text" placeholder="例: 新宿駅東口" />
        </label>
        <label>
          メモ
          <textarea rows={4} placeholder="補足があれば入力" />
        </label>
        <button type="submit" className="btn btn-primary">
          作成（モック）
        </button>
      </form>
    </section>
  );
}

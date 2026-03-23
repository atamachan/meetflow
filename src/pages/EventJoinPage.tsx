export function EventJoinPage() {
  return (
    <section className="page-section">
      <h2>イベント参加</h2>
      <p className="page-description">
        MVPでは招待リンクではなく、コード入力のみモックで提供します。
      </p>

      <form className="form" onSubmit={(event) => event.preventDefault()}>
        <label>
          参加コード
          <input type="text" placeholder="例: ABC123" />
        </label>
        <label>
          表示名
          <input type="text" placeholder="例: たろう" />
        </label>
        <button type="submit" className="btn btn-primary">
          参加（モック）
        </button>
      </form>
    </section>
  );
}

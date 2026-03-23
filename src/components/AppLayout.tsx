import { NavLink, Outlet } from 'react-router-dom';

const links = [
  { to: '/events', label: '一覧' },
  { to: '/events/create', label: '作成' },
  { to: '/events/join', label: '参加' }
];

export function AppLayout() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>meetflow MVP</h1>
        <p>集合進行をLINE未接続でも確認できるモックUI</p>
      </header>

      <main className="app-main">
        <Outlet />
      </main>

      <nav className="bottom-nav" aria-label="主要メニュー">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive ? 'bottom-nav-link active' : 'bottom-nav-link'
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

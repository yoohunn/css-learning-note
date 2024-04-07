import { CodeBlock } from '@/components';
import styles from './styles.module.css';

export default function NavPage() {
  return (
    <section>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div />
          <div />
          <div />
          <div />
          <div />
        </nav>
      </header>

      <div className={`prose mt-10 pb-20 px-4 ${styles.main}`}>
        <h1>Navbar</h1>
        <p>
          보통 justify-content: space-between으로 구현을 하는데 없이도 더
          심플하게 구현할 수 있다.{' '}
        </p>
        <CodeBlock code={code} language='html' />
        <CodeBlock code={cssCode} language='css' />

        <p>👇👇 justify할 필요없는 레아이웃 </p>

        <div className={styles.example}>
          <nav className={styles.nav}>
            <div />
            <div />
            <div />
            <div />
            <div />
          </nav>
        </div>

        <div className={styles.example2}>
          <nav className={styles.nav}>
            <div />
            <div />
            <div />
            <div />
            <div />
          </nav>
        </div>

        <div className={styles.example3}>
          <nav className={styles.nav}>
            <div />
            <div />
            <div />
            <div />
            <div />
          </nav>
        </div>
      </div>
    </section>
  );
}

const code = `
<nav className={styles.nav}>
  <div />
  <div />
  <div />
  <div />
  <div />
</nav>
`;
const cssCode = `
.nav {
  display: flex;
  gap: 0.5rem;
}

.nav div:first-child {
  margin-right: auto;
}

.nav div:last-child {
  margin-left: auto;
}
`;

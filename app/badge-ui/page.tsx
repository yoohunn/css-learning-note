import styles from './styles.module.css';

export default async function BadgeUiPage() {
  return (
    <main className={styles.main}>
      <div className={styles.screen}>
        <ul className={styles.groupWrapper}>
          {badgeGroups.map((group) => (
            <BadgeGroup key={group.id} {...group} />
          ))}
        </ul>
      </div>
    </main>
  );
}

function BadgeGroup({ title, badges }: BadgeGroup) {
  return (
    <section>
      <div className={styles.groupHeader}>
        <p className={styles.groupHeaderTitle}>{title}</p>
        <p className={styles.groupHeaderCount}>(0/{badges.length})</p>
      </div>
      <ul className={styles.badgeList}>
        {badges.map((item) => (
          <li key={item.id} className={styles.badge}>
            <div className={styles.badgeThumbnail}>
              <LockIcon className={styles.badgeThumbnailIcon} />
            </div>
            <span className={styles.badgeTitle}>{item.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

interface BadgeGroup {
  id: number;
  title: string;
  badges: { id: number; title: string }[];
}
const badgeGroups: BadgeGroup[] = [
  {
    id: 1,
    title: '첫시작',
    badges: [
      { id: 0, title: '꿈의 시작' },
      { id: 1, title: '꿈의 공간' },
      { id: 2, title: '꿈의 얼굴' },
    ],
  },
  {
    id: 2,
    title: '포트폴리오',
    badges: [
      { id: 4, title: '인생의 첫 그림' },
      { id: 5, title: '인생의 첫 기획자' },
      { id: 6, title: '인생의 첫 설계자' },
      { id: 7, title: '기록 첫 걸음' },
      { id: 8, title: '기록 일기장' },
      { id: 9, title: '단편 기록가' },
      { id: 10, title: '장편 기록가' },
      { id: 11, title: '기록의 신' },
    ],
  },
];

function LockIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox='0 0 35 35' fill='#C4C4C4'>
      <path d='M26.2507 11.668H24.7923V10.2096C24.7923 6.18901 21.5213 2.91797 17.5007 2.91797C13.48 2.91797 10.209 6.18901 10.209 10.2096V11.668H8.75065C7.9771 11.668 7.23524 11.9753 6.68826 12.5222C6.14128 13.0692 5.83398 13.8111 5.83398 14.5846V29.168C5.83398 29.9415 6.14128 30.6834 6.68826 31.2304C7.23524 31.7773 7.9771 32.0846 8.75065 32.0846H26.2507C27.0242 32.0846 27.7661 31.7773 28.313 31.2304C28.86 30.6834 29.1673 29.9415 29.1673 29.168V14.5846C29.1673 13.8111 28.86 13.0692 28.313 12.5222C27.7661 11.9753 27.0242 11.668 26.2507 11.668ZM13.1257 10.2096C13.1257 7.79755 15.0886 5.83464 17.5007 5.83464C19.9127 5.83464 21.8757 7.79755 21.8757 10.2096V11.668H13.1257V10.2096ZM18.959 22.9307V26.2513H16.0423V22.9307C15.1746 22.4261 14.584 21.4957 14.584 20.418C14.584 19.6444 14.8913 18.9026 15.4383 18.3556C15.9852 17.8086 16.7271 17.5013 17.5007 17.5013C18.2742 17.5013 19.0161 17.8086 19.563 18.3556C20.11 18.9026 20.4173 19.6444 20.4173 20.418C20.4173 21.4942 19.8267 22.4246 18.959 22.9307Z' />
    </svg>
  );
}

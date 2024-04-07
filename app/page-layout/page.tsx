import { CodeBlock } from '@/components';
import styles from './styles.module.css';

export default async function PageLayoutPage() {
  return (
    <main className={`prose max-w-none pt-20 pb-48 ${styles.main}`}>
      <h1>Page Layout</h1>
      <section className='max-w-full aspect-video bg-gradient-to-r from-cyan-500 to-blue-500'></section>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corrupti,
        sint distinctio deserunt vel unde consequatur sequi nobis necessitatibus
        quis ad officiis doloremque ab, blanditiis facere possimus obcaecati
        voluptate sed!Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Modi corrupti, sint distinctio deserunt vel unde consequatur sequi nobis
        necessitatibus quis ad officiis doloremque ab, blanditiis facere
        possimus obcaecati voluptate sed!
      </p>
      <CodeBlock code={code} />
      <p>
        CSS over-engineering 없이 두 줄 만으로 main layout을 반응형, 중앙으로
        구현 가능
      </p>
      <CodeBlock code={cssCode} language='css' />
    </main>
  );
}

const code = `
<main className='main'>
  <h1>Page Layout</h1>
  <section />
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corrupti,
   sint distinctio deserunt vel unde consequatur sequi nobis necessitatibus
   ...
  </p>
</main>
`;

const cssCode = `
.main {
  /* 70개의 알파벳 문자에 해당하는 만큼의 공간을 최소 너비로 할당 */
  /* min(): 괄호 안에 나열된 값 중 가장 작은 값을 선택 */
  width: min(70ch, 100% - 2rem);
  /* margin-inline: 택스트가 흐르는 축의 마진 */
  /* direction: ltr(default) */
  /* margin-inline: left right */
  /* direction: rtl */
  /* margin-inline: right left */
  margin-inline: auto;
}
`;

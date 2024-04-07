import { CodeBlock } from "@/components";

import styles from "./styles.module.css";

export default function AccordionPage() {
  return (
    <main className="prose mx-auto max-w-[1080px] h-screen flex flex-col item-center p-20">
      <h1>Accordion</h1>
      <section className="space-y-2">
        <div className={`${styles.accrodionWrapper} ${styles.accordion}`}>
          <div>this is Accordion</div>
        </div>
        <div className={`${styles.accrodionWrapper} ${styles.accordion}`}>
          <div>{dummyText}</div>
        </div>
        <div className={`${styles.accrodionWrapper} ${styles.accordionPannel}`}>
          <p className="m-0">Hover here 👈</p>
          <div className={styles.accordion}>
            <div>{dummyText}</div>
          </div>
        </div>
      </section>
      <CodeBlock code={code} language="css" />
    </main>
  );
}

const dummyText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
corrupti, sint distinctio deserunt vel unde consequatur sequi
nobis necessitatibus quis ad officiis doloremque ab, blanditiis
facere possimus obcaecati voluptate sed!`;

const code = `
.accordion {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 300ms;
}

.accordion > div {
  overflow: hidden;
}

.accordion:hover {
  grid-template-rows: 1fr;
}

`;

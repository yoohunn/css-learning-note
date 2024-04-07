import { CodeBlock } from "@/components";

import styles from "./styles.module.css";

export default function AccordionPage() {
  return (
    <main className="prose mx-auto max-w-[1080px] h-screen flex flex-col item-center p-20">
      <h1>Accordion</h1>
      <div className={styles.accordion}>
        <div>this is Accordion</div>
      </div>
      <CodeBlock code={code} />
    </main>
  );
}

const code = `
async function sayHello(name) {
  console.log('Hello', name);
}
`;

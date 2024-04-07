"use client";

import { themes } from "prism-react-renderer";
import { CodeBlock as RCBCodeBlock } from "react-code-block";

export function CodeBlock({
  code,
  language = "ts",
}: {
  code: string;
  language?: string;
}) {
  return (
    <RCBCodeBlock code={code} language={language} theme={themes.oneLight}>
      <RCBCodeBlock.Code className="bg-white p-6 rounded-lg shadow">
        <div className="table-row">
          <RCBCodeBlock.LineNumber className="table-cell pr-4 text-xs text-gray-400 text-right select-none" />
          <RCBCodeBlock.LineContent className="table-cell">
            <RCBCodeBlock.Token />
          </RCBCodeBlock.LineContent>
        </div>
      </RCBCodeBlock.Code>
    </RCBCodeBlock>
  );
}

import { useEffect, useRef } from "react"
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

type CodeBlockProps = {
    codeSnippet: string
}
export const CodeBlock = ({codeSnippet}:CodeBlockProps)=>{
    const codeRef = useRef<HTMLElement>(null)
    useEffect(()=>{
        if (codeRef.current) {
            hljs.registerLanguage('javascript', javascript);
            hljs.highlightElement(codeRef.current);
          }
    },[codeSnippet])
    return (
        <pre className="bg-gray-900 text-white p-6 rounded-lg overflow-hidden overflow-x-auto">
            <code ref={codeRef}>{codeSnippet}</code>
        </pre>
    )
}



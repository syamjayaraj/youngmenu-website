import type { ElementType, ReactNode } from "react";
import Image from "next/image";

type StrapiTextNode = {
  type?: string;
  text?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
  url?: string;
  children?: StrapiTextNode[];
};

type StrapiBlock = {
  type?: string;
  level?: number;
  format?: string;
  children?: StrapiTextNode[];
  image?: {
    url?: string;
    alternativeText?: string;
    width?: number;
    height?: number;
  };
};

function renderInline(nodes: StrapiTextNode[] | undefined): ReactNode {
  if (!nodes?.length) return null;

  return nodes.map((node, index) => {
    if (node.type === "link" && node.url) {
      return (
        <a key={index} href={node.url} target="_blank" rel="noopener noreferrer">
          {renderInline(node.children)}
        </a>
      );
    }

    const text = node.text ?? "";
    if (!text && node.children?.length) {
      return <span key={index}>{renderInline(node.children)}</span>;
    }

    let content: ReactNode = text;

    if (node.bold) content = <strong key={`b-${index}`}>{content}</strong>;
    if (node.italic) content = <em key={`i-${index}`}>{content}</em>;
    if (node.code) content = <code key={`c-${index}`}>{content}</code>;

    return <span key={index}>{content}</span>;
  });
}

function renderBlock(block: StrapiBlock, index: number): ReactNode {
  switch (block.type) {
    case "paragraph":
      return <p key={index}>{renderInline(block.children)}</p>;
    case "heading": {
      const level = Math.min(6, Math.max(1, block.level ?? 2));
      const Tag = `h${level}` as ElementType;
      return <Tag key={index}>{renderInline(block.children)}</Tag>;
    }
    case "list": {
      const ListTag = block.format === "ordered" ? "ol" : "ul";
      return (
        <ListTag key={index}>
          {block.children?.map((item, itemIndex) => {
            if (typeof item !== "object" || !item) return null;
            const listItem = item as StrapiTextNode;
            return <li key={itemIndex}>{renderInline(listItem.children)}</li>;
          })}
        </ListTag>
      );
    }
    case "quote":
      return (
        <blockquote key={index}>
          <p>{renderInline(block.children)}</p>
        </blockquote>
      );
    case "code":
      return (
        <pre key={index}>
          <code>{renderInline(block.children)}</code>
        </pre>
      );
    case "image": {
      const url = block.image?.url;
      if (!url) return null;
      const alt = block.image?.alternativeText ?? "";
      return (
        <figure key={index} className="blog-prose__figure">
          <Image
            src={url}
            alt={alt}
            width={block.image?.width ?? 1200}
            height={block.image?.height ?? 675}
            className="blog-prose__image"
            sizes="(max-width: 768px) 100vw, 720px"
          />
          {alt ? <figcaption>{alt}</figcaption> : null}
        </figure>
      );
    }
    default:
      return block.children?.length ? (
        <p key={index}>{renderInline(block.children)}</p>
      ) : null;
  }
}

function renderBlocks(content: unknown): ReactNode {
  if (!Array.isArray(content)) return null;
  return content.map((block, index) =>
    renderBlock(block as StrapiBlock, index)
  );
}

export function BlogRichText({ content }: { content: unknown }) {
  if (content == null) return null;

  if (typeof content === "string") {
    const trimmed = content.trim();
    if (!trimmed) return null;

    if (/<[a-z][\s\S]*>/i.test(trimmed)) {
      return (
        <div
          className="blog-prose"
          dangerouslySetInnerHTML={{ __html: trimmed }}
        />
      );
    }

    return <div className="blog-prose whitespace-pre-wrap">{trimmed}</div>;
  }

  const blocks = renderBlocks(content);
  if (!blocks) return null;

  return <div className="blog-prose">{blocks}</div>;
}

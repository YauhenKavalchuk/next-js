const Heading = ({ tag, text }: { tag?: string; text: string}) => {
  const Tag = tag || 'h1';
  return <Tag>{text}</Tag>
}

export default Heading;

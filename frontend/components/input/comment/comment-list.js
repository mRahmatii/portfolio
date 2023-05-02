export default function CommentList(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((item) => (
        <li>
          <p>{item.text}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

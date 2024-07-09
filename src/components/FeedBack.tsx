interface FeedBackProps {
  msg: string;
}
function FeedBack({ msg }: FeedBackProps) {
  return (
    <div style={{ position: 'absolute', top: '20px', right: '20px', height: '20px', width: '100px' }}>
      <h3>{msg}</h3>
    </div>
  );
}

export default FeedBack;

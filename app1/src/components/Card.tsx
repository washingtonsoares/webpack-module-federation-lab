import './styles.css';

type Props = {
  children: React.ReactNode;
}

function Card({ children }: Props) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default Card;

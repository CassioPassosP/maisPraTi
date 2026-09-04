import styled from "styled-components";
import Button from "./Button";

const Card = styled.div`
  background-color: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.border};
  border-radius: 8px;
  padding: 16px;
  box-shadow: ${props => props.theme.shadow};
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
`;

const Img = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

export default function ProductCard({ product }) {
  return (
    <Card>
      <Img src={product.image} alt={product.title} loading="lazy" />
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
      <p>{"★".repeat(product.rating)}</p>
      <span>{product.tag}</span>
      <Button variant="solid">Adicionar</Button>
    </Card>
  );
}
import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {

    useEffect(() => {
        fetch('http://localhost:3000/api/transactions')
        .then(res => res.json())
        .then(data => console.log(data));
    })

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>11/11/2004</td>
          </tr>
          <tr>
            <td>Alugel</td>
            <td className="withdraw">- R$1.100</td>
            <td>Casa</td>
            <td>17/11/2004</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

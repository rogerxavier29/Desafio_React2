import styled from 'styled-components';

export const Botao = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

export const Geral = styled.div`
  background: #f0fff0;
  width: 100%;
`;

export const ListaProd = styled.div`
  display: grid;
  z-index: 100px;
  margin-top: 5px;
  border-style: groove;
  border-bottom: 0.5rem;

  p {
    margin-top: 7px;
    margin-bottom: 15px;
    margin-left: 5px;
  }
`;

export const Botoes = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 170px;
`;

export const BtnProd = styled.button`
  width: 100px;
  height: 30px;
  margin-top: 10px;
  margin-left: 80px;
  border-radius: 3px;
  background: #00ff7f;
  cursor: pointer;
`;

export const Btndel = styled.button`
  width: 100px;
  height: 30px;
  margin-top: 10px;
  margin-left: 80px;
  border-radius: 3px;
  background: #b22222;
  color: #ffff;
  cursor: pointer;
`;

export const BtnEdit = styled.button`
  width: 100px;
  height: 30px;
  margin-top: 10px;
  margin-left: 80px;
  border-radius: 3px;
  background: #ffd700;
  cursor: pointer;
`;

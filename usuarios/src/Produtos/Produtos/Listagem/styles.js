import styled from 'styled-components';

export const Geral = styled.div`
  background: #f0fff0;
`;

export const ListaProd = styled.div`
  display: grid;
  z-index: 100px;
  margin-top: 5px;
  border-style: groove;
  border-top: 0.5rem;
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

export const SectionInputs = styled.section`
  width: 700px;
  height: 70px;
  border-style: dotted;
  background: #dcdcdc;
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-left: 80px;
  margin-bottom: 80px;
`;

export const DivInput1 = styled.div`
  margin-top: 20px;
  margin-bottom: 80px;
  margin-left: 50px;
`;

export const DivInput2 = styled.div`
  margin-top: 20px;
  margin-bottom: 80px;
  margin-left: 80px;
`;

export const ListaProd2 = styled.div`
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

  button {
    width: 100px;
    border-radius: 3px;
    margin-left: 600px;
    margin-top: 5px;
  }
`;

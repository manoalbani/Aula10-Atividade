import { useState } from 'react'
import './Veiculo.module.css'

function App() {
  let [veiculos, setVeiculos] = useState([]);
  let[veiculo, setVeiculo] = useState({ placa:'',
  valor:'',});

  function addVeiculo(){
    if(veiculos.find(x=>x.placa==veiculo.placa)){
      alert('Veiculo já Cadastrado!');
    }else{
      veiculos.push(veiculo);
      setVeiculos([...veiculos]);
    }
    
    limparForm();
  }
  function limparForm(){
    setVeiculo({
      placa:'',
      valor:'',
    });
  }

  function removerVeiculo(veiculo){
    console.log(veiculo);
    veiculos.splice(veiculos.indexOf(veiculo), 1);
    setVeiculos([...veiculos]);
  }

  return (
    <div>
   <input 
   placeholder='Placa'
    value={veiculo.placa}
    onChange={(e)=>{ veiculo.placa = e.target.value
      setVeiculo({...veiculo})}}
   />
   <input 
    placeholder='Valor'
    value={veiculo.valor}
    onChange={(e)=>{ veiculo.valor = e.target.value
      setVeiculo({...veiculo})}}
   />
   
   <button onClick={addVeiculo}>Salvar</button>
   <div className='Veiculos'>
   <table border={1}>
    <tbody>
   <tr>
      <th >Placa</th>
        <th >Valor</th>
    </tr>
    {veiculos.map((x, i)=>{
      return       <tr key={i}>
        <th >{x.placa}</th>
        <th >{x.valor}</th>
        <th ><button onClick={()=>{removerVeiculo(x)}} >Remover</button></th>
        
      </tr>
    })}
    </tbody>
   </table>
   </div>
   </div>
  )
}

export default App

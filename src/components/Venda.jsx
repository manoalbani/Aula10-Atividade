import { useState } from 'react'
import './Venda.module.css'

function App() {
  let [veiculos, setVeiculos] = useState([]);
  let[veiculo, setVeiculo] = useState({ placa:'',
    valor:0,
    formaPgto:'',
    data:''});

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
      valor:0,
      formaPgto:'',
      data:''});
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
    type='number'
    value={veiculo.valor}
    onChange={(e)=>{ veiculo.valor = parseFloat(e.target.value)
      setVeiculo({...veiculo})}}
   />
   
   <input 
    placeholder='Forma Pagamento'
    value={veiculo.formaPgto}
    onChange={(e)=>{ veiculo.formaPgto = e.target.value
      setVeiculo({...veiculo})}}
   />
   
   <input 
    placeholder='Data'
    type='date'
    value={veiculo.data}
    onChange={(e)=>{ veiculo.data = e.target.value
      setVeiculo({...veiculo})}}
   />
   
   <button onClick={addVeiculo}>Salvar</button>
   <div className='Veiculos'>
   <table border={1}>
    <tbody>
   <tr>
      <th >Placa</th>
        <th >Valor</th>
        <th >Forma Pagamento</th>
        <th >Data</th>
    </tr>
    {veiculos.map((x, i)=>{
      return       <tr key={i}>
        <th >{x.placa}</th>
        <th >{x.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</th>
        <th >{x.formaPgto}</th>
        <th >{new Date(x.data+'T10:30:00-03:00').toLocaleDateString()}</th>
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

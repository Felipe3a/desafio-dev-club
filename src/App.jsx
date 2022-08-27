import { useState } from 'react'
import { Item, Container, TodoList, Input, Button, List } from './styles'
import './App.css'

function App(){ 
  const [tarefas, setTarefas] = useState([])

  return (
    <Container>
        <input placeholder="Digite a sua tarefa" onChange={quandoEuDigitoNoInput}/>
        <button onClick={quandoClicaNoBotao}>Adicionar Tarefa</button>

        <ul>
            {
                tarefas.map((item, index) => (
                    <Item key={index}>{item}</Item>
                ))
            }
        </ul>
        <TodoList>
            <Input placeholder="Digite a sua tarefa" onChange={quandoEuDigitoNoInput}/>
            <Button onClick={quandoClicaNoBotao}>Adicionar Tarefa</Button>

            <List>
                {
                    tarefas.map((item, index) => (
                        <Item key={index}>{item}</Item>
                    ))
                }
            </List>
        </TodoList>
    </Container>
)
}

export default App

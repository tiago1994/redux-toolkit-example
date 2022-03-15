import { useAppDispatch, useAppSelector } from './app/hooks';
import { incrementCount, decrementCount} from './features/count/count-slice';
import { getList } from './features/todos/todos-slice';

function App() {
  //Com o useAppSelector, conseguimos recuperar um valor lá do store
  const user = useAppSelector((state) => state.count);
  const {todos, loading} = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h3>{user.count}</h3>
      <div style={{display: 'flex'}}>
        {/* Aqui é um caso simples de increment e decrement, daria para passar um valor e coisas do tipo na funcao */}
        <button onClick={() => dispatch(incrementCount())}>Increment</button>
        <button onClick={() => dispatch(decrementCount())}>Decrement</button>
      </div>

      <div style={{display: 'flex'}}>
        {/* Essa é a chamada que realiza o get lá nos todos */}
        <button onClick={() => dispatch(getList())}>Carregar Lista</button>
      </div>

      {/* Essa variavel que vem via useAppSelector, só vai possuir valor quando finalizar a request e cair no builder.addCase(getList.fulfilled), assim populando as informacoes nesse todos.
      É legal saber que em fluxos nos quais voce precisa de um loading, error ou variacoes do caso, podemos tratar nesses addCase */}
      {todos.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>userId</th>
              <th>title</th>
              <th>completed</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, key) => (
              <tr key={key}>
                <td>{todo.id}</td>
                <td>{todo.userId}</td>
                <td>{todo.title}</td>
                <td>{todo.completed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Fica viavem consultarmos alguma variavel de loading para saber se ja foi finalizada a request */}
      {loading && <div>Carregando</div>}
    </div>
  );
}

export default App;

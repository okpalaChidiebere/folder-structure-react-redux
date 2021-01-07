function List (props) {
    return (
      <ul>
          {props.items.map((item) => (
              <li key={item.id}>
                  <span 
                  onClick={/* due to this is an optional parameter, we check if props.toggle is passed
                      then we invoke the toggle function which will cause a re-render to the Ui with the updated state*/
                  () => props.toggle && props.toggle(item.id)}
                  style={{textDecoration: item.complete ? 'line-through' : 'none'}}
                  >
                  {item.name}</span>
                  <button onClick={() => props.remove(item)}>
                      X
                  </button>
              </li>
          ))}
      </ul>
    )
}

export default List
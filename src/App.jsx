import { useState } from 'react';
import './App.css';
import DynamicForm from './components/DynamicForm';

const styles = {
  fontSize: '16px',
    padding: '.5rem'
}

function App() {
  const [forms, setForms] = useState([{id: Date.now(), comp: <DynamicForm />, visibility: true}]);

  const onAddForm = () =>{
    setForms([...forms, {id: Date.now(), comp: <DynamicForm />, visibility: true}])
  }

  const onDeleteForm = (id) => {
    const newForms = forms.filter(elem => elem.id !== id)
    setForms(newForms);
  }
  
  return (
    <div className="App">
      {
        forms.map(form => (
          form.visibility && (<div key={form.id}>
            <p>{form.id}</p>
            <button onClick={() => onDeleteForm(form.id)}>Delete</button>
            {form.comp}
          </div>)
        ))
      }
      <button style={styles} onClick={onAddForm}>Add Form</button>
    </div>
  )
}



export default App;

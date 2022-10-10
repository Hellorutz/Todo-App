import React,{useState} from 'react';
import { addTodos, removeTodos, updateTodos ,completeTodos} from '../redux/reducer';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import '../App.css';
const mapStateToProps = (state) => {
    return {
        todos:state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo:(obj) => dispatch(addTodos(obj)),
        removeTodo:(id) => dispatch(removeTodos(id)),
        updateTodo:(obj) => dispatch(updateTodos(obj)),
        completeTodo:(id) => dispatch(completeTodos(id)),
    }
}

const ViewTodos = (props) => {
    const [sort, setSort] = useState('active');
    return (
        <div className='displaytodos'>
            <div className='buttons'>
                <button onClick={()=> setSort("active")}>Pending Task List</button>
                <button onClick={()=> setSort("completed")}>Completed Task List</button>
                <button onClick={()=> setSort("all")}>All Task List</button>
            </div>

            <ul>
                {
                    props.todos.length > 0  && sort ==="active" ? 

                    props.todos.map(item => {
                        return (
                            item.completed ===false &&
                            <TodoItem 
                            key = {item.id}
                            item = {item}
                            removeTodo = {props.removeTodo}
                            updateTodo = {props.updateTodo}
                            completeTodo = {props.completeTodo}/>
                        )
                    }): null
                }
                {
                    props.todos.length > 0  && sort ==="completed" ? 

                    props.todos.map(item => {
                        return (
                            item.completed === true &&
                            <TodoItem 
                            key = {item.id}
                            item = {item}
                            removeTodo = {props.removeTodo}
                            updateTodo = {props.updateTodo}
                            completeTodo = {props.completeTodo}/>
                        )
                    }): null
                }
                {
                    props.todos.length > 0  && sort ==="all" ? 

                    props.todos.map(item => {
                        return (
                            
                            <TodoItem 
                            key = {item.id}
                            item = {item}
                            removeTodo = {props.removeTodo}
                            updateTodo = {props.updateTodo}
                            completeTodo = {props.completeTodo}/>
                        )
                    }): null
                }

            </ul>
            
        </div>
    );
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewTodos);

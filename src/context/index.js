import React, { createContext, useState } from 'react'
import { useFilterTodos, useProjects, useTodos ,
    useProjectsWithStats} from '../hooks'

const TodoContext = createContext()

function TodoContextProvider({children}){
    const defaultProject = 'today'
    const [selectedProject, setSelectedProject] = useState(defaultProject)
    const [selectedTodo, setSelectedTodo] = useState(undefined)

    const todos = useTodos()
const projects = useProjects(todos)
const projectsWithStats = useProjectsWithStats(projects, todos)
const filteredTodos = useFilterTodos (todos,selectedProject)

    return (
        <TodoContext.Provider
            value={
                {
                    selectedProject,
                    setSelectedProject,
                    todos: filteredTodos,
                    projects : projectsWithStats,
                    selectedTodo,
                    setSelectedTodo
                }
            }
        >
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContextProvider, TodoContext }
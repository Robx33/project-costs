import styles from './NovoProject.module.css'
import ProjectForm from '../project/ProjectForm'

import { useNavigate } from 'react-router-dom'

function NovoProject() {

    const navigate = useNavigate()

    function createPost(project) {

        // Inicializando cost e service
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                // redirect
                navigate('/projects', {state: { message: 'Projeto criado com sucesso!' }})
            })
            .catch((error) => console.log(error))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText='Criar Projeto' />
        </div>
    )
}

export default NovoProject
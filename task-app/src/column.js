import React from 'react';
import styled from 'styled-components';
import Task from './task';
import {Droppable} from 'react-beautiful-dnd';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
`;
const Title = styled.h3`
    padding: 8px;
`;
const TaskList = styled.div`
    padding: 8px;
    background-colour: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
`;

export default class Column extends React.Component {
    render() {
        return(
        <Container>
            <Title> {this.props.column.title }</Title>
            <Droppable droppableId={this.props.column.id}>
                {/* provided, has a property called droppable props */}
                { (provided, snapshot) => (
                    <TaskList ref={provided.innerRef} {...provided.droppableProps}
                     isDraggingOver={snapshot.isDraggingOver}>
                        {this.props.tasks.map( (task, index) => <Task key={task.id} task={task} index={index}/>)}
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        </Container>
        );
        
    }
}
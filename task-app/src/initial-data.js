const initialData = {
    tasks: {
        'task-1': {
            id: 'task-1', content: 'take out the garbage'
        },
        'task-2': {
            id: 'task-2', content: 'watch my favourite show'
        },
        'task-3': {
            id: 'task-3', content: 'charge my phone'
        },
        'task-4': {
            id: 'task-4', content: 'cook dinner'
        },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        }
    },
    columnOrder: [ 'column-1' ],
};

export default initialData;
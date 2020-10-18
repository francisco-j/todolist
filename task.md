# TODO API:
Desarrollo de una API usando node para las siguientes funcionalidades:
No hay requerimiento minimo ni maximo asi que aqui puedes volar tu imaginacion.

## DB Models:
- Task:
    - description: string
    - dueDate: date
    - completed: boolean
    - name: string
- User:
    - name: string
    - username: string
    - password: string

## API Endpoints:
- Alta de tarea
- Listado de tareas 
    * Las tareas pueden ser filtradas por cualquiera de los atributos del modelo
    * Deben ser regresadas ordenadas por fecha (fecha de expiracion mas cercana primero)
- Lista de tareas por usuario
- Actualizar una tarea
- Eliminar una tarea
- Asignar una tarea a un usuario
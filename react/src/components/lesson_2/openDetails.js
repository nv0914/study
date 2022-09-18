
export function OpenDetails(id){
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
    }
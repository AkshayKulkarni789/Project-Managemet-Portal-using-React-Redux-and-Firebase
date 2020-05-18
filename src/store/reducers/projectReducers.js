const initState = {
    projects: [
        {
          "id": 1,
          "title": "sunt aut face",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          "id": 3,
          "title": "ea molestias quasi exercitationem",
          "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        }
    ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      console.log("created", action.project)
      return state;
    case 'ADD_PROJECT_ERROR':
      console.log("Create error", action.err)
      return state;
    default:
      return state;
  }
}

export default projectReducer
import axios from 'axios';

const apiUrl = "https://localhost:7106"

export default {
  getTasks: async () => {
    const result = await axios.get(`${apiUrl}/item`)
    return result.data;
  },

  addTask: async (name) => {
    console.log('addTask', name)
    const result = await axios.post(`${apiUrl}/item`, { Id: 0, Name: name, IsComplete: false })
    return result;
  },

  setCompleted: async (id, isComplete) => {
    console.log('setCompleted', { id, isComplete })
    let resultById = await axios.get(`${apiUrl}/item/${id}`)
    console.log("----o.k----", resultById)
    
    resultById.data.isComplete = isComplete
    await axios.put(`${apiUrl}/item/${id}`, { Id: resultById.data.id, Name: resultById.data.name, IsComplete: resultById.data.isComplete })
      .then(console.log("sucsses"))
  },

  deleteTask: async (id) => {
    console.log('deleteTask')
    await axios.delete(`${apiUrl}/item/${id}`)
  }
};


const axios = require("axios")
const api = "http://covid19.mathdro.id/api/countries";
async function testCovid(coun){
    const response = await axios.get(`${api}/${coun}`);
    console.log(response.data.confirmed.value)

    return response.data.confirmed.value
}

describe('search for covid cases', () => {
    test('should return the total no of cases',async () => {
      expect( await testCovid("india") ).toBe(42188138)
    })
  })

  
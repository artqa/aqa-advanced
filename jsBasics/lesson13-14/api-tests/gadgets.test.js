import { Gadgets } from "../apiClient";
let gadgetsApi;
let gadget;
let id;
let ids;


describe('Gadgets tests', () => {
  beforeAll(async() => {
    gadgetsApi = new Gadgets();
    id = 7;
    ids = [3, 5, 10]
    gadget = {
      "name": "Apple MacBook Pro 16",
      "data": {
        "year": 2019,
        "price": 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB"
      }
    };
  })

  test ('GET List of all objects', async() => {
    const response = await gadgetsApi.getAllObjects()
    expect(response.status).toBe(200);
    expect(response.data).toHaveLength(13)
    expect(response.data[6]).toMatchObject({ name: 'Apple MacBook Pro 16' })
  })

  test ('GET List of all objects by IDS', async() => {
    const response = await gadgetsApi.getObjectByID(ids)
    expect(response.status).toBe(200);
    expect(response.data[1]).toMatchObject({ id: '5', name: 'Samsung Galaxy Z Fold2'});
    expect(response.data[0].id).toEqual('3');
  })

  test ('GET Single object 7', async() => {
    const response = await gadgetsApi.getSingleObject(id);
    expect(response.status).toBe(200);
    expect(response.data).not.toBeNull()
    expect(response.data.data).toMatchObject({ 'CPU model': 'Intel Core i9' });
  })

  test ('POST Add object', async() => {
    const response = await gadgetsApi.addObject(gadget);
    expect(response.status).toBe(200);
    expect(response.data).toBeDefined()
    expect(response.data).toBeTruthy()
    expect(response.data).toMatchObject({"name":"Apple MacBook Pro 16","data":{"year":2019,"price":1849.99,"CPU model":"Intel Core i9","Hard disk size":"1 TB"}});
    expect(response.data.data).toMatchObject({ "year": 2019 });
    expect(response.data.data).toMatchObject({ "price": 1849.99 }); 
  })

  test ('Verify error message for wrong URL', async() => {
    await expect(gadgetsApi.getSingleObject(ids)).rejects.toThrow('Request failed with status code 404');
  })
})
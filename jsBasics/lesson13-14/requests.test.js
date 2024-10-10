import axios from 'axios';

test ('GET List of all objects', async() => {
    const response = await axios.get('https://api.restful-api.dev/objects');
    expect(response.status).toBe(200);
    expect(response.data).toHaveLength(13)
    expect(response.data[6]).toMatchObject({ name: 'Apple MacBook Pro 16' })
})

test ('GET List of all objects by IDS', async() => {
    const response = await axios.get('https://api.restful-api.dev/objects?id=3&id=5&id=10');
    expect(response.status).toBe(200);
    expect(response.data[1]).toMatchObject({ id: '5', name: 'Samsung Galaxy Z Fold2'});
    expect(response.data[0].id).toEqual('3');
})
 
test ('GET Single object', async() => {
    const response = await axios.get('https://api.restful-api.dev/objects/7');
    expect(response.status).toBe(200);
    expect(response.data).not.toBeNull()
    expect(response.data.data).toMatchObject({ 'CPU model': 'Intel Core i9' });
})

test ('GET Single object', async() => {
    const response = await axios.get('https://api.restful-api.dev/objects/8');
    expect(response.status).toBe(200);
    expect(response.data.id).toEqual('8')
    expect(response.data.data).toMatchObject({ 'Strap Colour': 'Elderberry' });
})

test ('POST Add object', async() => {
    const response = await axios.post('https://api.restful-api.dev/objects', {
        "name": "Apple MacBook Pro 16",
        "data": {
           "year": 2019,
           "price": 1849.99,
           "CPU model": "Intel Core i9",
           "Hard disk size": "1 TB"
        }
     });
    expect(response.status).toBe(200);
    expect(response.data).toBeDefined()
    expect(response.data).toBeTruthy()
    expect(response.data).toMatchObject({"name":"Apple MacBook Pro 16","data":{"year":2019,"price":1849.99,"CPU model":"Intel Core i9","Hard disk size":"1 TB"}});
    expect(response.data.data).toMatchObject({ "year": 2019 });
    expect(response.data.data).toMatchObject({ "price": 1849.99 }); 
})
import { test, expect, request as apiRequest } from '@playwright/test';

let createdCarId;
let requestHeaders;

test.describe('APIRequestContext tests with the car', () => {

  test.afterEach(async () => {
    if (createdCarId) {
      const apiContext = await apiRequest.newContext();

      const responseDelete = await apiContext.delete(`https://qauto.forstudy.space/api/cars/${createdCarId}`, { headers: requestHeaders });

      expect(responseDelete.ok()).toBeTruthy();
      createdCarId = null;
    }
  });

  test('Positive: Add new car', { tag: '@apiContext' }, async() => {
    const apiContext = await apiRequest.newContext()

    const createCar = await apiContext.post('https://qauto.forstudy.space/api/cars', { data: {carBrandId: 2, carModelId: 8, mileage: 555} });

    expect(createCar.ok()).toBeTruthy();
    const responseBody = await createCar.json();
    expect(responseBody.status).toBe('ok');
    expect(responseBody.data).toHaveProperty('id');
    createdCarId = responseBody.data.id;
    requestHeaders = responseBody.headers; 
  });

  test('Negative: Add car with invalid mileage', { tag: '@apiContext' }, async () => {
    const apiContext = await apiRequest.newContext();

    const createCar = await apiContext.post('https://qauto.forstudy.space/api/cars', { data: {carBrandId: 2, carModelId: 8, mileage: 9999999 } }); // invalid mileage

    expect(createCar.status()).toBe(400);
    const responseBody = await createCar.json();
    expect(responseBody.status).toBe('error');
    expect(responseBody.message).toContain('Mileage has to be from 0 to 999999');
  });

  test('Negative: Add car without required mileage', { tag: '@apiContext' }, async () => {
    const apiContext = await apiRequest.newContext();

    const createCar = await apiContext.post('https://qauto.forstudy.space/api/cars', { data: {carBrandId: 2, carModelId: 8 } }); // missing required data - mileage

    expect(createCar.status()).toBe(400);
    const responseBody = await createCar.json();
    expect(responseBody.status).toBe('error');
    expect(responseBody.message).toContain('Mileage is required');
  });

})
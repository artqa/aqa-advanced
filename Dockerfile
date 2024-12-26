FROM cypress/included:13.5.2

WORKDIR /e2e

COPY . .

RUN npm i

ENTRYPOINT ["npx", "cypress", "run"]
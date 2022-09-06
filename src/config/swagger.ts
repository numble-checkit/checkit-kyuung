import swaggerJSDoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Checkit clone project',
      version: '0.1.0',
      description: 'numble project',
    },
    servers: [
      {
        url: 'http://localhost:8000',
      },
    ],
  },
  apis: [],
}

export const specs = swaggerJSDoc(options)

import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TaskPro API",
      version: "1.0.0",
      description: "Documentație pentru backend-ul aplicației TaskPro",
    },
    servers: [
      {
        url: "http://localhost:5000", // schimbă în producție
      },
    ],
  },
  apis: ['./routes/**/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;

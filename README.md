# Agenda App

This project is a simple agenda application built with Vite, TypeScript, and Web Components. It demonstrates the use of custom elements to create a weekly agenda view.

## Project Structure

- `src/components/`: Contains the custom elements (PaginaDivision, PaginaFilaDivision, PageAgenda, SemanaContainer)
- `src/models/`: Contains the TablaDivisiones class and related models
- `src/main.ts`: Entry point of the application
- `index.html`: Main HTML file
- `Dockerfile`: Instructions for building the Docker image
- `docker-compose.yml`: Docker Compose configuration file

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- Docker (optional, for containerized deployment)

## Running the Project Locally

1. Clone the repository:
   ```
   git clone <repository-url>
   cd agenda-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the URL provided in the console).

## Building for Production

To build the project for production, run:

```
npm run build
```

This will create a `dist` folder with the compiled assets.

## Deploying with Docker

1. Build the Docker image:
   ```
   docker-compose build
   ```

2. Run the container:
   ```
   docker-compose up
   ```

3. Access the application at `http://localhost:4173`

## Development

To add new features or modify existing ones, you can edit the files in the `src` directory. The main components are:

- `PaginaDivision`: Represents a division of the page
- `PaginaFilaDivision`: Represents a row division of the page
- `PageAgenda`: Represents a single page of the agenda
- `SemanaContainer`: Container for multiple agenda pages

The `TablaDivisiones` class in `src/models/TablaDivisiones.ts` handles the logic for dividing the agenda into rows and columns.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
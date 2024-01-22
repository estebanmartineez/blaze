Backend Setup:

Open a terminal and navigate to the root folder of the backend.

Run the following command to fetch data for a specific team:
`npm i`
`npm run fetchData <teamId>`
Replace <teamId> with the actual team identifier for which you want to fetch data.

Start the Docker Compose for the PostgreSQL database:

`docker-compose up`
This will launch the PostgreSQL container.

Once the data is fetched and the database is up, start the backend server:

`npm run start` 
The backend server will start running on the specified port.

Frontend Setup:

Open a new terminal and navigate to the root folder of the frontend.

Run the following command to start the frontend:
`npm i`
`npm run start`
This will launch the React.js development server.

Views:

List of Players:
http://localhost:3000/:teamId/players
Replace :teamId in the URL with the actual team identifier.

List of Matches:
http://localhost:3000/:teamId/matches
Replace :teamId in the URL with the actual team identifier.

Team Selector:
http://localhost:3000/team-selector
This page allows you to select a team.

Make sure the backend server is running and the PostgreSQL container is up before starting the frontend. Adjust the team identifier accordingly for the specific team you want to view.

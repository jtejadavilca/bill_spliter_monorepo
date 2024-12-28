# Steps to run the project locally

1. Clone the repository

2. Enter each project directory (`check_splitter_service`, `check_splitter_webapp` and `check_splitter_socket`) and run:
    ```bash
    yarn install
    ```
3. Copy the file `env.template` to `.env` in the root directory.

4. Run the following command in the root directory to excecute docker-compose and start the db:
    ```bash
    docker compose up -d
    ```
5. Run the following commands:

-   For the `check_splitter_service` project:
    ```bash
    yarn start
    ```
-   For the `check_splitter_webapp` project:
    ```bash
    yarn dev
    ```
-   For the `check_splitter_socket` project:
    ```bash
    yarn start
    ```

6. Call the GET endpoint `http://localhost:3000/api/v1/seed` to seed the database.

7. Access the webapp at `http://localhost:5173`

8. Use the following credentials to login:

    - Email: `user1@gmail.com`
    - Password: `Aa123456.`

9. Enjoy the app!

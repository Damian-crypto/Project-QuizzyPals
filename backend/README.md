# QuizzyPals Backend

<<<<<<< HEAD
**API Endpoints**

## Game Routes

### Get All Quizzes

- **Endpoint**: `GET /api/game/getquizzes/<user-id>`

### Create New Quiz

- **Endpoint**: `POST /api/game/createquiz`
=======
## API End Points

### Get All Quizzes

- **Endpoint**: `GET /api/game/getquizzes`

**Request Body**:

```json
{
  "userId": "<user-id>"
}
```

### Create New Quiz

- **Endpoint**: `GET /api/game/createquiz`
>>>>>>> 275ac45 (quiz creation and retrieval is done)

**Request Body**:

```json
{
  "userId": "<user-id>",
<<<<<<< HEAD
  "quizQuestion": "What is your question?",
  "quizAnswer": "Answer"
}
```

### Start New Game

- **Endpoint**: `POST /api/game/startgame`

**Request Body**:

```json
{
  "userId": "<user-id>",
  "durationHours": 0,
  "durationMinutes": 10
}
```

### End the Game

- **Endpoint**: `GET /api/game/endgame/<host-id>`

## Room Routes

### Create New Room

- **Endpoint**: `POST /api/rooms/createroom`

**Request Body**:

```json
{
  "host": "<user-email>"
=======
  "quizQuestion": "What is your favourite game?",
  "quizAnswer": "IGI"
>>>>>>> 275ac45 (quiz creation and retrieval is done)
}
```

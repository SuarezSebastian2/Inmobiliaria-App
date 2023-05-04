const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const SECRET_KEY = 'your-secret-key';

app.use(cors());
app.use(bodyParser.json());
/*
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username && password) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: 'Credenciales inválidas' });
  }
}); */

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Usuario y contraseña de prueba
  const testUser = {
    username: 'admin',
    password: '1234',
    token: 'fake-jwt-token',
  };

  // Verificar si el nombre de usuario y la contraseña coinciden con los valores de prueba
  if (username === testUser.username && password === testUser.password) {
    res.status(200).json(testUser);
  } else {
    res.status(401).json({ message: 'Nombre de usuario o contraseña incorrecta' });
  }
});


app.listen(3000, () => console.log('Server running on port 3000'));


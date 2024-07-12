const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const corsOptions = require('./config/cors.config');
const authRoutes = require('./routes/auth.routes');
const cookieParser = require('cookie-parser');
const usersRoutes = require('./routes/users.routes');
const uploadRoutes = require('./routes/upload.routes');
const fileUpload = require('express-fileupload');
const path = require('path');

require('dotenv').config();

// Rutas

// Middlewares para cliente
// Opciones avanzadas de configuración de CORS

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());

// Uso de rutas
app.use('/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const startSever = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Connected to database');
  } catch (err) {
    console.log('Connecting error');
  }
  app.listen(process.env.PORT, () =>
    console.log(`Servidor en ejecución en el puerto ${process.env.PORT}`)
  );
};

startSever();

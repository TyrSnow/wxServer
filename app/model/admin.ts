export default app => {
  const mongoose = app.mongoose;
  const AdminSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      index: true
    },
    password: {
      name: {
        type: String,
        required: true
      }
    }
  });

  return mongoose.model('Admin', AdminSchema);
}
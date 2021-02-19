mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/MyFirstDatabase",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

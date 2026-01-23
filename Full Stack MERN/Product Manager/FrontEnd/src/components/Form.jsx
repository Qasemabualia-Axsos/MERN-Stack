import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const Form = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();

    const newProduct = {
      title,
      price: Number(price), // <-- convert to number
      description
    };

    onCreate(newProduct);

    setTitle("");
    setPrice("");
    setDescription("");
  };

  return (
    <Card sx={{ minWidth: 275, padding: 2 }}>
      <CardContent>
        <form style={{ display: "grid", gap: "20px" }} onSubmit={submitHandle}>
          <TextField
            required
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            required
            label="Price"
            value={price}
            type="number"
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            required
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            style={{ background: "red", color: "white" }}
          >
            Create
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Form;

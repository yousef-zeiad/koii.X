// ui
import { Button } from "components/ui";
export const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <Button size="md" color="primary">
        Click me
      </Button>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatum.</p>
      <img src={"/static/logo.png"} />
    </div>
  );
};

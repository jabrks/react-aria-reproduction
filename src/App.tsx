import {
  Select,
  Label,
  Button,
  SelectValue,
  Popover,
  ListBox,
  ListBoxItem,
} from "react-aria-components";
import "./App.css";

function Panel({ label }: { label: string }) {
  return (
    <div className="panel">
      <Select>
        <Label>{label}</Label>
        <Button>
          <SelectValue />
        </Button>
        <Popover>
          <ListBox>
            <ListBoxItem>Cat</ListBoxItem>
            <ListBoxItem>Dog</ListBoxItem>
            <ListBoxItem>Kangaroo</ListBoxItem>
          </ListBox>
        </Popover>
      </Select>
    </div>
  );
}

function App() {
  return (
    <div>
      <Panel label="First Favorite Animal" />
      <Panel label="Second Favorite Animal" />
      <Panel label="Third Favorite Animal" />
    </div>
  );
}

export default App;

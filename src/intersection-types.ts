type Draggable = {
	drag: () => void;
};

type Resizable = {
	resize: () => void;
};

// Intersection types combine multiple types into one
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
	drag: () => {},
	resize: () => {},
};

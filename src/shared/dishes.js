import Uthappizza from "../assets/images/uthappizza.png";
import Zucchipakoda from "../assets/images/zucchipakoda.png";
import Vadonut from "../assets/images/vadonut.png";
import ElaiCheese from "../assets/images/elaicheesecake.png";

export const DISHES = [
  {
    id: 0,
    name: "Uthappizza",
    image: Uthappizza,
    category: "mains",
    label: "Hot",
    price: "4.99",
    featured: true,
    description:
      "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
  },
  {
    id: 1,
    name: "Zucchipakoda",
    image: Zucchipakoda,
    category: "appetizer",
    label: "",
    price: "1.99",
    featured: false,
    description:
      "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",
  },
  {
    id: 2,
    name: "Vadonut",
    image: Vadonut,
    category: "appetizer",
    label: "New",
    price: "1.99",
    featured: false,
    description:
      "A quintessential ConFusion experience, is it a vada or is it a donut?",
  },
  {
    id: 3,
    name: "ElaiCheese Cake",
    image: ElaiCheese,
    category: "dessert",
    label: "",
    price: "2.99",
    featured: false,
    description:
      "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",
  },
];

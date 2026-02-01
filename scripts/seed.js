const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Book = require('../src/models/Book');

dotenv.config();

const books = [
    {
        name: "Foundation",
        author: "Isaac Asimov",
        description: "A mathematician named Hari Seldon spends his life developing a theory of psychohistory, a new and effective mathematical sociology. Using statistical laws of mass action, it can predict the future of large populations.",
        publishDate: "1951-05-01T00:00:00.000Z"
    },
    {
        name: "Dune",
        author: "Frank Herbert",
        description: "Set in the distant future amidst a huge interstellar empire, 'Dune' tells the story of young Paul Atreides, whose family accepts the stewardship of the planet Arrakis.",
        publishDate: "1965-08-01T00:00:00.000Z"
    },
    {
        name: "Neuromancer",
        author: "William Gibson",
        description: "Case, a washed-up computer hacker, is hired by a mysterious employer to pull off the ultimate hack. A foundational work of the cyberpunk genre.",
        publishDate: "1984-07-01T00:00:00.000Z"
    },
    {
        name: "Pride and Prejudice",
        author: "Jane Austen",
        description: "The story follows the main character Elizabeth Bennet as she deals with issues of manners, upbringing, morality, education, and marriage.",
        publishDate: "1813-01-28T00:00:00.000Z"
    },
    {
        name: "1984",
        author: "George Orwell",
        description: "A dystopian social science fiction novel and cautionary tale. It examines the role of truth and facts within politics and the ways in which they are manipulated.",
        publishDate: "1949-06-08T00:00:00.000Z"
    },
    {
        name: "The Hobbit",
        author: "J.R.R. Tolkien",
        description: "Bilbo Baggins, a hobbit, is whisked away from his comfortable life by Gandalf the wizard and a company of thirteen dwarves on a quest to reclaim the lonely mountain.",
        publishDate: "1937-09-21T00:00:00.000Z"
    },
    {
        name: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        description: "An epic high-fantasy novel. The title refers to the story's main antagonist, the Dark Lord Sauron, who created the One Ring to rule the other Rings of Power.",
        publishDate: "1954-07-29T00:00:00.000Z"
    },
    {
        name: "Foundation and Empire",
        author: "Isaac Asimov",
        description: "The second book in the Foundation Trilogy. It deals with the Mule, a mutant with the ability to manipulate emotions, who threatens Seldon's Plan.",
        publishDate: "1952-06-01T00:00:00.000Z"
    },
    {
        name: "Brave New World",
        author: "Aldous Huxley",
        description: "A dystopian novel set in a futuristic World State, inhabited by genetically modified citizens and an intelligence-based social hierarchy.",
        publishDate: "1932-01-01T00:00:00.000Z"
    },
    {
        name: "Snow Crash",
        author: "Neal Stephenson",
        description: "A sci-fi novel that explores linguistics, computer science, politics, and religion. It features the Metaverse, a virtual reality successor to the Internet.",
        publishDate: "1992-06-01T00:00:00.000Z"
    },
    {
        name: "Murder on the Orient Express",
        author: "Agatha Christie",
        description: "A detective novel featuring the Belgian detective Hercule Poirot. It is set on the Orient Express, where a passenger is found murdered.",
        publishDate: "1934-01-01T00:00:00.000Z"
    },
    {
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "The novel tells the story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan. It explores themes of decadence, idealism, and social upheaval.",
        publishDate: "1925-04-10T00:00:00.000Z"
    },
    {
        name: "The Catcher in the Rye",
        author: "J.D. Salinger",
        description: "A story about Holden Caulfield, a teenager who is expelled from school and spends a few days in New York City. It deals with themes of innocence, identity, and alienation.",
        publishDate: "1951-07-16T00:00:00.000Z"
    },
    {
        name: "Fahrenheit 451",
        author: "Ray Bradbury",
        description: "A dystopian novel that presents a future American society where books are outlawed and 'firemen' burn any that are found.",
        publishDate: "1953-10-19T00:00:00.000Z"
    },
    {
        name: "The Martian",
        author: "Andy Weir",
        description: "A sci-fi novel that follows an American astronaut, Mark Watney, as he becomes stranded alone on Mars and must improvise in order to survive.",
        publishDate: "2011-02-11T00:00:00.000Z"
    },
    {
        name: "I, Robot",
        author: "Isaac Asimov",
        description: "A collection of short stories that explore the Three Laws of Robotics and the relationship between humans and robots.",
        publishDate: "1950-12-02T00:00:00.000Z"
    }
];

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected for seeding...');

        await Book.deleteMany();
        console.log('Old data removed.');

        await Book.insertMany(books);
        console.log('Seed data inserted successfully!');

        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

seedData();

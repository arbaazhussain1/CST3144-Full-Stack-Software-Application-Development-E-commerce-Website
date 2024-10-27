const products = [
  {
    id: 1001,
    title: "Mathematics Course",
    description: "Description: Our Mathematics Course is designed to give you a deep understanding of key mathematical concepts, including algebra, calculus, geometry, and statistics, while honing your problem-solving skills. Whether you're preparing for exams, enhancing your critical thinking abilities, or looking to apply mathematics in fields like engineering, finance, or data science, this course offers clear explanations, practical examples, and engaging exercises. With expert guidance and flexible learning modules, you'll build a strong foundation in mathematics that can be applied to real-world challenges and advanced academic pursuits.",
    price: 100,
    image: "/public/Images/maths.jpg",
    availableInventory: 10,
    rating: 5,
  },
  {
    id: 1002,
    title: "English Course",
    description: "Description: Our English Course is designed to enhance your proficiency in reading, writing, speaking, and understanding the English language. Whether you're preparing for academic exams, improving your communication skills, or learning English as a second language, this course covers essential grammar, vocabulary, and writing techniques. You'll also develop critical thinking and analytical skills through literature analysis and creative writing exercises. With interactive lessons and personalized feedback, you'll gain the confidence and fluency needed to effectively communicate in both personal and professional settings.",
    price: 150,
    image: "/public/Images/english.jpg",
    availableInventory: 9,
    rating: 3,
  },
  {
      id: 1003,
      title: "Computer Science Course",
      description: "Description: Our Computer Science Course equips you with essential skills in programming, algorithms, data structures, and computational thinking. Whether you're a beginner or looking to advance your technical knowledge, this course offers a hands-on approach to learning key concepts like coding in languages such as Python or Java, software development, and problem-solving through algorithms. You'll also explore the fundamentals of databases, networking, and system design. With real-world projects and expert instruction, you'll gain the practical skills needed to excel in the ever-evolving field of computer science.",
      price: 300,
      image: "/public/Images/ComputerScience.jpg",
      availableInventory: 20,
      rating: 5,
    },
    {
      id: 1004,
      title: "Science Course",
      description: "Description: Our Science Mastery Course provides a comprehensive exploration of key scientific disciplines, including physics, chemistry, and biology. Ideal for students and science enthusiasts, this course breaks down complex concepts into understandable lessons, covering topics such as the laws of motion, chemical reactions, cell biology, and environmental science. Through interactive experiments, real-world applications, and critical thinking exercises, you'll develop a deeper understanding of how the natural world works. With expert guidance and engaging content, you'll be prepared to tackle scientific challenges and excel in academic or professional science-related fields.",
      price: 220,
      image: "/public/Images/Science.jpg",
      availableInventory: 17,
      rating: 3,
    },
    {
      id: 1005,
      title: "History Course",
      description: "Description: Our History Course offers an engaging journey through the major events, civilizations, and figures that have shaped the world. From ancient empires and revolutions to modern-day history, this course provides a comprehensive understanding of historical timelines, cultural shifts, and key political movements. You’ll learn to analyze historical sources, understand cause and effect, and develop critical thinking skills to interpret the past. With engaging lessons, discussions, and multimedia resources, this course brings history to life, helping you gain valuable insights into how history influences the present and the future.",
      price: 95,
      image: "/public/Images/History.jpg",
      availableInventory: 8,
      rating: 2,
    },
    {
      id: 1006,
      title: "Software Engineering Course",
      description: "Description: Our Software Engineering Course is designed to equip you with the skills and knowledge required to design, develop, and maintain high-quality software systems. You’ll learn core concepts such as software development lifecycles, object-oriented programming, testing, version control, and agile methodologies. From writing efficient code in languages like Java and Python to mastering system design, databases, and software architecture, this course prepares you for real-world challenges. Through hands-on projects, best practices, and expert guidance, you’ll gain the technical and problem-solving skills needed to excel as a professional software engineer. ",
      price: 275,
      image: "/public/Images/SoftwareEngineering.jpg",
      availableInventory: 18,
      rating: 4,
    },
    {
      id: 1007,
      title: "Artificial Intelligence Course",
      description: "Description: Our Artificial Intelligence Course provides an in-depth exploration of AI concepts, techniques, and applications. You’ll learn the fundamentals of machine learning, neural networks, natural language processing, and computer vision, while gaining hands-on experience with tools and programming languages such as Python and TensorFlow. This course covers key AI techniques like supervised and unsupervised learning, reinforcement learning, and deep learning, empowering you to build intelligent systems that solve real-world problems. With practical projects and expert guidance, you’ll develop the skills to innovate in the rapidly evolving field of AI, from automation to advanced data analysis. ",
      price: 400,
      image: "/public/Images/ArtificialIntelligence.jpg",
      availableInventory: 30,
      rating: 4,
    },
    {
      id: 1008,
      title: "Networking Course",
      description: "Description: Our Networking Course offers a comprehensive understanding of computer networks, from the basics of network architecture to advanced protocols and security. You’ll learn how data is transmitted across networks, the role of routers, switches, and firewalls, and how to design and manage both wired and wireless networks. Key topics include TCP/IP, DNS, network troubleshooting, and cybersecurity practices. With hands-on labs and real-world projects, this course prepares you to build, configure, and maintain efficient and secure networks, providing essential skills for careers in IT, networking, and system administration. ",
      price: 230,
      image: "/public/Images/Networking.jpg",
      availableInventory: 16,
      rating: 3,
    },
    {
      id: 1009,
      title: "User Experience (UX) Design Course",
      description: "Description: Our User Experience (UX) Design Course is designed to help you create intuitive, user-centered digital products. You’ll learn the fundamentals of UX design, including user research, wireframing, prototyping, usability testing, and information architecture. This course covers best practices for designing seamless, accessible, and engaging user interfaces, focusing on enhancing user satisfaction and product usability. With practical projects and expert feedback, you’ll develop the skills to craft experiences that meet user needs and drive business success, preparing you for a career in UX design or product development. ",
      price: 125,
      image: "/public/Images/UX.jpg",
      availableInventory: 15,
      rating: 1,
    },
    {
      id: 1010,
      title: "Digital Marketing Course",
      description: "Description: Our Digital Marketing Course is crafted to equip you with the essential skills and strategies needed to thrive in the digital landscape. You’ll explore key areas such as search engine optimization (SEO), social media marketing, content creation, email marketing, and data analytics. Through hands-on projects and case studies, you’ll learn how to develop effective marketing campaigns, engage target audiences, and measure performance using analytics tools. With expert guidance and practical insights, this course prepares you to leverage digital channels for brand growth and customer engagement, making you a valuable asset in today’s competitive marketing environment.",
      price: 170,
      image: "/public/Images/Digital Marketing.jpeg",
      availableInventory: 7,
      rating: 2,
    },
];
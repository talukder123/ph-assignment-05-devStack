# 🚀 Dev Stack

Dev Stack is a responsive web application where developers can explore different technologies and can select different development stack they have as their skills. Users can browse available technologies, view their details, and add their preferred technologies to their stack.

## 🛠️ Technologies Used

* React
* TypeScript
* Tailwind CSS
* DaisyUI
* Vite
* React Icons

## ✨ Features

* **Explore Technologies** — Browse different frontend, backend, database, and development technologies with their details and ratings.
* **Build Your Stack** — User can add their favorite technologies to their personalized development stack, and can remove to make the stack list customized.
* **Fully Responsive** — Designed to work smoothly across mobile, and desktop devices.


## ❓ Q&A

### 1. What is JSX, and why is it used in React?

Basically, JSX is a JavaScript extension that helps us write HTML code inside JavaScript. It is used in React to build components in an easy and simple way.

### 2. What is the difference between props and state?

Props are used to pass data from one component to another. State is used to store and manage data inside a component, and it can be changed.

### 3. What does the useState hook do, and where did you use it in this project?

useState is a React Hook used to store and manage data that can change in a component. I used it in this project to manage the selected technologies in the user's stack.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is a React Hook used to perform side effects in a component. I used it to load the JSON data when the component is rendered.

### 5. Why does every item in a .map() list need a unique key prop?

Every item in a .map() list needs a unique key so React can identify each item and efficiently update the UI whenever needed.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing different UI components based on a condition. I used it to show an empty stack message when no technology is selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Parent component passes data to the child component through props, and the child can send data back by calling a function passed through props from the parent.






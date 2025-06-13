// import {FAQSTypes} from "@/app/Types";
//
// export async function FAQSData(): Promise<FAQSTypes[]> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const demoData = [
//                 {
//                     id: 1,
//                     question: "How do I center a div?",
//                     answer: "Use flexbox or grid, but flexbox is usually the quickest: `display: flex; justify-content: center; align-items: center;`"
//                 },
//                 {
//                     id: 2,
//                     question: "What's the difference between == and === in JavaScript?",
//                     answer: "`==` checks for value equality with type coercion. `===` checks for both value and type equality—it's safer."
//                 },
//                 {
//                     id: 3,
//                     question: "How do I prevent CORS errors?",
//                     answer: "Set the correct `Access-Control-Allow-Origin` header on the server. Or use a proxy for local dev."
//                 },
//                 {
//                     id: 4,
//                     question: "Why is my fetch request returning undefined?",
//                     answer: "You're probably not waiting for the `.json()` promise. Use `await response.json()` inside an async function."
//                 }
//             ]
//             resolve(demoData)
//         },0)
//
//     })
// }
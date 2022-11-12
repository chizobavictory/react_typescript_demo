import './App.css';
// import { Greet } from './components/Greet';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';
// import { Status } from './components/Status';
// import { Heading } from './components/Heading';
// import { Oscar } from './components/Oscar'
// import { Button } from './components/Button';
// import { Input } from './components/Input';
import { Container } from './components/Container';


export const App = () => {
  return (
    <div className='App'>
     <Container styles={{border:'1px solid black',padding: '1rem', }} />
    </div>
  )
}


// const App = () => {
//   return (
//     <div className='App'>
//       <Button 
//       handleClick={(event, id)=> {
//         console.log('Button clicked', event, id)
//       }}/>
//       <Input value='' handleChange={(event)=> console.log(event)} />
//     </div>
//   )
// }



// function App() {
//   const personName = {
//     first: "Chidimma",
//     last: "Onouha",
//   }

//   const nameList = [
//     {
//       first: 'Bruce',
//       last:'Wayne'
//     },
//     {
//       first: 'Clark',
//       last: 'Kent'
//     },
//     {
//       first: 'Princess',
//       last: 'Diana'
//     }
//   ]

//   return (
//     <div className="App">
//       <Greet name='Chidike' messageCount={20} isLoggedIn={false} />
//       <Person name={personName}/>
//       <PersonList names={nameList} />
//       <Status status='loading' />
//       <Heading>Placeholder text </Heading>
//       <Oscar>
//         <Heading> Oscar goes to Vin Deisel </Heading>
//       </Oscar>
//     </div>
//   );
// }




export default App;

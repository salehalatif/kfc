import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

{Menudata.map(item=><KfcCard item={item}/>) }

 {
  Menudata.map(m=>(
     <div class="col">
      <div class="card-group">
   <div class="card">
    <img src={m.props.item.img} class="card-img-top" alt="..."/>
     <div class="card-body">
       <h5 class="card-title"> {m.props.item.title} </h5>
       <p class="card-text"> {m.props.item. description} </p>
    </div>
     </div>
   </div>
   </div>

   ))
 }
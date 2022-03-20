import { MDBCard, MDBCardBody,MDBCardHeader, MDBBtn } from 'mdb-react-ui-kit';
import "./Card.css"

export default function Card(props) {
  const data_render1 = props.data1.map((e) => <li><i class="fas fa-check"></i>&nbsp;&nbsp;{e}</li>);
  const data_render2 = props.data2.map((d) => <li className="muted-text"><i class="fas fa-times"></i>&nbsp;&nbsp;{d}</li>);
  return (
    <MDBCard alignment='center' className="card-container" style={{ width: '25rem'}}>
      <div className="overall-container">
      <MDBCardHeader><div><b style={{ color: 'grey' }}>{props.name}</b></div>
      <h2 className="pack-price">${props.price}</h2><sub><b >/month</b></sub>
      </MDBCardHeader>
      <MDBCardBody className="card-body" style={{padding: '0rem'}}>
        {/* <MDBCardTitle>Special title treatment</MDBCardTitle> */}
          {data_render1}
          {data_render2}
        {/* <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText> */}
        <MDBBtn rounded className="button"><b>Button</b></MDBBtn>
      </MDBCardBody>
      </div>
    </MDBCard>
    
  );
}